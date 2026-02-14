import Link from "next/link";
import { courses, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Art Courses in Akkarai, ECR Chennai | Chithiram Art School by JP",
  description:
    "Art Trail for kids (ages 4-12) and Storytelling classes near Shollinganallur, ECR, Neelangarai, Pallavakkam & Uthandi. Drawing, painting & more. Free trial class!",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider !bg-secondary" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Discover the perfect art course for your creative journey
          </p>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <PlaceholderImage
                    text={course.title}
                    className="shadow-xl rounded-2xl"
                  />
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-24 h-24 bg-secondary/10 rounded-2xl -z-10`} />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Ages: {course.ageGroup}
                    </span>
                    <span className="px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      {course.duration}
                    </span>
                    {course.levels.map((level) => (
                      <span
                        key={level}
                        className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/courses/${course.id}`}
                      className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${course.title} course.`)}`}
                      target="_blank"
                      className="px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
