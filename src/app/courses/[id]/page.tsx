import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return {
    title: `Courses | Chithiram Art School by JP`,
    description: `Explore our art courses at Chithiram Art School.`,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden py-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>
          <div className="w-12 h-1 bg-secondary mb-4 rounded-full" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white">
            {course.title}
          </h1>
        </div>
      </section>

      {/* Course Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PlaceholderImage text={course.title} className="shadow-xl rounded-2xl mb-10" />
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                About This Course
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                {course.description}
              </p>

              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Curriculum
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.curriculum.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-cream rounded-2xl p-7 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-primary mb-5">
                  Course Details
                </h3>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Duration</dt>
                    <dd className="text-dark font-semibold mt-1">
                      {course.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Age Group</dt>
                    <dd className="text-dark font-semibold mt-1">
                      {course.ageGroup} years
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Levels</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {course.levels.map((level) => (
                        <span
                          key={level}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {level}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 space-y-3">
                  <Link
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to enroll in the ${course.title} course.`)}`}
                    target="_blank"
                    className="block w-full px-6 py-3.5 bg-primary text-white text-center font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to book a free trial for ${course.title}.`)}`}
                    target="_blank"
                    className="block w-full px-6 py-3.5 border-2 border-primary text-primary text-center font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                  >
                    Book Free Trial
                  </Link>
                </div>

                <p className="text-xs text-gray-500 mt-5 text-center">
                  Contact us for fee details and batch timings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
