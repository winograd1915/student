import React from 'react'
import { IAds, OneAds } from './Ads'
import { Input } from './Input'

const ads:IAds[] = [{
  date: '5.10.2020',
  text: 'Занятия 22.11.2022 может быть будут отменены.',
  who: 'Куликов А.Н.',
},{
  date: '11.10.2020',
  text: 'Пары не будет 14.10.2020.',
  who: 'Кашапов А.С.',
},{
  date: '15.10.2020',
  text: ' 16.10.2020 будет контрольная на 45 минут.',
  who: 'Преображнский И.Е.',
},{
  date: '5.11.2020',
  text: '12.11. 2020 уезжаю на конференцию. Пара будет перенесена.',
  who: 'Майорова Н.Л.',
},{
  date: '6.12.2020',
  text: '7.12. 2020 проведем пару за 12 ноября.',
  who: 'Майорова Н.Л.',
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