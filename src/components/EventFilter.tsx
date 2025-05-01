import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Bookmark } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: {
    search: string;
    type: string[];
    college: string;
    date: string;
    location: string;
  }) => void;
  eventTypes: string[];
  colleges: string[];
  locations: string[];
}

const EventFilter: React.FC<FilterProps> = ({ 
  onFilterChange, 
  eventTypes, 
  colleges, 
  locations 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters(e.target.value, selectedTypes, selectedCollege, selectedDate, selectedLocation);
  };

  const handleTypeChange = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(updatedTypes);
    applyFilters(search, updatedTypes, selectedCollege, selectedDate, selectedLocation);
  };

  const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollege(e.target.value);
    applyFilters(search, selectedTypes, e.target.value, selectedDate, selectedLocation);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    applyFilters(search, selectedTypes, selectedCollege, e.target.value, selectedLocation);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    applyFilters(search, selectedTypes, selectedCollege, selectedDate, e.target.value);
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedTypes([]);
    setSelectedCollege('');
    setSelectedDate('');
    setSelectedLocation('');
    applyFilters('', [], '', '', '');
  };

  const applyFilters = (
    search: string,
    types: string[],
    college: string,
    date: string,
    location: string
  ) => {
    onFilterChange({
      search,
      type: types,
      college,
      date,
      location
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        {/* Filter Toggle Button (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 rounded-lg text-gray-700"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
        
        {/* Desktop Filters */}
        <div className="hidden md:flex items-center gap-4 flex-1">
          {/* Type Dropdown */}
          <div className="flex items-center gap-2">
            <Bookmark size={18} className="text-gray-400" />
            <select
              value={selectedTypes[0] || ''}
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedTypes([e.target.value]);
                  applyFilters(search, [e.target.value], selectedCollege, selectedDate, selectedLocation);
                } else {
                  setSelectedTypes([]);
                  applyFilters(search, [], selectedCollege, selectedDate, selectedLocation);
                }
              }}
              className="py-2 px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">All Types</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Date Input */}
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="py-2 px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Location Dropdown */}
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-gray-400" />
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="py-2 px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="py-2 px-4 text-sm text-primary hover:text-primary-dark"
          >
            Reset
          </button>
        </div>
      </div>
      
      {/* Mobile Filters (Expandable) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 border-t pt-4">
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`py-1 px-3 text-sm rounded-full ${
                    selectedTypes.includes(type)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Date Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          {/* College Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
            <select
              value={selectedCollege}
              onChange={handleCollegeChange}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg"
            >
              <option value="">All Colleges</option>
              {colleges.map((college) => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
          </div>
          
          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="w-full py-2 text-center text-sm text-primary border border-primary rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default EventFilter;