import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalPersonaEdition } from './ModalPersonaEdition'
import { deletePerson } from "../Store/PersonaSlice"
import toast, { Toaster } from "react-hot-toast"

export const PersonaTable = ({ title, optionalText, columns, rows, onUpdateTable }) => {

    const dispatch = useDispatch() 
    const [idRow, setIdRow] = useState(0)
    const [detailPersona, setdetailPersona] = useState({})

    const activeRow = (idRow) =>{
        setIdRow(idRow)
        console.log(idRow)
        const personaInfo = localStorage.getItem('persona')
        const parsedpersonaInfo = JSON.parse(personaInfo)
        //console.log("parsedpersonaInfo: ", parsedpersonaInfo)
        var filteredData = parsedpersonaInfo.data.filter(d => d.id === idRow);
        console.log("parsedpersonaInfo: ", filteredData);
        setdetailPersona({...filteredData})
    }

    const activeRowDelete = (idRow) =>{
        // setIdRow(idRow)
        // console.log(idRow)
        const body = {
            id: idRow,
            headers: {              
                'Content-Type': 'application/json', // Agrega el encabezado Content-Type                
            } 
        }
        //console.log(body)
        dispatch(deletePerson(body)).then(() =>{
            // console.log('dispatch_categoryProduct')
            // console.log(result)
            // console.log(result.payload)
            toast.success("Delete succesfully.",{
                duration:5000,
                position:"top-right",
                style:{
                    background:"#101010",
                    color:"white"
                }
            })
            onUpdateTable() // Llama a la función de actualización después de completar la creación
        }).catch((error) => {
            //alert("Error:" + error)
            toast.error(error)
        })
    }
  return (
    <>
        <ModalPersonaEdition 
        idRow={idRow}
        detailPersona={detailPersona}
        onUpdateTable={onUpdateTable} 
        /> {/* Pasa la función onUpdateTable de actualización como prop */}

        <Toaster position='top-right' reverseOrder={false} /> 

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="normal-table-list">
                <div className="basic-tb-hd">
                    <h2>{ title }</h2> 
                    <p>{ optionalText }</p>
                </div>
                <div className="bsc-tbl">
                {       
                    rows &&                 
                    <table className="table table-sc-ex">
                            <thead>
                                <tr>
                                    {
                                        columns.map((column, i) => (                                       
                                            <th key={i}> { column }</th>
                                            )
                                        )
                                    }
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rows.map((item) => (
                                        <tr key={ item.id }>
                                            <td>{ item.id }</td>
                                            <td>{ item.nombre }</td>
                                            <td>{ item.apellido }</td>
                                            <td>{ item.tipo_documento }</td>
                                            <td>{ item.documento }</td>
                                            <td>{ item.hobby }</td>
                                            <td>
                                                <button 
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalPersonaEdition" 
                                                    onClick={()=>activeRow(item.id)}                                                  
                                                >
                                                EDITAR
                                                </button>

                                                <button 
                                                    className="btn btn-danger"
                                                    data-toggle="modal" 
                                                    data-target="#modalDeleteCategory"
                                                    onClick={ () => activeRowDelete(item.id)}
                                                >
                                                ELIMINAR
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    </>
  )
}


PersonaTable.propTypes = {
    title: PropTypes.string,
    optionalText: PropTypes.string,
    columns: PropTypes.array,
    rows : PropTypes.array,
    onUpdateTable: PropTypes.func
}