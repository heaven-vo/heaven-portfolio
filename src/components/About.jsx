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
                        I am a passionate Backend & DevOps Engineer with a strong foundation in Java ecosystem 
                        and modern infrastructure. My expertise lies in designing scalable web architectures, 
                        ensuring seamless data flow from database to server while maintaining optimal security 
                        and performance. I thrive on solving complex architectural challenges and continuously 
                        automating workflows to bridge the gap between development and operations.
                    </p>
                    <p className="text-lg mb-3">
                    •	Scripting & Programming: Java (Spring Boot), JavaScript (Node.js), Bash Scripting
                    </p>
                    <p className="text-lg mb-3">
                    •	Frameworks/ Library: Spring MVC/Boot, ReactJS, Tailwind CSS
                    </p>
                    <p className="text-lg mb-3">
                    •	Database Management Systems: PostgreSQL, MS SQL Server
                    </p>
                    <p className="text-lg mb-3">
                    •	Version Control: Git, Jira
                    </p>
                    <p className="text-lg mb-3">
                    •	Devops: Docker, Kubernetes, CI/CD, AWS (EC2, S3)
                    </p>
                    <p className="text-lg mb-3">
                    •	Operating Systems: Linux (Ubuntu)
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