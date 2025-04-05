import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
            tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
          </p>
        </div>
        
        <Link 
          href="/about" 
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}