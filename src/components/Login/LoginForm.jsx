import React from 'react'
import InputField from './InputField'
import Btn from './Btn'

const LoginForm = () => {
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
                            <InputField placeholder='Password' txt_type='password' txt_Fieldname='password' />
                        </div>
                        <div>
                            <Btn btn_name='Submit' btnClass='submit' />
                        </div>
                        <div>
                            <Btn btn_name='Cancel' btnClass='cancel' />
                        </div>
                    </form>
                </div>
            </section>
            <form>
                <div className="f-input">
                    <div className="child-input">
                        <label >Name 1:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name' />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 2:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 3:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 4:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 5:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 6:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 7:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>

                    <div className="child-input">
                        <label >Name 8:</label>
                        <div>
                            <InputField txt_type="text" placeholder="Name" formClass="Hello" txt_Fieldname='name'  />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm