const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 w-full fixed z-40">
        <div className="container py-2 flex justify-center md:justify-between items-center">
            <div className="text-2xl font-bold hidden md:inline">Heaven</div>
            <div className="space-x-6">
                <a href="#home" onClick={handleScrollToTop} className="hover:text-gray-400">Home</a>
                <a href="#" onClick={() => scrollToElement("about")} className="hover:text-gray-400">About</a>
                <a href="#" onClick={() => scrollToElement("services")} className="hover:text-gray-400">Services</a>
                <a href="#" onClick={() => scrollToElement("projects")} className="hover:text-gray-400">Projects</a>
                <a href="#" onClick={() => scrollToElement("contact")} className="hover:text-gray-400">Contact</a>
            </div>
            <a href="https://www.linkedin.com/in/congdev/"target="_blank">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect</button>
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar