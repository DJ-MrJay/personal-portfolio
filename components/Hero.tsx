import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center items-center md:items-end p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
          Your profession or tagline
        </p>
      </div>
      
      <div className="hidden md:flex justify-center items-center p-8">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
          {/* Replace with your profile image */}
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link 
          href="#about" 
          className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          scroll={false}
        >
          <span className="mb-2">Welcome</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}