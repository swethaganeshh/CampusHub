import React from 'react';
import { Monitor, Code, Database, Cloud } from 'lucide-react';
import DecorativeElements from '../components/DecorativeElements';

const ExhibitorsPage: React.FC = () => {
  const categories = [
    {
      icon: Monitor,
      name: 'Hardware & IoT',
      companies: [
        { name: 'TechCorp Solutions', description: 'Leading provider of IoT devices and smart sensors' },
        { name: 'InnovateTech', description: 'Revolutionary AR/VR hardware solutions' },
      ]
    },
    {
      icon: Code,
      name: 'Software Development',
      companies: [
        { name: 'CodeMasters Inc', description: 'Enterprise software development and consulting' },
        { name: 'AppGenius', description: 'Mobile app development specialists' },
      ]
    },
    {
      icon: Database,
      name: 'Data & AI',
      companies: [
        { name: 'DataMinds', description: 'AI-powered analytics and machine learning solutions' },
        { name: 'Neural Systems', description: 'Deep learning and neural network specialists' },
      ]
    },
    {
      icon: Cloud,
      name: 'Cloud Services',
      companies: [
        { name: 'CloudPro Services', description: 'Cloud infrastructure and DevOps solutions' },
        { name: 'ServerLess Co', description: 'Serverless architecture and cloud consulting' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DecorativeElements />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Exhibitors
          </h1>
          <p className="text-xl text-white/90">
            Connect with leading tech companies and innovative startups shaping the future of technology.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <category.icon size={32} className="text-primary mr-4" />
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                <div className="space-y-6">
                  {category.companies.map((company, companyIndex) => (
                    <div key={companyIndex} className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                      <p className="text-gray-600">{company.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Become an Exhibitor</h2>
          <p className="text-gray-600 mb-8">
            Join our community of innovative companies and connect with talented students and professionals.
          </p>
          <button className="btn-primary">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExhibitorsPage;