import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { InteractiveCardGallery } from '@/components/ui/interactive-card-gallery';
import { ImageReveal } from '@/components/ui/image-reveal';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Minimal Layout component for self-containment. In a real application, this would typically be in src/components/Layout.tsx
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="min-h-screen font-sans antialiased">{children}</div>;
};

// A simple GlassContainer component for glassmorphic effect
const GlassContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={`
      bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6
      ${className || ''}
    `}
  >
    {children}
  </div>
);

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Aurora Design System',
    description: 'A comprehensive design system for scalable web applications.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    tags: ['UI/UX', 'React', 'Design System'],
  },
  {
    id: '2',
    title: 'Quantum Analytics Dashboard',
    description: 'Real-time data visualization and insightful analytics for businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1551288259-cd72955f1648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    tags: ['Data Viz', 'Analytics', 'Backend'],
  },
  {
    id: '3',
    title: 'Echo E-commerce Platform',
    description: 'A modern and responsive e-commerce solution with seamless user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-fee21ee26464?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    tags: ['E-commerce', 'Frontend', 'Mobile'],
  },
  {
    id: '4',
    title: 'Celestial AI Assistant',
    description: 'An intelligent AI assistant for productivity and task automation.',
    imageUrl: 'https://images.unsplash.com/photo-1507146153580-60277875c40c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    tags: ['AI/ML', 'Backend', 'SaaS'],
  },
];

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Hero Section */}
          <GlassContainer className="text-center p-10 md:p-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Our Visionary Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Explore a collection of our most impactful projects, where innovation meets elegant design.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg">
              Get in Touch
            </Button>
          </GlassContainer>

          {/* Featured Project - ImageReveal */}
          <GlassContainer className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Featured Case Study
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-purple-300">Project Zenith: Reinventing Digital Experiences</h3>
                <p className="text-gray-300 mb-4">
                  Project Zenith involved a complete overhaul of a legacy enterprise system, transforming it into a modern, intuitive, and highly performant platform. We focused on user-centric design, robust backend architecture, and seamless integration with existing tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-600/30 text-blue-200 border-blue-500/50">Enterprise</Badge>
                  <Badge variant="secondary" className="bg-green-600/30 text-green-200 border-green-500/50">Full-stack</Badge>
                  <Badge variant="secondary" className="bg-yellow-600/30 text-yellow-200 border-yellow-500/50">Cloud Native</Badge>
                </div>
                <Button variant="outline" className="text-white border-purple-500 hover:bg-purple-600/20">
                  View Case Study
                </Button>
              </div>
              <div>
                <ImageReveal
                  src="https://images.unsplash.com/photo-1504384308090-c894fd324f47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project Zenith"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                  revealDirection="left"
                />
              </div>
            </div>
          </GlassContainer>

          {/* Project Gallery - InteractiveCardGallery */}
          <GlassContainer className="p-8">
            <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Our Diverse Portfolio
            </h2>
            <InteractiveCardGallery
              cards={projects.map(project => ({
                id: project.id,
                title: project.title,
                description: project.description,
                image: project.imageUrl,
                link: project.link,
                tags: project.tags,
                content: (
                    <Card className="w-full h-full bg-white/5 border border-white/20 text-white shadow-xl flex flex-col">
                        <CardHeader className="p-4">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-2" />
                            <CardTitle className="text-xl font-bold text-purple-300">{project.title}</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow p-4 pt-0">
                            <div className="flex flex-wrap gap-1">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="bg-blue-600/20 text-blue-200 border-blue-500/40 text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </Button>
                        </CardFooter>
                    </Card>
                )
              }))}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            />
          </GlassContainer>

          {/* Call to Action */}
          <GlassContainer className="text-center p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's collaborate to bring your next big idea to life with cutting-edge design and development.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white shadow-lg">
              Contact Us Today
            </Button>
          </GlassContainer>

        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
