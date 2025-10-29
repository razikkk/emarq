import React from 'react'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-5">
    <h1 className="text-4xl md:text-4xl font-extrabold text-red-500 mb-6 tracking-wide">
      We are Under Construction!!!
    </h1>
  
    <img
      src="uc1.jpg"
      alt="Under Construction"
      className="w-60 h-60 object-contain mb-6"
    />
  
    <div className="flex items-center space-x-2 text-gray-700">
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/emarq.ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
      >
        {/* Instagram Icon (Lucide or Heroicons SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
        </svg>
  
        <span className="font-medium text-lg">Have a look on our IG</span>
      </a>
    </div>
  </div>
  
  )
}

export default UnderConstruction