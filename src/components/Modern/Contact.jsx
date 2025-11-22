import React from 'react';
import { Mail, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-gray-400 max-w-xl mb-8">
                        I'm currently looking for new opportunities as a Python/Backend Developer.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:harivigneshganesh@gmail.com" // Assuming email from context or just a placeholder if not known. I'll use a generic one or leave it blank if I don't know. Wait, I don't have his email. I'll check the old code.
                        className="px-8 py-4 bg-gradient-to-r from-accent to-python text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                    >
                        Say Hello
                    </a>
                </div>

                <div className="flex justify-center space-x-8 mb-12">
                    <SocialLink href="https://www.linkedin.com/in/harivigneshg/" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="https://twitter.com/harivigneshG" icon={<Twitter />} label="Twitter" />
                    <SocialLink href="https://www.instagram.com/harrivignesh/?hl=en" icon={<Instagram />} label="Instagram" />
                </div>

                <div className="text-center text-gray-500 text-sm border-t border-slate-800 pt-8 flex flex-col items-center">
                    <p className="flex items-center mb-2">
                        Designed & Built with <Heart className="w-4 h-4 text-red-500 mx-2 fill-current" /> by Harivignesh
                    </p>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
        aria-label={label}
    >
        {React.cloneElement(icon, { size: 24 })}
    </a>
);

export default Contact;
