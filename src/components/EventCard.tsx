import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    id,
    name,
    type,
    date,
    college,
    location,
    description,
    registrationLink,
    image,
  } = event;

  const typeColorMap: Record<string, string> = {
    'Tech Talk': 'bg-primary-light',
    'Hackathon': 'bg-secondary-light',
    'Workshop': 'bg-accent-light',
    'Seminar': 'bg-success-light',
    'Conference': 'bg-warning-light',
    'Networking': 'bg-purple-400',
  };

  const backgroundColor = typeColorMap[type] || 'bg-primary-light';

  return (
    <div className="card hover:scale-[1.02] group">
      <div className="relative h-48">
        <img 
          src={image || 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
          <div>
            <span className={`inline-block ${backgroundColor} text-white text-xs font-semibold px-2 py-1 rounded-full mb-2`}>
              {type}
            </span>
            <h3 className="text-white text-xl font-semibold">{name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col gap-2 mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2 text-primary" />
            <span>{college}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex gap-2">
          <Link 
            to={`/events/${id}`} 
            className="flex-1 text-center py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition duration-300"
          >
            View Details
          </Link>
          <a 
            href={registrationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;