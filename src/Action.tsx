import React from 'react'

export interface IAction {
  date: string
  where: string
  text: string
  fulltext: string
}

interface IDayProps {
  info: IAction
}

export const Action = (props:IDayProps) => {
  return <div className='block-cmp'>
    <b>{props.info.date}</b><br />
    <i>{props.info.where}</i>
    <div>{props.info.text}</div>
  </div>
}