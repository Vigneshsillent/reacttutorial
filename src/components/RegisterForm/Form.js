import React from 'react'
import InputField from './components/InputField'
import Button from './components/Button'

const Form = () => {
  return (
    <div>
      <section>
      <div>
        <form className='form-m'>
          <div>
          <label>Reg Name</label>
          </div>
          <div>
           <InputField txt_type='text' txt_Fieldname='name' />
          </div>
          <div>
          <label>Email</label>
          </div>
          <div>
           <InputField txt_type='text' txt_Fieldname='name' />
          </div>
          <div>
          <label>Mobile Number</label>
          </div>    
          <div>
           <InputField txt_type='number' txt_Fieldname='number' />
          </div>
          <div>
            <Button btn_name='Submit' btnClass='submit'/>
          </div>
          <div>
            <Button btn_name='Cancel' btnClass='cancel'/>
          </div>
        </form>
      </div>
      </section>
    </div>
  )
}

export default Form