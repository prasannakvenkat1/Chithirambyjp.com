"use client";

import { useState } from "react";
import { siteConfig, faqs } from "@/data/content";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for inquiries, enrollment, or
            just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  }
                  icon2={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  }
                  label="Address"
                  value={siteConfig.address}
                />
                <ContactInfoItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  }
                  label="Phone"
                  value={siteConfig.phone}
                  href={`tel:${siteConfig.phone}`}
                />
                <ContactInfoItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  }
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {Object.entries(siteConfig.socialLinks).map(
                    ([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label={name}
                      >
                        <span className="text-xs font-bold capitalize">
                          {name.slice(0, 2)}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-[#25D366]/10 rounded-xl border border-[#25D366]/20">
                <h3 className="text-lg font-heading font-semibold text-dark mb-2">
                  Quick Chat on WhatsApp
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant responses to your queries
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I have a question about Chithiram Art School.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#1DA851] transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Find Us Here
          </h2>
          <div className="bg-gray-300 rounded-xl h-[400px] flex items-center justify-center">
            <p className="text-gray-600 text-center">
              <span className="block text-lg font-heading font-semibold mb-2">
                Google Map Embed
              </span>
              <span className="text-sm">
                Replace this with an embedded Google Map iframe once the exact
                address is finalized
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoItem({
  icon,
  icon2,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  icon2?: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="hover:text-primary transition-colors">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
          {icon2}
        </svg>
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-dark font-medium">{content}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Formspree / Web3Forms / backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-heading font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-cream rounded-xl p-8">
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark mb-1.5"
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-dark mb-1.5"
            >
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark mb-1.5"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-dark mb-1.5"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
          >
            <option value="">Select a subject</option>
            <option value="course-inquiry">Course Inquiry</option>
            <option value="free-trial">Book a Free Trial</option>
            <option value="workshop">Workshop Inquiry</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-dark mb-1.5"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white resize-none"
            placeholder="Tell us what you're looking for..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-warm-gray transition-colors"
      >
        <span className="font-medium text-dark pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-primary shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
