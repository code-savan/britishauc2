"use client"

import React, { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { eventList } from '@/constants';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';

export default function RegistrationForm({ params }) {
  const { eventId } = params;

  // Find the event with the matching ID
  const event = eventList.find((event) => event.id === eventId);

  // If event not found, return 404
  if (!event) {
    notFound();
  }

  const [formData, setFormData] = useState({
    fullName: '',
    institutionName: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    citiesInterested: [],
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData(prev => ({
        ...prev,
        citiesInterested: [...prev.citiesInterested, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        citiesInterested: prev.citiesInterested.filter(city => city !== value)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would normally send data to your backend
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

  // Extract cities from fees array
  const cities = event.fees?.map(fee => fee.city) || [];

  return (
    <div className="px-8 md:px-[160px] py-12 md:py-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">{event.title} Registration</h1>
        <p className="text-center text-gray-600 mb-6">Please fill out the form below to register for the study tour</p>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 md:p-10">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">Institution Name *</label>
                  <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Institution Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">Tour Information</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Which cities are you interested in? (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`city-${index}`}
                        name="citiesInterested"
                        value={city}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`city-${index}`} className="ml-2 text-sm text-gray-700">{city}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any specific requirements or questions?"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors"
              >
                Submit Registration
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-10 text-center">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering for the {event.title}. We have received your information and will contact you shortly with further details.
            </p>
            <div className="flex justify-center">
              <Link href={`/events/${event.id}`}>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                  Return to Event Page
                </button>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            For any inquiries, please contact:<br />
            <span className="font-semibold">{event.contactPerson}</span> at <a href={`mailto:${event.contactEmail}`} className="text-blue-600 hover:underline">{event.contactEmail}</a> or <a href={`tel:${event.contactPhone}`} className="text-blue-600 hover:underline">{event.contactPhone}</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
