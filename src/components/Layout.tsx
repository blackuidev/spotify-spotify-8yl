import React, { ReactNode } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import ShankozMenu from '@/components/ShankozMenu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <ShankozMenu />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="py-4 text-center text-gray-400 text-sm bg-black bg-opacity-50 mt-auto">
          © {new Date().getFullYear()} Shankoz. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;
