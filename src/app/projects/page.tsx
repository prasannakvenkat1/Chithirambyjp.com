import Link from "next/link";
import { projects, siteConfig } from "@/data/content";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Projects | Chithiram Art School by JP",
  description:
    "Explore our art projects including Tanjore paintings and custom commissions.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider !bg-secondary" />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Custom art projects and commissioned works by our artists
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image placeholder */}
              <div className="relative">
                <PlaceholderImage
                  text={project.title}
                  className="shadow-xl rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Note / highlight */}
                <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5 mb-8">
                  <p className="text-dark font-medium text-sm leading-relaxed">
                    {project.note}
                  </p>
                </div>

                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in a Tanjore art project / custom order.`)}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire About Projects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
