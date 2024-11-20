import React from 'react'

function Projectwork() {
  return (
    <section id="Projectwork"className="bg-gray-100 py-12">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-8">Projects And Work</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300" >
        <h3 className="text-xl font-bold">ChatBot Sugarcane</h3>
        <p className="text-gray-500 mt-1 font-bold" >2024</p>
        <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
          <li>build a Login/Register system that integrates with MongoDB</li>
          <li>fine-tune an AI model using the Supervised Fine-Tuning method, using the meta-llama/Llama-3.1-8B-Instruct model, and train it on vast.ai</li>
          <li>create an API for the fine-tuned model using vLLM</li>
          <li>update the front-end using Tailwind CSS</li>
          <li>Develop the entire back-end</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md  hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold">Risk of disease</h3>
        <p className="text-gray-500 mt-1 font-bold">2022</p>
        <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
        <li className="mt-2 text-gray-700">Develop website front end website about risk of disease.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md  hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold">Restaurant System</h3>
        <p className="text-gray-500 mt-1 font-bold">2024-Now</p>
        <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
        <li className="mt-2 text-gray-700">This is a project that is currently in the early stages. I will be taking on the role of a full-stack developer, and I will use Prisma ORM to manage the PostgreSQL database. The backend will be built with Node.js and Express.js, while the frontend will be developed using Next.js.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Projectwork