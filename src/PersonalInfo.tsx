import React from 'react'
import { Input } from './Input'


export const PersonalInfo = () => {
  return <div className="block-cmp personal-info">
    
    <Input value={'Анна'} caption={'Введите имя'} onChange={() => {}}/>
    <Input value={'Математический'} caption={'Введите факультет'} onChange={() => {}}/>
    <Input value={'ПМИ-42БО'} caption={'Введите группу'} onChange={() => {}}/>

  </div>
}