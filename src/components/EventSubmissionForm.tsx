import React, { useState } from 'react';
import { Calendar, MapPin, Tag, BookOpen, Link as LinkIcon, MessageSquare } from 'lucide-react';

interface EventFormData {
  name: string;
  type: string;
  date: string;
  college: string;
  location: string;
  description: string;
  registrationLink: string;
}

interface EventSubmissionFormProps {
  onSubmit: (formData: EventFormData) => void;
  isSubmitting: boolean;
}

const EventSubmissionForm: React.FC<EventSubmissionFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<EventFormData>({
    name: '',
    type: 'Tech Talk',
    date: '',
    college: '',
    location: '',
    description: '',
    registrationLink: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EventFormData, string>>>({});

  const eventTypes = ['Tech Talk', 'Hackathon', 'Workshop', 'Seminar', 'Conference', 'Networking'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof EventFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EventFormData, string>> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Event name is required';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
      isValid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description should be at least 20 characters';
      isValid = false;
    }

    if (!formData.registrationLink.trim()) {
      newErrors.registrationLink = 'Registration link is required';
      isValid = false;
    } else if (!formData.registrationLink.startsWith('http')) {
      newErrors.registrationLink = 'Please provide a valid URL';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit an Event</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <div className="relative">
            <BookOpen size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter event name"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
          <div className="relative">
            <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
        </div>
        
        {/* College */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
          <div className="relative">
            <BookOpen size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter college name"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.college ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.college && <p className="mt-1 text-sm text-red-500">{errors.college}</p>}
        </div>
        
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.location ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
        </div>
        
        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <div className="relative">
            <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows={4}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
        </div>
        
        {/* Registration Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Registration Link</label>
          <div className="relative">
            <LinkIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="registrationLink"
              value={formData.registrationLink}
              onChange={handleChange}
              placeholder="https://..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.registrationLink ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            />
          </div>
          {errors.registrationLink && <p className="mt-1 text-sm text-red-500">{errors.registrationLink}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg transition duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Event'}
        </button>
      </form>
    </div>
  );
};

export default EventSubmissionForm;