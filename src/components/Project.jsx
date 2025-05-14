import Eco from '../assets/image1.png'
import botchat from '../assets/image2.png'
import cdcc from '../assets/image.png'
import Movie from '../assets/Movie.png'
import ALSViNa from '../assets/ALSVietNam.png'
import Admin from '../assets/admin.png'
import devop from '../assets/devop.png'
import mesage from '../assets/mesage.png'


import Portfolio from '../assets/portfolio.png'

const projects = [
    {
        id: 1,
        name: "E-commerce",
        technologiesFE: "Frontend: React, TypeScript, Tailwind CSS, Axios",
        technologiesBE: "Backend: Spring Boot, MySQL, Spring Security, Restful API",
        image: Eco,
        github:"https://github.com/heaven-vo/ecommerce-backend-springboot"
        
    },
    {
        id: 6,
        name: "Devops Project",
        technologiesFE: "Frontend: React",
        technologiesBE: "Backend: Spring",
        image: devop,
        github:""
    },
     {
        id: 4,
        name: "CongDongChungCu",
        technologiesFE: "Frontend: ReactJS, Flutter, Firebase",
        technologiesBE: "Backend: ASP.net, MS SQL Server",
        image: cdcc,
        github:"https://github.com/heaven-vo/DeliveryVinhome/tree/master/src"
    },
    {
        id: 2,
        name: "Heaven Portfolio",
        technologiesFE: "Frontend: ReactJS, Tailwind CSS",
        technologiesBE: "Backend: ",
        image: Portfolio,
        github:"https://github.com/heaven-vo/heaven-portfolio"
    },
    {
        id: 3,
        name: "My Movie",
        technologiesFE: "Frontend: ReactJS, Tailwind CSS",
        technologiesBE: "Backend: Nodejs",
        image: Movie,
        github:"https://github.com/heaven-vo/my-movie"
    },
   
    {
        id: 5,
        name: "ALS VietNam",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS, Firebase",
        technologiesBE: "Backend: Spring, RESTful APIs, MS Server",
        image: ALSViNa,
        github:"https://alsvietnam.org/"
    },
    
    {
        id: 7,
        name: "HeavenChat",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS",
        technologiesBE: "Backend: Spring, RESTful APIs, Java Websocket",
        image: botchat,
        github:"git@github.com:heaven-vo/HeavenChatbot.git"
    },
    {
        id: 8,
        name: "AdminPage",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS",
        technologiesBE: "Backend:",
        image: Admin,
        github:"https://github.com/heaven-vo/Admin-Page"
    },
    {
        id: 9,
        name: "MessageQueue",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS",
        technologiesBE: "Backend: Spring, RESTful APIs",
        image: mesage,
        github:"#"
    },
    
]

const Project = () => {
  return (
    <div className="bg-black text-white py-10" id="projects">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center py-10 mb:12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4
                        w-full h-48 object-cover' />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 font-bold mb-4'>Technologies used:</p>
                        <p className='text-gray-400 mb-4'>{project.technologiesFE}</p>
                        <p className='text-gray-400 mb-4'>{project.technologiesBE}</p>
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