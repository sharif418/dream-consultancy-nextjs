"use client";

import { useState } from "react";
import { usePopup } from "@/components/PopupContext";
import { HiOutlineX } from "react-icons/hi";

export default function ContactPopup() {
  const { isOpen, closePopup } = usePopup();
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error('Failed to submit');
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closePopup();
        setFormData({ reason: "", name: "", company: "", email: "", phone: "", message: "" });
      }, 3000);
      
    } catch (err) {
      setError('An error occurred while submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      onClick={closePopup}
    >
      <div
        className="bg-white rounded-md shadow-xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm hover:bg-gray-800 z-10"
        >
          <HiOutlineX className="w-5 h-5" />
        </button>
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#00193a] mb-6">
            Contact Us
          </h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">&#10003;</div>
              <p className="text-lg font-semibold text-[#00193a]">
                Thank you for contacting us!
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Reason for Contacting Dream Consultancy *
                </label>
                <select
                  required
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none"
                >
                  <option value="">Select a reason</option>
                  <option value="general">General Business Query</option>
                  <option value="info">Information Request</option>
                  <option value="demo">Product Demo</option>
                  <option value="career">Career Information</option>
                  <option value="speaker">Speaker Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00193a] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="cta-button self-start mt-2 disabled:opacity-70"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
