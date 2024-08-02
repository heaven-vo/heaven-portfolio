import Hero from '../assets/Hero.png'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
                <img src={Hero} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0"/> 
                <div className="flex-1">
                    <p className="text-lg mb-8">
                        I am a passionate Fresher Fullstack Developer with a strong foundation in backend technologies. 
                        A Versatile Developer a Passion for Continuous Learning. My expertise lies in Independently design and build web infrastructure, 
                        ensuring that web applications run smoothly and efficiently from database to server, operating optimally and securely. 
                        I thrive on solving challenging problems and creating innovative solutions.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About