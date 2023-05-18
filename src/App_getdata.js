import React from 'react'
import InputField from './components/InputField'
import Button from './components/Button'

const App_getdata = () => {
  return (
    <div>
      <section>
      <div>
        <form>
          <div>
          <label htmlFor="Add_days">Swtich to add Days:</label>
           <InputField placeholder='Enter weekdays Number' txt_type='text' txt_Fieldname='name' />
          </div>
          <div>
            <Button btn_name='GetData' btnClass='getdata'/>
          </div>
          <div>
            <Button btn_name='Result Output' btnClass='resultoutput'/>
          </div>
        </form>
      </div>
      </section>
    </div>
  )
}

export default App_getdata