import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export default function Language() {
    const {state,dispatch} = useContext(LanguageContext)
  return (
    <div>
      <select value={state.language} onChange={(e)=>dispatch({type:'CHANGE_LANGUAGE', payload: e.target.value})}>
        <option value="en">English</option>
        <option value="kz">Kazakh</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  )
}
