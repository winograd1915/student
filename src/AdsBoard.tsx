import React from 'react'
import { IAds, OneAds } from './Ads'
import { Input } from './Input'

const ads:IAds[] = [{
  date: '5.10.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены',
  who: 'Куликов А.Н.',
},{
  date: '11.10.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены',
  who: 'Куликов А.Н.',
},{
  date: '15.10.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены',
  who: 'Куликов А.Н.',
},{
  date: '5.11.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены',
  who: 'Куликов А.Н.',
},{
  date: '6.12.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены',
  who: 'Куликов А.Н.',
}]


export const AdsBoard = () => {
  return <div className='block-cmp'>
    <h2>Доска объявлений преподавателей</h2>
    <Input caption={'Поиск по объявлениям'} value={''} onChange={() => {}} /> 
    <button type="button">Найти</button>
    {ads.map((el, i) => {
      return <OneAds ads={el} key={i} />
    })}
  </div>
}