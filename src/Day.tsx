import React from 'react'

export interface ITask {
  pair: string
  course: string
  teacher?: string
  cabinet?: string
}

interface IDayProps {
  day: string
  tasks: ITask[]
}

export const Day = (props:IDayProps) => {
  return <div className='block-cmp'>
    <b>{props.day}</b>
    <table className='day-table'>
      <tr>
        <td>№</td>
        <td>Предмет</td>
        <td>Аудитория</td>
      </tr>
      {props.tasks.map((onetask, i) => {
        return <tr key={i}>
          <td>{onetask.pair}</td>
          <td>{onetask.course} <br /><i>{onetask.teacher}</i></td>
          <td>{onetask.cabinet ? onetask.cabinet : 'не извествно'}</td>
        </tr>
      })}
    </table>
  </div>
}