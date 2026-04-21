import cap from '../assets/image.png'
import ALSViNa from '../assets/ALSVietNam.png'
import athen_author from '../assets/authen_author.png'
import patient from './assets/patient.png'

const projects = [
    {
        id: 1,
        Name: "Patient Management System",
        Tagline: "Advanced Identity & Access Management",
        Technologies: "Java, Spring Boot 3, gRPC, PostgreSQL, Docker",
        Description: "Designed a high-performance Microservices architecture to manage clinical records and billing. Optimized inter-service communication using gRPC and Protocol Buffers, significantly reducing network latency compared to REST.",
        Image: patient,
        github:"https://github.com/heaven-vo/patient-management-system"
    },
    {
        id: 2,
        Name: "DeliveryVinhome (Capstone Project)",
        Tagline: "Advanced Identity & Access Management",
        Technologies: "Node.js, Entity Framework, React, Flutter, Firebase",
        Description: "An end-to-end delivery ecosystem for high-rise buildings. Developed a specialized Route Optimization Algorithm to improve delivery efficiency. Integrated Firebase Cloud Messaging for real-time order tracking across 4 platforms.",
        Image: cap,
        github:"https://github.com/heaven-vo/DeliveryVinhome"
    },  
    {
        id: 3,
        Name: "System Migration & Web Optimization",
        Tagline: "Advanced Identity & Access Management",
        Technologies: "Java, .NET Framework, SQL Server, Web API.",
        Description: "Collaborated with ALS Vietnam on a critical system migration project. I was responsible for porting complex legacy Java business logic to the .NET framework while ensuring zero data loss and feature parity.",
        Image: ALSViNa,
        github:"https://alsvietnam.org/"
    },
    {
        id: 2,
        Name: "Authen-Author (Security focused)",
        Tagline: "Advanced Identity & Access Management",
        Technologies: "Python, Bcrypt, NIST/OWASP Standards.",
        Description: "A secure authentication system focused on mitigating cyber-attacks. Implemented brute-force protection, anomaly detection, and secure session monitoring based on industry-standard security practices.",
        Image: athen_author,
        github:"https://github.com/heaven-vo/Authen-Author"
    },

]

const Project = () => {
  return (
    <div className="bg-black text-white py-10" id="projects">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center py-10 mb:12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.Image} alt={project.Name} className='rounded-lg mb-4
                        w-full h-48 object-cover' /> 
                        <h3 className='text-2xl font-bold mb-2'>{project.Name}</h3>
                        <p className='text-gray-400 mb-4'>{project.Tagline}</p>
                        <p className='text-gray-400 mb-4'>{project.Technologies}</p>
                        <p className='text-gray-400 mb-4'>{project.Description}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project