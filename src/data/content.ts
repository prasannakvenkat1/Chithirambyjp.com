export const siteConfig = {
  name: "Chithiram Art School by JP",
  tagline: "Where Art Comes Alive",
  description:
    "An art School aimed at offering courses in drawing, sketching, story telling, painting, and more. Nurturing creativity in students of all ages.",
  phone: "+91 75500 03723",
  email: "chithirambyjp@gmail.com",
  whatsapp: "917550003723",
  address: "Chennai, Tamil Nadu, India",
  socialLinks: {
    facebook: "https://facebook.com/chithirambyjp",
    instagram: "https://instagram.com/chithirambyjp",
    youtube: "https://youtube.com/@chithirambyjp",
    linkedin: "https://linkedin.com/company/chithirambyjp",
  },
};

export const heroBanners = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    title: "Discover Your Inner Artist",
    subtitle: "Professional art courses for all ages and skill levels",
    cta: { text: "Explore Courses", href: "/courses" },
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    title: "Learn from Master Artists",
    subtitle: "Expert faculty with decades of experience",
    cta: { text: "Meet Our Faculty", href: "/about#faculty" },
  },
  {
    id: 3,
    image: "/images/hero/hero-3.jpg",
    title: "Art That Inspires",
    subtitle: "Explore our gallery of stunning student and faculty works",
    cta: { text: "View Gallery", href: "/gallery" },
  },
];

export const courses = [
  {
    id: "art-trail",
    title: "Art Trail",
    shortDescription:
      "Fun and creative art programs designed specifically for children, fostering imagination and skill development.",
    description:
      "Art Trail is our specially designed children's art program that nurtures creativity, builds confidence, and develops fine motor skills through fun, age-appropriate art activities. Classes are grouped by age to ensure the best learning experience.",
    image: "/images/courses/art-trail.jpg",
    duration: "Ongoing (monthly enrollment)",
    levels: ["Ages 4-6", "Ages 7-9", "Ages 10-12"],
    ageGroup: "4-12",
    curriculum: [
      "Drawing & Coloring Fun",
      "Paper Crafts & Origami",
      "Clay Modeling for Kids",
      "Painting Adventures",
      "Mixed Media Projects",
      "Art History Stories",
      "Group Art Projects",
    ],
  },
  {
    id: "storytelling",
    title: "Storytelling",
    shortDescription:
      "Engaging storytelling workshops for kids and adults — learn the art of crafting and narrating compelling stories.",
    description:
      "Our Storytelling program brings the timeless art of narrative to life for both children and adults. Kids develop imagination, vocabulary, and confidence through interactive story sessions, while adults explore creative writing, public speaking, and the craft of compelling narratives. Whether for personal expression or professional growth, storytelling is a powerful skill for all ages.",
    image: "/images/courses/storytelling.jpg",
    duration: "1 - 3 months",
    levels: ["Kids (Ages 5-12)", "Teens & Adults"],
    ageGroup: "5+",
    curriculum: [
      "Elements of a Great Story",
      "Character Building & World Creation",
      "Voice Modulation & Expression",
      "Interactive & Improvisational Storytelling",
      "Visual Storytelling & Illustration",
      "Writing Your Own Stories",
      "Public Speaking & Stage Presence",
      "Storytelling for Everyday Life",
    ],
  },
  {
    id: "terracotta-jewelry",
    title: "Terracotta Jewelry",
    shortDescription:
      "Create beautiful handcrafted jewelry pieces using terracotta clay and traditional techniques.",
    description:
      "Learn the art of creating stunning terracotta jewelry — from earrings and necklaces to bangles and pendants. This course covers clay preparation, shaping, baking, painting, and finishing techniques to create wearable art.",
    image: "/images/courses/terracotta-jewelry.jpg",
    duration: "1 - 3 months",
    levels: ["Beginner", "Intermediate"],
    ageGroup: "14+",
    curriculum: [
      "Clay Preparation & Conditioning",
      "Basic Shapes & Forms",
      "Earring & Pendant Design",
      "Necklace & Bangle Making",
      "Baking & Curing Techniques",
      "Painting & Decorating",
      "Sealing & Finishing",
    ],
  },
];

