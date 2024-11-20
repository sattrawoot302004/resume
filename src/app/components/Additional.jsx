import React from 'react'

function Additional() {
  return (
    <>
  
  <div className="container mx-auto px-4 py-8 bg-[#F3F4F6]">
  <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {/* Hard Skills */}
      <div className="bg-white shadow-md rounded-lg p-6  hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300 ">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Hard Skills</h2>
        <p className="text-gray-600">
          HTML, CSS, Tailwind CSS, JavaScript, Flutter, MongoDB, Basic SQL, Python, Node.js, Java, Next.js, React
        </p>
      </div>

      {/* Languages */}
      <div className="bg-white shadow-md rounded-lg p-6   hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Languages</h2>
        <p className="text-gray-600">Thai (Native speaker), English (Intermediate speaker)</p>
      </div>

      {/* Soft Skills */}
      <div className="bg-white shadow-md rounded-lg p-6   hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Soft Skills</h2>
        <p className="text-gray-600">Leadership, Programming Languages, Teamwork</p>
      </div>
    </div>
  </div>
</>

  )
}

export default Additional