import React from 'react'
import './button.css'

const Button = (props) => {
    console.log(props);
  return (
    <button type='button' className={props.btnClass}>{props.btn_name}</button>
  )
}

export default Button
