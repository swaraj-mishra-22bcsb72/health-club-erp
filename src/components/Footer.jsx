import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          Designed and Developed by <span className="font-bold">CodeWithZeeshu</span>
        </p>
        <p className="text-xs mt-2 opacity-75">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
