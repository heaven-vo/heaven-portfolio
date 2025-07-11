import Eco from '../assets/image1.png'
import botchat from '../assets/image2.png'
import cdcc from '../assets/image.png'
import Movie from '../assets/Movie.png'
import ALSViNa from '../assets/ALSVietNam.png'
import mesage from '../assets/mesage.png'
import athen_author from '../assets/authen_author.png'
import port from '../assets/port.png'

import Portfolio from '../assets/portfolio.png'

const projects = [
    {
        id: 1,
        name: "Authen-Author",
        technologiesFE: "Language: Python ",
        technologiesBE: "Library: bcrypt, getpass, json, datetime, socket, os, platform",
        image: athen_author,
        github:"https://github.com/heaven-vo/Authen-Author.git"
    },
    {
        id: 2,
        name: "Password Strength Checker",
        technologiesFE: "Language: Python",
        technologiesBE: "Library: re, getpass, math",
        image: mesage,
        github:"https://github.com/heaven-vo/Password-Strength-Checker.git"
    },

    {
        id: 3,
        name: "Simple Port Scanner",
        technologiesFE: "Language: Python",
        technologiesBE: "Libraries: socket, threading, argparse, datetime",
        image: port,
        github:"https://github.com/heaven-vo/Port-Scanner.git"
    },
    {
        id: 9,
        name: "E-commerce",
        technologiesFE: "Frontend: TypeScript, Tailwind CSS, Axios",
        technologiesBE: "Backend: Spring, Restful API, MySQL",
        image: Eco,
        github:"https://github.com/heaven-vo/ecommerce-backend-springboot"
        
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
        id: 6,
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
        technologiesBE: "Backend: Spring, RESTful APIs, Websocket",
        image: botchat,
        github:"git@github.com:heaven-vo/HeavenChatbot.git"
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