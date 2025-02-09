import Link from "next/link"

export default function HomeSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Malaika Laal</h1>
      <p className="text-xl text-gray-600 mb-8">AI Enthusiast and Developer</p>
      <p className="text-lg text-gray-700 mb-8">Transforming ideas into intelligent solutions</p>
      <Link
        href="/#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        View My Projects
      </Link>
    </section>
  )
}

