import Link from "next/link";
import { courses, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Courses | Chithiram Art School by JP",
  description:
    "Explore our range of art courses — Fine Arts, Sculpting, Tanjore Painting, Terracotta Jewelry, and Art Cubs for kids.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the perfect art course for your creative journey
          </p>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <PlaceholderImage
                    text={course.title}
                    className="shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      Ages: {course.ageGroup}
                    </span>
                    <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Duration: {course.duration}
                    </span>
                    {course.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/courses/${course.id}`}
                      className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${course.title} course.`)}`}
                      target="_blank"
                      className="px-6 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-white transition-colors"
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
