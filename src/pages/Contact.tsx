import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, CheckCircleIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobInterest: '',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.jobInterest || !formData.message) {
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'c79c5881-b05a-4b57-b738-6584747aa96a');
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('jobInterest', formData.jobInterest);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('reply_to', formData.email);
      formDataToSend.append('from_name', 'Gilbertin Contact Form');
      formDataToSend.append('redirect', 'false');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Header />
      <section className="relative py-28 bg-center bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Connect With Our <span className="text-blue-400">European Career</span> Experts
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Whether you're seeking employment opportunities or need guidance on European work visas, our team is ready to assist you.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below or use our direct contact information to get in touch with our specialists.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="c79c5881-b05a-4b57-b738-6584747aa96a" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="hidden" name="redirect" value="false" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="jobInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="jobInterest"
                    name="jobInterest"
                    value={formData.jobInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select your job interest</option>
                    <option value="Factory Work">Factory Work</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Construction">Construction</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="General Labor">General Labor</option>
                    <option value="Other">Other (specify in message)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your experience, qualifications, and career goals..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-medium transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Finland Office</h3>
                </div>
                <div className="space-y-4 text-gray-700 pl-14">
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>Helsinki Business District,<br/>00100 Helsinki, Finland</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <a href="tel:+35898765432" className="hover:text-blue-600 transition-colors">+358 9 876 5432</a>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <a href="mailto:finland@gilbertin.com" className="hover:text-blue-600 transition-colors">info@kansainvalinentyo.com</a>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <p>Mon-Fri 9:00-17:00 (EET)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <MapPinIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Hungary Office</h3>
                </div>
                <div className="space-y-4 text-gray-700 pl-14">
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>Budapest Business Center,<br/>1051 Budapest, Hungary</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <a href="tel:+3612345678" className="hover:text-green-600 transition-colors">+36 1 234 5678</a>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <a href="mailto:hungary@gilbertin.com" className="hover:text-green-600 transition-colors">info@kansainvalinentyo.com</a>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <p>Mon-Fri 9:00-17:00 (CET)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-0.5">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Fast Response</h4>
                      <p className="text-gray-600 text-sm">Guaranteed response within 24 hours during business days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-0.5">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Expert Guidance</h4>
                      <p className="text-gray-600 text-sm">Professional advice on visas, work permits, and job matching</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-0.5">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Multilingual Support</h4>
                      <p className="text-gray-600 text-sm">Assistance available in English, Finnish, Hungarian, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-0.5">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Confidential Service</h4>
                      <p className="text-gray-600 text-sm">Your information is always kept secure and private</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;