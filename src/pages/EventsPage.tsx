import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import EventSubmissionForm from '../components/EventSubmissionForm';
import DecorativeElements from '../components/DecorativeElements';
import { Event } from '../types';
import { fetchEvents, submitEvent } from '../services/eventService';
import { PlusCircle, Loader2, X } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Extract unique values for filters
  const eventTypes = [...new Set(events.map(event => event.type))];
  const colleges = [...new Set(events.map(event => event.college))];
  const locations = [...new Set(events.map(event => event.location))];

  const handleFilterChange = (filters: {
    search: string;
    type: string[];
    college: string;
    date: string;
    location: string;
  }) => {
    let filtered = [...events];

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.college.toLowerCase().includes(searchLower)
      );
    }

    // Filter by type
    if (filters.type.length > 0) {
      filtered = filtered.filter(event => filters.type.includes(event.type));
    }

    // Filter by college
    if (filters.college) {
      filtered = filtered.filter(event => event.college === filters.college);
    }

    // Filter by date
    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(event => event.location === filters.location);
    }

    setFilteredEvents(filtered);
  };

  const handleSubmitEvent = async (formData: any) => {
    setIsSubmitting(true);
    try {
      await submitEvent(formData);
      setShowSubmissionForm(false);
      setSuccess('Event submitted successfully! It will be reviewed and published soon.');
      
      // Refresh events list
      const updatedEvents = await fetchEvents();
      setEvents(updatedEvents);
      setFilteredEvents(updatedEvents);
      
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to submit event:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-4">
      <DecorativeElements variant="events" />
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Discover Tech Events</h1>
          <p className="text-gray-600">Find and join the most exciting tech events at colleges near you</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex justify-between items-center">
            <span>{success}</span>
            <button onClick={() => setSuccess(null)}>
              <X size={16} />
            </button>
          </div>
        )}

        {/* Filter Section */}
        <EventFilter 
          onFilterChange={handleFilterChange}
          eventTypes={eventTypes}
          colleges={colleges}
          locations={locations}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Events Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 size={36} className="animate-spin text-primary" />
              </div>
            ) : filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No events found matching your criteria.</p>
                <button 
                  onClick={() => setShowSubmissionForm(true)}
                  className="inline-flex items-center py-2 px-4 bg-primary text-white rounded-lg"
                >
                  <PlusCircle size={18} className="mr-2" />
                  Submit an Event
                </button>
              </div>
            )}
          </div>

          {/* Submission Form or Submit Button */}
          <div className="lg:w-96">
            {showSubmissionForm ? (
              <EventSubmissionForm 
                onSubmit={handleSubmitEvent}
                isSubmitting={isSubmitting}
              />
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Know about a tech event?</h3>
                <p className="text-gray-600 mb-4">Help the community by sharing tech events at your college or nearby!</p>
                <button 
                  onClick={() => setShowSubmissionForm(true)}
                  className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg flex items-center justify-center hover:bg-primary-dark transition duration-300"
                >
                  <PlusCircle size={18} className="mr-2" />
                  Submit an Event
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;