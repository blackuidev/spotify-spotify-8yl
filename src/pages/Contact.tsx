import React from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { cn } from '@/components/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Globe } from '@/components/ui/globe';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Placeholder for a Layout component. In a real application, this would be a shared layout wrapper.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
    {/* Background elements for glassmorphism effect */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto">
      {children}
    </div>
  </div>
);

// GlassContainer component (should ideally be moved to src/components/ui/glass-container.tsx)
const GlassContainer = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any } ) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative p-6 rounded-3xl backdrop-filter backdrop-blur-lg border border-opacity-20 shadow-lg",
        "bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-5", // Glassmorphism background
        "border-zinc-200/20 dark:border-zinc-800/20", // Border
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
    // Here you would typically send the form data to a backend service
    alert('Message sent successfully! (Check console for data)');
    form.reset();
  };

  return (
    <Layout>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-center mb-16 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Get in Touch
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Contact Information Section */}
        <div className="flex flex-col space-y-8">
          <GlassContainer className="h-full flex flex-col justify-center p-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
            >
              Contact Details
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg space-y-4"
            >
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>Address:</strong> 123 Glassy Lane, Crystal City, GC 98765</p>
              <p><strong>Business Hours:</strong> Mon-Fri, 9 AM - 5 PM (EST)</p>
            </motion.div>
          </GlassContainer>

          <GlassContainer className="relative overflow-hidden aspect-video w-full h-80 lg:h-auto flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-6 left-6 text-2xl font-semibold z-20 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500"
            >
              Our Global Presence
            </motion.h2>
            <Globe className="absolute inset-0 w-full h-full" />
          </GlassContainer>
        </div>

        {/* Contact Form Section */}
        <GlassContainer className="p-8">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400"
          >
            Send Us a Message
          </motion.h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} rows={5} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </Form>
        </GlassContainer>
      </div>
    </Layout>
  );
};

export default Contact;
