import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import DecorativeElements from '../components/DecorativeElements';

const BlogsPage: React.FC = () => {
  const featuredPost = {
    title: "The Future of Tech Education: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends shaping technology education and how they're transforming the learning experience for students worldwide.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };

  const posts = [
    {
      title: "10 Must-Attend Tech Events This Spring",
      excerpt: "A curated list of the most innovative and inspiring tech events happening across college campuses.",
      author: "Michael Rodriguez",
      date: "March 10, 2025",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Building Your Tech Career: A Student's Guide",
      excerpt: "Essential tips and strategies for students looking to break into the tech industry.",
      author: "Emily Thompson",
      date: "March 5, 2025",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "The Rise of AI in Education",
      excerpt: "How artificial intelligence is revolutionizing the way we learn and teach in higher education.",
      author: "David Kim",
      date: "March 1, 2025",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DecorativeElements />
      
      {/* Featured Post */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 md:h-full">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary font-semibold mb-4">Featured Post</span>
                <h1 className="text-3xl font-bold mb-4">{featuredPost.title}</h1>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <button className="btn-primary self-start">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-primary font-semibold flex items-center hover:text-primary-dark">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;