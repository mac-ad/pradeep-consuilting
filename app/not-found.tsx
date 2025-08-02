'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'
import "./globals.css"

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = countdown > 0 && 
      setInterval(() => setCountdown(countdown - 1), 1000);
    
    if (countdown === 0) {
      window.location.href = '/';
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <div className="h-2 w-24 bg-indigo-600 mx-auto my-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="mb-8 text-gray-500">
            <p>Redirecting to homepage in {countdown} seconds</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-linear" 
                style={{ width: `${(countdown / 10) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back to Homepage
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}