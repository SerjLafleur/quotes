import React, { useState } from 'react';
import './SelectedFormat.css'

const SelectedFormat = ({ setFormat }) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({ value: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormat(form.value)


    }
    return (
        <div className='container-form'>
            <form
                onSubmit={handleSubmit}
                className='form'
            >
                <div className='field'>
                    <div>
                        <label className='label'>Choose the format for articles:</label>
                        <select onChange={handleChange} >
                            <option>Select format</option>
                            <option value='MLA'>MLA</option>
                            <option value='APA'>APA</option>
                            <option value='CHICAGO'>CHICAGO</option>
                            <option value='HARVARD'>HARVARD</option>
                            <option value='VANCOUVER'>VANCOUVER</option>
                        </select>
                        <i></i>
                    </div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    );

}

export default SelectedFormat;