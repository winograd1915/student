import React from 'react'

interface IInputProps {
  value: string
  caption: string
  onChange: (val: string) => void
}

export const Input = (props: IInputProps) => {
  return <div className='input-base'>
    {props.caption} <br />
    <input type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
  </div>
}