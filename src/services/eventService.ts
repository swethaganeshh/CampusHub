import { Event } from '../types';

// Mock data for events
const mockEvents: Event[] = [
  {
    id: '1',
    name: 'AI Innovation Hackathon',
    type: 'Hackathon',
    date: '2025-05-15',
    college: 'MIT',
    location: 'Cambridge, MA',
    description: 'Join us for a 48-hour hackathon focused on AI innovations. Build solutions that leverage artificial intelligence to solve real-world problems. Cash prizes for top teams!',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Blockchain & Web3 Workshop',
    type: 'Workshop',
    date: '2025-06-10',
    college: 'Stanford University',
    location: 'Palo Alto, CA',
    description: 'Learn the fundamentals of blockchain technology and Web3 development in this hands-on workshop. Participants will build and deploy their own smart contracts on a test network.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Future of Cloud Computing',
    type: 'Tech Talk',
    date: '2025-05-25',
    college: 'UC Berkeley',
    location: 'Berkeley, CA',
    description: 'Industry experts from leading cloud providers discuss the future of cloud computing, emerging trends, and career opportunities in this fast-growing field.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Women in Tech Summit',
    type: 'Conference',
    date: '2025-07-08',
    college: 'Harvard University',
    location: 'Cambridge, MA',
    description: 'A day-long conference celebrating women in technology featuring keynote speakers, panel discussions, and networking opportunities with industry leaders.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Cybersecurity Bootcamp',
    type: 'Workshop',
    date: '2025-06-20',
    college: 'Georgia Tech',
    location: 'Atlanta, GA',
    description: 'Intensive weekend bootcamp covering essential cybersecurity skills including threat detection, penetration testing, and secure systems design.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Mobile App Development Challenge',
    type: 'Hackathon',
    date: '2025-08-05',
    college: 'Carnegie Mellon',
    location: 'Pittsburgh, PA',
    description: 'Design and build a functional mobile app in just 36 hours. Open to beginners and experienced developers alike. Team formation assistance available.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    name: 'Data Science Career Fair',
    type: 'Networking',
    date: '2025-09-15',
    college: 'University of Washington',
    location: 'Seattle, WA',
    description: 'Connect with top companies hiring data scientists, machine learning engineers, and data analysts. Resume reviews and on-site interviews available.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    name: 'Ethical AI Symposium',
    type: 'Seminar',
    date: '2025-07-22',
    college: 'Yale University',
    location: 'New Haven, CT',
    description: 'A day of thought-provoking discussions on ethical considerations in artificial intelligence development and deployment, featuring academics and industry professionals.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '9',
    name: 'Game Development Workshop',
    type: 'Workshop',
    date: '2025-10-05',
    college: 'NYU',
    location: 'New York, NY',
    description: 'Learn the fundamentals of game design and development using popular engines. By the end of this workshop, you\'ll have created your own simple game!',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '10',
    name: 'Startup Pitch Competition',
    type: 'Networking',
    date: '2025-11-12',
    college: 'Cornell University',
    location: 'Ithaca, NY',
    description: 'Present your tech startup idea to a panel of venture capitalists and angel investors. Cash prizes and potential investment opportunities for winners.',
    registrationLink: 'https://example.com/register',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Function to fetch all events
export const fetchEvents = async (): Promise<Event[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 800);
  });
};

// Function to fetch a single event by ID
export const fetchEventById = async (id: string): Promise<Event> => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = mockEvents.find(event => event.id === id);
      if (event) {
        resolve(event);
      } else {
        reject(new Error('Event not found'));
      }
    }, 800);
  });
};

// Function to submit a new event
export const submitEvent = async (eventData: Omit<Event, 'id' | 'image'>): Promise<Event> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEvent: Event = {
        ...eventData,
        id: String(mockEvents.length + 1),
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      };
      
      // In a real application, this would be sent to a backend API
      mockEvents.push(newEvent);
      resolve(newEvent);
    }, 1500);
  });
};