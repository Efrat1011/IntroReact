import { useState } from 'react'


export default function App() {

  return (
    <>
    <ul className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-4'>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        All
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Categoriy
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Collektion
      </li>
      <li className=' border-black border-2 rounded py-3 px-5 '>
        Price
      </li>
    </ul>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-4 sm:px-8 md:px-16 lg:px-32 m-'>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrFcAE91lOg2VOHIIvUUDIjZQ-hH_euMsSg&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2 ">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsBiPcoWmqynM45pNZb-bgbDZZvLjO5iNmA&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6o5oU_9YKOGJzbzepStGxtULZarOGvhEqg&s" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://i.pinimg.com/originals/da/5e/5d/da5e5d04ab72e35b7d727f2e038e9a90.jpg" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
<img src="https://img3.akspic.ru/crops/2/3/2/4/6/164232/164232-vselennaya_koshka-kot-pes-kotenok-nos-1080x1920.jpg" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://99px.ru/sstorage/53/2013/11/tmb_87621_5902.jpg" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>
      <div className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white hover:shadow-2xl transition-all">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCXq0P3L9wF2tOxJ9MBs5-2EWXjzqK3srNxK7qJhcjOqGdm7l40C6FdWA0B0nmuUd2-4&usqp=CAU" alt="Sun Glass" className="w-40 h-40 object-cover rounded-xl mx-auto"/>
        <div className="text-center mt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Sun-Glass</h3>
          <p className="text-sm text-gray-500">Hello</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">APP</button>
        </div>
      </div>

    </div>
    </>
  )
} 