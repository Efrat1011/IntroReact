import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'


const translations = {
    en: 'Hello',
    kz: 'Сәлем',
    ru: 'Привет'

}
export default function Content() {
    const {state} = useContext(LanguageContext)
  return (
    <div>
      {translations[state.language]}
    </div>
  )
}
