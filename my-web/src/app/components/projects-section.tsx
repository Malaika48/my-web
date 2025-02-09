import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title:"Next.js",
    description: "Next.js is a popular React-based framework for building server-rendered, statically generated, and performance-optimized web applications..",
    link: "https://github.com/yourusername/ai-image-recognition",
    image:"/n.jpeg",
  },
  {
    title: "custom GPt",
    description: "A generator in AI is a deep learning model that generates new, synthetic data or content, such as images, text, or music.",
    link: "https://github.com/yourusername/nlp-chatbot",
    image: "/g.jpeg",
  },
  {
    title: "web develpment",
    description: "Web development: Building and maintaining websites and web applications using programming languages, frameworks, and databases to create interactive and dynamic online experiences..",
    link: "https://github.com/yourusername/predictive-analytics-dashboard",
    image: "/w.jpeg",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

