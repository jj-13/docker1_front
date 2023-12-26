import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { person } from "../Store/PersonaSlice"
import { PersonaTable } from '../components/PersonaTable'
import { BreadcombPersona } from '../components/BreadcombPersona'

export const Persona = () => {
    const dispatch = useDispatch()
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])

    useEffect(()=>{   
        dispatch(person()).then((result) =>{
            console.log('dispatch_person')
            // console.log(columns)
            // console.log(rows)
            if (result.payload){
                //console.log(result.payload)
                setColumns([...result.payload.columns])
                setRows([...result.payload.data])
                // console.log(result.payload.columns)
                // console.log(result.payload.data)
                //console.log("")
            }
        })
      }, [dispatch])

  return (
    <>
        <BreadcombPersona/>

        <PersonaTable
        title="Personas"
        optionalText=""
        columns={ columns } 
        rows={ rows }
        />
    </>
    
  )
}
