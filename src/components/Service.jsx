const services = [
    {
        id: 1,
        title: "Back-end Engineering",
        description: "Architecting high-performance distributed systems using Spring Boot and gRPC. Focused on building scalable RESTful APIs, optimizing database schemas (PostgreSQL), and ensuring low-latency inter-service communication.",
    },
    {
        id: 2,
        title: "Devops Engineering",
        description: "Streamlining software delivery through automated CI/CD pipelines (GitHub Actions). Expert in containerization with Docker & Kubernetes to ensure consistent environment deployment and high availability.",
    },
    {
        id: 3,
        title: "FullStack Engineering",
        description: "Work on both front-end and back-end of applications or websites, handle all aspects of development, from web server and database management to application and user interface design.",
    },
    {
        id: 4,
        title: "Cyber Security Engineering",
        description: "Implementing robust security layers based on NIST/OWASP standards. Skilled in identity management (JWT/RBAC), Bcrypt hashing, and developing behavioral anomaly detection to mitigate common cyber-attacks.",
    },

]

const Service = () => {
  return (
    <div className="bg-black text-white py-10" id="services">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center py-10 mb:12">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div
                    key={service.id}
                    className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                    transition-transform duration-300 hover:scale-105">
                    <div className="text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-600 to-blue-400">
                        {service.id}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500">
                        {service.title}
                    </h3>
                    <p className="mt-2 text-gray-300">
                        {service.description}
                    </p>
                    <a href="https://github.com/heaven-vo" className=" mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service