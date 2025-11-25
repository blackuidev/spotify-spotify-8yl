import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GradientButton } from '@/components/ui/gradient-button';
import { LetterGlitch } from '@/components/ui/letter-glitch';
import { TypingText } from '@/components/ui/typing-text';
import { SparkleParticles } from '@/components/ui/sparkle-particles';

const ShankozHero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center h-full px-4"
      >
        <SparkleParticles
          minSize={0.6}
          maxSize={1.2}
          particleDensity={50}
          className="absolute inset-0 z-0 pointer-events-none"
        />
        <h1 className="text-3xl md:text-7xl font-bold text-white text-center relative z-10 drop-shadow-lg">
          <LetterGlitch text="Shankoz" />
        </h1>
        <p className="text-base md:text-2xl text-white text-center relative z-10 max-w-2xl mt-4 drop-shadow-md">
          <TypingText text="Indulge in the finest gourmet burgers. Taste the difference!" />
        </p>
        <GradientButton className="mt-8 relative z-10">
          Explore Our Menu
        </GradientButton>
      </motion.div>
    </AuroraBackground>
  );
};

export default ShankozHero;
