import Hero from '../assets/Hero.png'
import Movie from '../assets/Movie.png'
import ALSViNa from '../assets/ALSVietNam.png'
import Portfolio from '../assets/portfolio.png'

const projects = [
    {
        id: 1,
        name: "Heaven Portfolio",
        technologiesFE: "FE: ReactJS, Tailwind",
        technologiesBE: "BE:",
        image: Portfolio,
        github:"#"
    },
    {
        id: 2,
        name: "Movie",
        technologiesFE: "FE: ReactJS, Tailwind",
        technologiesBE: "BE: Nodejs",
        image: Movie,
        github:"#"
    },
    {
        id: 3,
        name: "",
        technologiesFE: "Spring, ReactJS, Firebase, MS SQL Server",
        technologiesBE: "Spring, ReactJS, Firebase, MS SQL Server",
        image: Hero,
        github:"#"
    },
    {
        id: 4,
        name: "CongDongChungCu",
        technologiesFE: "FE: ReactJS, Flutter, Firebase",
        technologiesBE: "BE: ASP.net, MS Server, Entity Framework",
        image: Hero,
        github:"#"
    },
    {
        id: 5,
        name: "ALS VietNam",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS, Firebase",
        technologiesBE: "Backend: Spring, RESTful APIs, MS Server",
        image: ALSViNa,
        github:"#"
    },
    {
        id: 6,
        name: "Internship",
        technologiesFE: "Frontend: HTML5, CSS3, ReactJS, Firebase",
        technologiesBE: "Backend: Spring, RESTful APIs, MS Server",
        image: Hero,
        github:"#"
    },
]

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center py-10 mb:12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4
                        w-full h-48 object-cover' />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
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