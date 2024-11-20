import React from 'react'
import nextImg from '../../../public/students.jpg'
import Image from 'next/image'
import gmailImg from '../../../public/reshot-icon-gmail-7KXMAZQLB9.svg'
import phoneImg from '../../../public/reshot-icon-phone-YUPNL5R2TW.svg'
import githubImg from '../../../public/reshot-icon-github-NY46M9DGFU.svg'
function Profile() {
  return (
    <section id="profile"className="bg-gray-100 py-12 my-">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8">Profile</h2>
      <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center  hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
  <div className="mr-8">
    {/* <Image 
      src={nextImg} 
      width={200} 
      height={300} 
      style={{ borderRadius: '50%' }} 
      alt="The student"  
      className="py-10"
    /> */}
  </div>
  <div className="text-right">

    <h3 className="text-3xl font-bold ">Sattrawoot Parnemeng</h3>
    <hr className="border-t-2 border-blue-500 my-4 w-[300px]"></hr>
    <h2 className="py-3 text-xl flex items-center ">
  <Image src={gmailImg} width={30} height={30} className="rounded-full mr-2  " alt="Gmail icon"/>
  sattrawoot302004@gmail.com
</h2>
    <h2 className="py-2 text-xl flex items-center">
  <Image src={githubImg} width={30} height={30} className="rounded-full mr-2" alt="Github icon"/>
  github.com/sattrawoot302004
</h2>
<h2 className="py-2 text-xl flex items-center">
  <Image src={phoneImg} width={30} height={30} className="rounded-full mr-2" alt="Phone icon"/>
  083-456-6681
</h2>
  </div>
</div>
    
      </div>
    </div>
  </section>
  )
}

export default Profile