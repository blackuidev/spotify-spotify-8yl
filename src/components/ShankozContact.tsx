import React from 'react';
import { cn } from '@/components/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ShankozContactProps extends React.HTMLAttributes<HTMLElement> {}

const ShankozContact: React.FC<ShankozContactProps> = ({ className, ...props }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., send data to an API or display a success message.
    console.log('Form submitted!');
    alert('Thank you for your message! We will get back to you shortly.');
    // Optionally, clear the form fields
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className={cn("w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch with Shankoz</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We'd love to hear from you! Whether you have a question about our menu, catering, or anything else, our team is ready to help.
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Location & Hours */}
          <Card className="bg-gray-900 border-gray-800 text-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-400">Find Us & Our Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-300">
                  123 Burger Lane, <br />
                  Flavorville, FV 90210 <br />
                  United States
                </p>
                <div className="mt-4">
                  {/* Placeholder for a map or link */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Burger+Lane,+Flavorville,+FV+90210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:underline transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>Monday - Friday: <span className="font-medium text-white">11:00 AM - 10:00 PM</span></li>
                  <li>Saturday: <span className="font-medium text-white">12:00 PM - 11:00 PM</span></li>
                  <li>Sunday: <span className="font-medium text-white">12:00 PM - 09:00 PM</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800 text-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-400">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" placeholder="Your Name" required className="bg-gray-800 border-gray-700 text-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="bg-gray-800 border-gray-700 text-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required className="bg-gray-800 border-gray-700 text-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShankozContact;
