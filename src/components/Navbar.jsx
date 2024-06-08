import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Anim from './Anim'

const Navbar = ({ scrollToSection, homeRef, projectsRef, aboutRef, contactRef }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [active, setActive] = React.useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScrollToSection = (ref, section) => {
        setActive(section);
        scrollToSection(ref);
    };

    return (
        <header className="bg-gray-800 text-white shadow-lg fixed w-full z-10">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <a href="/" className="flex items-center">
                    <Anim />
                </a>
                <nav className="hidden md:flex space-x-8 font-semibold text-lg">
                    <button
                        onClick={() => handleScrollToSection(homeRef, 'home')}
                        className="group relative"
                    >
                        Home
                        <div className={`bg-[#6E59A8] h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'home' ? 'w-full' : ''}`}></div>
                    </button>
                    <button
                        onClick={() => handleScrollToSection(projectsRef, 'projects')}
                        className="group relative"
                    >
                        Projects
                        <div className={`bg-[#2AB48C] h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'projects' ? 'w-full' : ''}`}></div>
                    </button>
                    <button
                        onClick={() => handleScrollToSection(aboutRef, 'about')}
                        className="group relative"
                    >
                        About
                        <div className={`bg-[#33AF8D] h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'about' ? 'w-full' : ''}`}></div>
                    </button>
                    <button
                        onClick={() => handleScrollToSection(contactRef, 'contact')}
                        className="group relative"
                    >
                        Contact
                        <div className={`bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'contact' ? 'w-full' : ''}`}></div>
                    </button>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-gray-800 text-white">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <button
                                onClick={() => handleScrollToSection(homeRef, 'home')}
                                className="group relative"
                            >
                                Home
                                <div className={`bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'home' ? 'w-full' : ''}`}></div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScrollToSection(projectsRef, 'projects')}
                                className="group relative"
                            >
                                Projects
                                <div className={`bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'projects' ? 'w-full' : ''}`}></div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScrollToSection(aboutRef, 'about')}
                                className="group relative"
                            >
                                About
                                <div className={`bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'about' ? 'w-full' : ''}`}></div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScrollToSection(contactRef, 'contact')}
                                className="group relative"
                            >
                                Contact
                                <div className={`bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${active === 'contact' ? 'w-full' : ''}`}></div>
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
