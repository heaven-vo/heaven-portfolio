import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
                <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Heaven</h3>
                    <p className="text-gray-400">
                        Talent Developer based in the VN, 
                        specializing in web and software development.</p>
                </div>
            </div>
            <div className="container mx-auto border-t border-gray-600 pt-2 flex flex-col md:flex-row
                justify-between items-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Heaven. All rights reserved.
                </p>
            <div className="flex space-x-4 my-4 md:my-0">
                <a href="" className="text-gray-400 hover:text-white">
                    <FaFacebook/>
                </a>
                <a href="" className="text-gray-400 hover:text-white">
                    <FaLinkedin/>
                </a>
                <a href="" className="text-gray-400 hover:text-white">
                    <FaGithub/>
                </a>
            </div>
            <div className="flex space-x-4">
                <a href="" className="text-gray-400 hover:text-white">
                    Privacy
                </a>
                <a href="" className="text-gray-400 hover:text-white">
                    Terms of Service
                </a>
            </div>
        </div>
        </div>
        
    </footer>
  )
}
