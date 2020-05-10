import React from 'react'

export interface IAds {
  date: string
  who: string
  text: string
}

interface IOneAdsProps {
  ads: IAds
}

export const OneAds = (props:IOneAdsProps) => {
  return <div className='block-cmp'>
    <b>{props.ads.date}</b><br />
    <i>{props.ads.who}</i>
    <div>{props.ads.text}</div>
  </div>
}