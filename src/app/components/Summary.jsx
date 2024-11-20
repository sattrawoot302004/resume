import React from 'react'

function Summary() {
  return (
   <>
     <section id="Smmary"className="bg-gray-100 py-12">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-8">Summary</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300" >
        <h3 className="text-xl font-bold">ChatBot Sugarcane</h3>
        <p className="text-gray-500 mt-1 font-bold" >2024</p>
        <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
          <li>Experienced software developer proficient in full-stack development, with experienced in building chatbots, fine-tuning AI models, and developing APIs and web applications. Strong background in computer science and technology</li>

        </ul>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Summary