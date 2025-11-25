import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming this exists

// Helper for section animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.05 } }, // Faster stagger for title
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ShankozLandingPage = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm p-4 shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="#hero"
            className="text-2xl font-bold text-yellow-400 hover:text-red-500 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Shankoz
          </motion.a>
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 + index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/shankoz-hero-bg.jpg')", backgroundAttachment: 'fixed' }} // Placeholder background image in public folder
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="z-10 p-4 max-w-4xl pt-20"> {/* Add padding top for fixed nav */}
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg"
            variants={textVariants}
          >
            {"Shankoz Burgers".split("").map((char, index) => (
              <motion.span key={index} variants={charVariants}>
                {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Taste the extraordinary. Crafted with passion, served with a smile.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <Button
              className="px-8 py-4 text-lg md:text-xl rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Menu
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-20 px-4 text-center bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-bold mb-12 text-yellow-400">Our Delicious Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Placeholder Menu Item 1 */}
          <motion.div
            className="group bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img src="/shankoz-classic-burger.jpg" alt="Classic Burger" className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-semibold text-red-500 mb-2">Classic Shankoz</h3>
            <p className="text-gray-300 mb-4">A timeless favorite with our signature patty, fresh veggies, and secret sauce.</p>
            <span className="text-2xl font-bold text-yellow-400">$12.99</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-white font-bold text-lg">
              View Details
            </div>
          </motion.div>
          {/* Placeholder Menu Item 2 */}
          <motion.div
            className="group bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <img src="/shankoz-spicy-burger.jpg" alt="Spicy Burger" className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-semibold text-red-500 mb-2">Spicy Inferno</h3>
            <p className="text-gray-300 mb-4">For the brave hearts! Jalapeños, ghost pepper sauce, and fiery zest.</p>
            <span className="text-2xl font-bold text-yellow-400">$14.50</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-white font-bold text-lg">
              View Details
            </div>
          </motion.div>
          {/* Placeholder Menu Item 3 */}
          <motion.div
            className="group bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <img src="/shankoz-loaded-fries.jpg" alt="Loaded Fries" className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-semibold text-red-500 mb-2">Loaded Fries</h3>
            <p className="text-gray-300 mb-4">Crispy fries topped with melted cheese, bacon, and our special sauce.</p>
            <span className="text-2xl font-bold text-yellow-400">$7.00</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-white font-bold text-lg">
              View Details
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 bg-black text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-bold mb-12 text-red-600">About Shankoz</h2>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/shankoz-kitchen.jpg" alt="Shankoz Kitchen" className="rounded-lg shadow-2xl w-full" />
          </motion.div>
          <motion.div
            className="lg:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 mb-4">
              At Shankoz, we believe in crafting more than just burgers; we create experiences. Established in 2023, our journey began with a simple goal: to serve the most delicious, high-quality burgers in town.
            </p>
            <p className="text-lg text-gray-300">
              We source only the freshest ingredients, from prime cuts of meat to garden-fresh vegetables and artisanal buns. Every burger is a masterpiece, grilled to perfection and bursting with flavor. Come and taste the Shankoz difference!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 text-center bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-bold mb-12 text-yellow-400">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-gray-300">
          <motion.p
            className="text-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Visit us or order online! We're always happy to serve you the best burgers in town.
          </motion.p>
          <motion.div
            className="space-y-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p><strong>Address:</strong> 123 Burger Lane, Flavor Town, FL 12345</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@shankoz.com</p>
            <p><strong>Hours:</strong> Mon-Sat: 11 AM - 10 PM | Sunday: 12 PM - 9 PM</p>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              className="px-8 py-4 text-lg md:text-xl rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Order Online Now!
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Shankoz Burgers. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default ShankozLandingPage;