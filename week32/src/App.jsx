// import React from 'react'
// import './App.css'
// import { useFetch } from './components/useFetch'
// import CustomHook from './components/CustomHook'

// export default function App() {
//   // let {data, isLoading} = useFetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')

//   if(data){
//     return (
//       <>
//       {/* {isLoading && <p style={{color:'green',textAlign:'center'}}>Loading....</p>}
//        {data && data.map((element) => {
//         return(
//           <div key={element.id}>
//             {element.title}-*-*-*-*-
//             {element.author}<br/>
//             {element.description} <br/>
//             <img src={element.image} alt="" />
//           </div>
//         )
//        })} */}
//       
//       </>
//     )
//   }
  
// }


// import React from 'react'
// import CustomHook from './components/CustomHook'
// import './App.css'
// export default function App() {
//   return (
//     <div>
//        <CustomHook/>
//     </div>
//   )
// }
import React from 'react'
import './App.css'
import useFilter from './components/useFilter'
import { useFetch } from './components/useFetch'

export default function App() {
  let {data, isLoading} = useFetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')

  let {setSearch, filteredOrders} = useFilter(data)
  
  return (
    <>
    <input
     type="text"
     placeholder='SEARCH...' onChange={(e)=>setSearch(e.target.value)} />
      {filteredOrders.map((item,Efratindex)=>(
        <div key={Efratindex}>
          <h1>{item.author}</h1>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
    </>
  )
}
