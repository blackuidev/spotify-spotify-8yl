import React from 'react';
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, Brain, Cloud, Code, LayoutDashboard, Smartphone, Users } from 'lucide-react';
import { cn } from "../components/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg",
        "hover:border-white/40 transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <GlassContainer className="h-full flex flex-col justify-start items-start p-6 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out group">
    <Icon className="h-10 w-10 text-white mb-4 transition-all duration-300 group-hover:text-purple-400" />
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
    <p className="text-gray-300 text-sm flex-grow">{description}</p>
    <a href="#" className="mt-4 text-purple-300 hover:text-purple-400 flex items-center group-hover:translate-x-1 transition-all duration-300">
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </GlassContainer>
);

const BentoItemContent = ({ title, description, header, icon: Icon }: {
  title: string;
  description: string;
  header?: React.ReactNode;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {header}
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-col space-y-2 p-4">
        <Icon className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
        <h3 className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg">
          {title}
        </h3>
        <p className="font-sans font-normal text-neutral-700 dark:text-neutral-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const servicesData = [
  {
    icon: LayoutDashboard,
    title: "Digital Strategy & Consulting",
    description: "Crafting bespoke digital blueprints that align with your business objectives and drive growth."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building high-performance, scalable, and secure web applications tailored to your needs."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating intuitive and engaging mobile experiences for iOS and Android platforms."
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description: "Designing captivating user interfaces and seamless user experiences that delight your audience."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description: "Implementing robust cloud infrastructure and streamlined DevOps practices for efficiency."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Harnessing the power of AI to automate processes, gain insights, and innovate your business."
  }
];

export default function Services() {
  return (
    <div classNameName="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white font-sans overflow-hidden relative">
      {/* This could be wrapped by a Layout component if available */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <GlassContainer className="mb-16 p-8 text-center max-w-4xl mx-auto animated-border-gradient">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 animate-pulse-slow">
            Our Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Empowering your vision with cutting-edge technology and creative solutions.
          </p>
        </GlassContainer>

        {/* Main Services Grid */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            Solutions Tailored for You
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {servicesData.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={<item.icon className="h-6 w-6 text-purple-400" />}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </section>

        {/* Detailed Service Cards Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
            Deep Dive into Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <GlassContainer className="max-w-3xl mx-auto p-10">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Let's build something extraordinary together. Contact us for a personalized consultation.
            </p>
            <button className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get a Free Quote
            </button>
          </GlassContainer>
        </section>

      </div>

      {/* Background Animated Blobs/Particles - Example if 'animated-blob-background.tsx' or 'sparkle-particles.tsx' were used */}
      {/* <AnimatedBlobBackground /> */}
      {/* Or other background effects like <SparkleParticles /> */}

      <style jsx="true">{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.01); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .animated-border-gradient {
          position: relative;
          overflow: hidden;
        }
        .animated-border-gradient::before {
          content: '';
          position: absolute;
          top: -2px; right: -2px; bottom: -2px; left: -2px;
          background: linear-gradient(45deg, #a78bfa, #f0abfc, #81e6d9, #a78bfa);
          background-size: 400% 400%;
          z-index: -1;
          animation: gradient-border 10s ease infinite;
          border-radius: 26px; /* Match outer rounded-3xl - 2px for border */
        }
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
