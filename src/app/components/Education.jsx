import React from 'react'

function Education() {
  return (
    <>
    <section id='Education'className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold mb-2">3rd year of Computer Engineering Faculty</h3>
        <p className="text-gray-600">Khon Kaen University</p>
        {/* <p className="text-gray-500">GPAX: 2.99</p> */}
        <p className="text-gray-500 mt-1 font-bold ">2022-Now</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
  <h3 className="text-xl font-bold mb-2">NAKAESAMAMAKITTAYA SCHOOL</h3>
  <p className="text-gray-600">Nakhon Phanom</p>
  {/* <p className="text-gray-500">GPAX: 3.97</p> */}
  <p className="text-gray-500 mt-1 font-bold">2016-2022</p>
</div>

    </div>
  </div>
</section>
    </>
  )
}

export default Education