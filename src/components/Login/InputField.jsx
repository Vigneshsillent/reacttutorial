import React from 'react'

const InputField = (props) => {
    console.log(props);
  return (
    <input name={props.txt_Fieldname} type={props.txt_type} placeholder={props.placeholder} />
  )
}

export default InputField