import React from 'react';
import { TeamCarousel } from '@/components/ui/team-carousel';
import { GlowingCards } from '@/components/ui/glowing-cards';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Simple GlassContainer component for styling
const GlassContainer: React.FC<GlassContainerProps> = ({ children, className }) => (
  <div
    className={`bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${className || ''}`}
  >
    {children}
  </div>
);

const About: React.FC = () => {
  // Placeholder data for TeamCarousel
  const teamMembers = [
    {
      name: "Alice Johnson",
      title: "CEO & Founder",
      image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=AJ",
      description: "Visionary leader driving innovation and growth."
    },
    {
      name: "Bob Williams",
      title: "Chief Technology Officer",
      image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=BW",
      description: "Architecting scalable and robust solutions."
    },
    {
      name: "Charlie Brown",
      title: "Head of Product",
      image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=CB",
      description: "Crafting intuitive and impactful user experiences."
    },
    {
        name: "Diana Prince",
        title: "Marketing Director",
        image: "https://via.placeholder.com/150/DAA520/FFFFFF?text=DP",
        description: "Connecting our vision with the world."
    },
  ];

  // Placeholder data for GlowingCards
  const glowingCardItems = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions."
    },
    {
      title: "Quality",
      description: "Commitment to excellence in every detail of our work."
    },
    {
      title: "Customer Focus",
      description: "Our users are at the heart of everything we do."
    },
    {
      title: "Collaboration",
      description: "Fostering a culture of teamwork and mutual respect."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Pioneering the future of digital experiences with innovation and passion.
        </p>
      </header>

      <section className="container mx-auto">
        <GlassContainer className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            At [Your Company Name], our mission is to empower individuals and businesses through groundbreaking technology and unparalleled user experiences. We believe in crafting solutions that are not only powerful and efficient but also intuitive and delightful to use. Our commitment extends beyond mere functionality; we strive to create platforms that inspire creativity, foster connection, and drive progress in a rapidly evolving digital landscape.
          </p>
        </GlassContainer>

        <GlassContainer className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            We envision a future where technology seamlessly integrates into daily life, enhancing productivity and enriching human experiences without complexity. Our goal is to be at the forefront of this transformation, developing innovative products that set new industry standards and redefine what's possible. We aim to build a global community around our offerings, driven by shared values of innovation, integrity, and impact.
          </p>
        </GlassContainer>

        <GlassContainer className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Assuming GlowingCards can take an array of items for rendering */}
            <GlowingCards items={glowingCardItems} />
          </div>
        </GlassContainer>

        <GlassContainer className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Our success is built on the talent and dedication of our diverse team. We are a collective of passionate innovators, engineers, designers, and strategists committed to bringing our vision to life.
          </p>
          {/* Assuming TeamCarousel takes an 'items' prop */}
          <TeamCarousel items={teamMembers} />
        </GlassContainer>

        <GlassContainer>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-6">Join Us</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            We're always looking for bright minds to join our journey. If you're passionate about technology and want to make a real impact, explore our career opportunities and become a part of something extraordinary.
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Open Positions
          </button>
        </GlassContainer>
      </section>
    </div>
  );
};

export default About;
