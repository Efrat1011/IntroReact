import { useEffect, useState } from 'react'
import './App.css'

function Example() {
  const [product, setProduct] = useState('')

  useEffect(() => {
    const random = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${Math.floor(Math.random() * 100) + 1}`)
        const data = await response.json()
        setProduct(data)
      }
       catch (err) {
        console.error(err)
      }
    }
  
    random()
    const id = setInterval(random, 5000)
    return () => clearInterval(id)
  }, [])
  

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl text-center max-w-md w-full transform transition duration-300 hover:scale-105">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">🎲 Random Product</h1>
      {product ? (
        <div className="space-y-3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-600 font-bold text-lg">${product.price}</p>
        </div>
      ) : (
        <p className="text-gray-500">🔄 Жүктелуде...</p>
      )}
    </div>
  )
}
export default function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center space-y-8 p-6">
      <button
        onClick={() => setVisible(!visible)}
        className="px-8 py-3 bg-green-500 text-white text-lg font-bold rounded-xl shadow-md hover:bg-green-600 active:scale-95 transition"
      >
        {visible ? 'Компонентті жасыру' : 'Компонентті қосу'}
      </button>
      {visible && <Example />}
    </div>
  )
}