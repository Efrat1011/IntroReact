// import React, { useReducer } from 'react'
// import './App.css'


// let initialState = {
//   count: 0,
//   name:'poka pustoy'
// }

// function reducer(state,action){
//   switch(action.type){
//     case "artady":
//       return {...state,count: state.count+100, name: 'Efrat'}

//     case"kemidy":
//     return{...state,count: state.count-100, name:'Kuanish'}

//     case "0ge ten":
//       return{count:0,name:'poka pustoy'}

//       default:
//         return state
//   }
// }
// export default function () {
//   const [state, dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//       Count:{state.count}<br/><br/>
//       Name: {state.name}<br/><br/>
//       <button onClick={() =>dispatch({type:"artady"})}>+++</button>
//       <button onClick={() =>dispatch({type:"kemidy"})}>---</button>
//       <button onClick={() =>dispatch({type:"0ge ten"})}>Reset</button>
//     </div>
//   )
// }

// import React, { useReducer } from 'react'
// let initialState = {
//   name:'',
//   surname:'',
//   email:'',
//   password:'',
//   confirmpassword:'',
// }
// function reducer (state,action){
//   switch(action.type){
//     case "change":
//       return{
//         ...state,
//         [action.field]: action.value
//       }
//   }
// }
// export default function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)

//   function handleSubmit(e){
//     e.preventDefault()
//     alert(`Name: ${state.name}\n Surname: ${state.surname} \n Email: ${state.email} \n Password: ${state.password}`)
//   }

//   function handleChange(e){
//     dispatch({
//       type: 'change',
//       field: e.target.name,
//       value: e.target.value
//     })
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name='name' placeholder='Enter name' onChange={handleChange}required/>
//         <input type="text" name='surname' placeholder='Enter surname' onChange={handleChange} required/>
//         <input type="password" name='password' placeholder='Enter password' onChange={handleChange} required/>
//         <input type="password" name='conformPassword' placeholder='Confirm password' onChange={handleChange}required/>
//         <input type="email" name='email' placeholder='Enter email' onChange={handleChange}required/>
//         <button>Login</button>
//       </form>
//     </div>
//   )
// }

















// import React from 'react'
// import './App.css'
// import NewTheme from './components/NewTheme'
// import NewTimer from './components/NewTimer'
// export default function App() {
//   return (
//     <div>
//      <NewTimer/>
//     </div>
//   )
// }

import React, { useReducer } from 'react'
import './App.css'
import LanguageContext from './components/LanguageContext'
import Language from './components/Language'
import Content from './components/Content'

let initialState = {
  language: 'en'

}
function reducer(state,action){
  switch(action.type){
    case 'CHANGE_LANGUAGE':
      return {language: action.payload};
      default:
        return state
  }
}

export default function App() {
const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <LanguageContext.Provider value={{state,dispatch}}>
        <Language/>
        <Content/>
      </LanguageContext.Provider>
    </div>
  )
}

