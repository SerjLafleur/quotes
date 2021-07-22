/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SelectedFormat from '../selectedFormat/SelectedFormat';
import File from '../file/File';

const Quotes = ({ setResultData }) => {


    const [fileLoad, setFileLoad] = useState([])
    const [format, setFormat] = useState({})
    const [result, setResult] = useState()

    console.log('FIRELOADD', fileLoad)
    console.log('format', format)

    useEffect(() => {

        if (fileLoad && format.value) {
            // eslint-disable-next-line array-callback-return
            fileLoad.map(elm => {

                switch (format) {
                    case 'MLA':
                        setResult(<p>{elm.Primer_apellido}, {elm.Nombre}. "{elm.Título}." <i>{elm.Revista}</i> {elm.Volumen}.{elm.Numero} ({elm.Año}): {elm.Página_de_inicio}-{elm.Página_de_fin}</p>)
                        break;
                    case 'APA':
                        setResult(<p>{elm.Primer_apellido}, {elm.Abreviatura_nombre} ({elm.Año}). {elm.Título}. <i>{elm.Revista}</i>, {elm.Volumen}({elm.Numero}), {elm.Página_de_inicio}-{elm.Página_de_fin}</p>)
                        break;
                    case 'CHICAGO':
                        setResult(<p>{elm.Primer_apellido}, {elm.Nombre}. "{elm.Título}." <i>{elm.Revista}</i>, {elm.Volumen}, no. {elm.Numero} ({elm.Año}): {elm.Página_de_inicio}-{elm.Página_de_fin}</p>)
                        break;
                    case 'HARVARD':
                        setResult(<p>{elm.Primer_apellido}, {elm.Abreviatura_nombre}, ({elm.Año}). {elm.Título}. <i>{elm.Revista}</i>, {elm.Volumen}({elm.Numero}),  pp.{elm.Página_de_inicio}-{elm.Página_de_fin}</p>)
                        break;
                    case 'VANCOUVER':
                        setResult(<p>{elm.Primer_apellido}, {elm.Abreviatura_nombre} {elm.Título}. {elm.Revista}. {elm.Año} {elm.Mes} {elm.Dia};{elm.Volumen}({elm.Numero}):{elm.Página_de_inicio}-{elm.Página_de_fin}</p>)
                        break;
                    default:
                        break;
                }
            })
        }

    }, [])

    console.log(result)
    setResultData(result)

    return (
        <>
            <div className='container-quotes'>
                {fileLoad.length === 0 ? <File setFileLoad={setFileLoad} />
                    : <SelectedFormat setFormat={setFormat} />}
            </div>
        </>

    );
}

export default Quotes;