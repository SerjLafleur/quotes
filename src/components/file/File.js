import React, { useState } from 'react'
import XLSX from "xlsx"
import './File.css'
import { Button } from '../Button/Button'



const File = ({ setFileLoad }) => {

    const [file, setFile] = useState({})


    const handleChange = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (file) {
            /* Boilerplate to set up FileReader */
            const reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = (e) => {
                let data = e.target.result
                let workbook = XLSX.read(data, { type: "binary" })
                console.log(workbook)
                workbook.SheetNames.forEach(sheet => {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
                    setFileLoad(rowObject)
                })
            }
        }
    }


    return (
        <div className='container-form'>
            <form
                onSubmit={handleSubmit}
                className='form'
            >
                <div className='field'>
                    <div>
                        <input
                            type='file'
                            accept='.xls, .xlsx'
                            onChange={handleChange}
                            id='file'
                        />
                        <label className='labelFile' for='file'>Choose a file</label>
                        <Button buttonStyle='btn--outline button' type='submit' >Enviar</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default File;