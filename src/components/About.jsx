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
                        I am a passionate Software Engineer Fresher with a strong foundation in backend technologies and devops technologies. 
                        A Versatile Developer a Passion for Continuous Learning. My expertise lies in Independently design and build web infrastructure, 
                        ensuring that web applications run smoothly and efficiently from database to server, operating optimally and securely. 
                        I thrive on solving challenging problems and creating innovative solutions.
                    </p>
                    <p className="text-lg mb-3">
                    •	Scripting & Programming: Java, JavaScript, Bash
                    </p>
                    <p className="text-lg mb-3">
                    •	Frameworks/ Library: Spring, ReactJS, Tailwind CSS 
                    </p>
                    <p className="text-lg mb-3">
                    •	Database Management Systems: MS SQL Server, PostgreSQL
                    </p>
                    <p className="text-lg mb-3">
                    •	Version Control: Git, Jira 
                    </p>
                    <p className="text-lg mb-3">
                    •	Devops: Docker, Kubernetes  
                    </p>
                    <p className="text-lg mb-3">
                    •	Operating Systems: Linux, Window Server
                    </p>
                    <p className="text-lg mb-3">
                    •	Core Concepts: Authentication & Authorization, Encryption & Hashing 
                    </p>
                    <p className="text-lg mb-3">
                    •	Cloud & SIEM: AWS 
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About