import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, ArrowLeft, Loader2, Users, Clock, ExternalLink } from 'lucide-react';
import { Event } from '../types';
import { fetchEventById } from '../services/eventService';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvent = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await fetchEventById(id);
        setEvent(data);
      } catch (err) {
        console.error('Failed to fetch event details:', err);
        setError('Failed to load event details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4 flex justify-center items-center">
        <Loader2 size={36} className="animate-spin text-primary" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">{error || 'Event not found'}</p>
            <Link to="/events" className="inline-flex items-center py-2 px-4 bg-primary text-white rounded-lg">
              <ArrowLeft size={18} className="mr-2" />
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const typeColorMap: Record<string, string> = {
    'Tech Talk': 'bg-primary-light',
    'Hackathon': 'bg-secondary-light',
    'Workshop': 'bg-accent-light',
    'Seminar': 'bg-success-light',
    'Conference': 'bg-warning-light',
    'Networking': 'bg-purple-400',
  };

  const backgroundColor = typeColorMap[event.type] || 'bg-primary-light';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/events" 
          className="inline-flex items-center mb-6 text-gray-600 hover:text-primary"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Back to Events</span>
        </Link>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Event Image */}
          <div className="relative h-64 md:h-80">
            <img 
              src={event.image || 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
              alt={event.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6">
                <span className={`inline-block ${backgroundColor} text-white text-sm font-semibold px-3 py-1 rounded-full mb-3`}>
                  {event.type}
                </span>
                <h1 className="text-white text-3xl font-bold">{event.name}</h1>
              </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar size={20} className="mr-3 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Tag size={20} className="mr-3 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">College</p>
                  <p className="font-medium">{event.college}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this event</h2>
              <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Users size={20} className="mr-2 text-primary" />
                  <h3 className="font-semibold">Audience</h3>
                </div>
                <p className="text-gray-600">College students interested in technology, innovation, and networking</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Clock size={20} className="mr-2 text-primary" />
                  <h3 className="font-semibold">Duration</h3>
                </div>
                <p className="text-gray-600">Approximately 3 hours (details will be provided upon registration)</p>
              </div>
            </div>
            
            <a 
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-primary text-white font-semibold rounded-lg text-center hover:bg-primary-dark transition duration-300"
            >
              Register for This Event
              <ExternalLink size={16} className="inline-block ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;