export const galleryItems = [
  // Faculty Works
  { id: 1, image: "/images/gallery/pencil-drawing.jpg", title: "Pencil Drawing", category: "faculty" },
  { id: 2, image: "/images/gallery/pencil-sketching.jpg", title: "Pencil Sketching", category: "faculty" },
  { id: 3, image: "/images/gallery/pencil-shading.jpg", title: "Pencil Shading", category: "faculty" },
  { id: 4, image: "/images/gallery/colour-pencils.jpg", title: "Colour Pencils", category: "faculty" },
  { id: 5, image: "/images/gallery/crayons.jpg", title: "Crayons", category: "faculty" },
  { id: 6, image: "/images/gallery/oil-pastels.jpg", title: "Oil Pastels", category: "faculty" },
  { id: 7, image: "/images/gallery/poster-colours.jpg", title: "Poster Colours", category: "faculty" },
  { id: 8, image: "/images/gallery/water-colours.jpg", title: "Water Colours", category: "faculty" },
  { id: 9, image: "/images/gallery/acrylic-colours.jpg", title: "Acrylic Colours", category: "faculty" },
  { id: 10, image: "/images/gallery/oil-painting.jpg", title: "Oil Painting", category: "faculty" },
  // Student Works
  { id: 11, image: "/images/gallery/student-watercolor.jpg", title: "Student Watercolor Work", category: "student" },
  { id: 12, image: "/images/gallery/terracotta-jewelry.jpg", title: "Terracotta Jewelry Collection", category: "student" },
  { id: 13, image: "/images/gallery/student-sketching.jpg", title: "Student Pencil Sketch", category: "student" },
  { id: 14, image: "/images/gallery/student-acrylic.jpg", title: "Student Acrylic Painting", category: "student" },
  // Events
  { id: 15, image: "/images/gallery/art-exhibition.jpg", title: "Art Exhibition 2024", category: "event" },
  { id: 16, image: "/images/gallery/annual-day.jpg", title: "Annual Day Celebration", category: "event" },
  { id: 17, image: "/images/gallery/art-camp.jpg", title: "Children's Art Camp", category: "event" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Fine Arts - Professional",
    quote:
      "Chithiram transformed my passion for art into a professional skill. The faculty's guidance helped me develop my own unique style.",
    image: "/images/testimonials/student-1.jpg",
  },
 
];

export const faculty = [
  {
    id: 1,
    name: "JP",
    role: "Founder & Lead Artist",
    specialization: "Fine Arts, Oil Painting",
    bio: "With over 20 years of experience in fine arts and art education, JP founded Chithiram to make quality art education accessible to all. A graduate of the Government College of Fine Arts, JP has exhibited works across India and internationally.",
    image: "/images/faculty/faculty-1.jpg",
  },
  
];

export const faqs = [
  {
    question: "What age groups do you cater to?",
    answer:
      "We offer programs for children as young as 4 (Art Cubs) through adult learners. Our courses are designed with age-appropriate content and teaching methods.",
  },
  {
    question: "Do I need prior art experience to enroll?",
    answer:
      "Not at all! We welcome complete beginners. Our courses start from the fundamentals and gradually progress to advanced techniques.",
  },
  {
    question: "What materials do I need to bring?",
    answer:
      "Basic art materials are provided for the first few sessions. We'll guide you on what to purchase as you progress. Materials can also be purchased through our shop.",
  },
  {
    question: "Are there flexible class timings?",
    answer:
      "Yes, we offer weekday and weekend batches to accommodate working professionals and students. Contact us for the current schedule.",
  },
  {
    question: "Do you offer certificates?",
    answer:
      "Yes, we offer certificate programs in Fine Arts and other disciplines. Certificates are awarded upon successful completion of the program.",
  },
  {
    question: "Can I attend a trial class?",
    answer:
      "Absolutely! We offer a free trial class for new students. Contact us via WhatsApp or the contact form to book your trial session.",
  },
];
