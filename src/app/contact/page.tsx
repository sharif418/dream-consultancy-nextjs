"use client";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useState } from "react";
import { siteConfig } from "@/data/siteData";

export default function ContactPage() {
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
      setFormData({ reason: "", name: "", company: "", email: "", phone: "", message: "" });
      
    } catch (err) {
      setError('An error occurred while submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero title="Contact" />
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Get in Touch
              </h2>
              {submitted ? (
                <div className="bg-[#f0f0f8] rounded-[5px] p-8 text-center">
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
                      Reason for Contacting *
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
                      rows={5}
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
            <div>
              <h2 className="text-2xl font-bold text-[#00193a] mb-6">
                Contact Information
              </h2>
              <div className="bg-[#f0f0f8] rounded-[5px] p-6 mb-6">
                <h3 className="font-semibold text-[#00193a] mb-3">Address</h3>
                <p className="text-[#404040] text-sm">{siteConfig.address}</p>
              </div>
              <div className="bg-[#f0f0f8] rounded-[5px] p-6 mb-6">
                <h3 className="font-semibold text-[#00193a] mb-3">Phone</h3>
                <p className="text-[#404040] text-sm">{siteConfig.phone1}</p>
                <p className="text-[#404040] text-sm">{siteConfig.phone2}</p>
              </div>
              <div className="bg-[#f0f0f8] rounded-[5px] p-6">
                <h3 className="font-semibold text-[#00193a] mb-3">Email</h3>
                <p className="text-[#404040] text-sm">{siteConfig.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
