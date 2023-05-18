import React from 'react'
import './login.css'

const Btn = (props) => {
    console.log(props)
  return (
    <button type='button' className={props.btnClass}>{props.btn_name}</button>
  )
}

export default Btn