import Link from "next/link";
import Image from "next/image";
import { faculty, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "About Us | Chithiram Art School by JP - Akkarai, ECR, Chennai",
  description:
    "Learn about Chithiram Art School in Akkarai, Chennai. Founded by JP - JayaPriya with 15+ years in art education. Serving Shollinganallur, ECR, Neelangarai, Pallavakkam & Uthandi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider !bg-secondary" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Discover the story, vision, and people behind {siteConfig.name}
          </p>
        </div>
      </section>

      {/* About the Academy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                About {siteConfig.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chithiram Art School by JP is an art school in Chennai dedicated
                to nurturing artistic talent across all ages. Founded with the
                belief that art can transcend human expression across, we strive
                to provide a supportive and inspiring environment where
                creativity flourishes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our carefully designed curriculum spans from foundational
                drawing and sketching to advanced and more. Whether you&apos;re
                a beginner discovering your creative side or an experienced
                artist looking to refine your skills, we have a program for you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We take pride in our small class sizes, personalized attention,
                and hands-on teaching approach that ensures every student
                receives the guidance they need to grow as an artist.
              </p>
            </div>
            <div className="relative">
              <PlaceholderImage text="Our Art Studio" className="shadow-xl rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/founder.jpeg"
                alt="JP - JayaPriya, Founder of Chithiram Art School"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto lg:mx-0 h-auto object-cover"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
            <div>
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                JP - JayaPriya
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With over 15 years of experience in arts and art education, JP
                founded Chithiram by JP to make quality art education accessible
                to all with the intent to pass on the knowledge she accumulated
                from various artists and gurus. An engineer by education, artist
                by choice and passion, having worked in art education with
                various partners and learning over a long span.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                JP&apos;s passion for teaching and commitment to making art
                education accessible drives every aspect of Chithiram Art School
                by JP.
              </p>
              <p className="text-gray-600 leading-relaxed">
                JP over the years has felt art as a therapy to overcome
                shortcomings. As a strong believer in alternative medicine and a
                practitioner, she strongly believes art can set minds free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                To be a leading art education institution that inspires
                creativity, preserves traditional art forms, and empowers
                individuals to express themselves through art. We envision a
                world where art is accessible to everyone and valued as an
                essential part of human development.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Mission
              </h2>
              <ul className="space-y-4 text-white/80 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-sm">&#10003;</span>
                  </span>
                  Provide world-class art education in a nurturing environment
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-sm">&#10003;</span>
                  </span>
                  Preserve and promote traditional Indian art forms
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-sm">&#10003;</span>
                  </span>
                  Foster creativity and self-expression in students of all ages
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-sm">&#10003;</span>
                  </span>
                  Build a vibrant community of artists and art enthusiasts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
              Our Faculty
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from experienced artists and educators who are passionate
              about sharing their knowledge
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            {faculty.map((member) => (
              <div
                key={member.id}
                className="bg-cream rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-dark">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-secondary font-medium mb-3">
                    {member.specialization}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us to learn about our courses and schedule a visit
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
