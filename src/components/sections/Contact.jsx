import React from 'react';
import { Mail, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-8 text-lg">
                        I'm currently open to new opportunities and collaborations.
                        Feel free to reach out if you'd like to discuss a project or just say hello.
                    </p>

                    <a
                        href="mailto:harivigneshganesh@gmail.com"
                        className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                    >
                        Say Hello
                    </a>
                </div>

                <div className="flex justify-center space-x-8 mb-16">
                    <SocialLink href="https://www.linkedin.com/in/harivigneshg/" Icon={Linkedin} label="LinkedIn" />
                    <SocialLink href="https://twitter.com/harivigneshG" Icon={Twitter} label="Twitter" />
                    <SocialLink href="https://www.instagram.com/harrivignesh/?hl=en" Icon={Instagram} label="Instagram" />
                </div>

                <div className="text-center text-slate-500 dark:text-slate-500 text-sm pt-8 border-t border-slate-100 dark:border-slate-800">
                    <p>© {new Date().getFullYear()} Harivignesh Ganesan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110"
        aria-label={label}
    >
        <Icon size={24} />
    </a>
);

export default Contact;
