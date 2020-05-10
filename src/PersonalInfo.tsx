import React from 'react'
import { Input } from './Input'


export const PersonalInfo = () => {
  return <div className="block-cmp personal-info">
    
    <Input value={'Иван'} caption={'Введите имя'} onChange={() => {}}/>
    <Input value={'МатФак'} caption={'Введите факультет'} onChange={() => {}}/>
    <Input value={'ПМИ42'} caption={'Введите группу'} onChange={() => {}}/>

  </div>
}