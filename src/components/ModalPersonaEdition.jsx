import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updatePerson } from "../Store/PersonaSlice"
import { useForm } from "react-hook-form"

export const ModalPersonaEdition = ({idRow, detailPersona}) => {

    const dispatch = useDispatch()    
    const {register, handleSubmit, 
        formState:{errors}, watch, setValue, reset} = useForm()

    // Actualiza los valores del formulario cuando 'detailPersona' cambie
    useEffect(() => {
        if (detailPersona && detailPersona[0]) {
            setValue('nombre', detailPersona[0].nombre);
            setValue('apellidos', detailPersona[0].apellido);
            setValue('tipo_documento', detailPersona[0].tipo_documento);
            setValue('documento', detailPersona[0].documento);
            setValue('hobbie', detailPersona[0].hobby);
        }
    }, [detailPersona, setValue]);

    console.log("id: ", idRow)
    console.log("parsedpersonaInfo2: ", detailPersona)

    const onSubmit = handleSubmit((data)=>{    
        //console.log(data)
        //alert('enviando datos...')
        console.log('formulario enviado')    
        //antes de enviar al backend se puede manipular la data del form
        const body = {
            id: idRow,
            form: {
                nombre: data.nombre,
                apellidos: data.apellidos,
                tipo_documento: data.tipo_documento,
                documento: data.documento,
                hobbie: data.hobbie
            },
            headers: {              
                'Content-Type': 'application/json', // Agrega el encabezado Content-Type
                
            } 
        }
        console.log(body)
        dispatch(updatePerson(body))
        //console.log(data.correo)
        //una ves verificada la data del form
    
        //una vez enviado los datos limpiar los inputs uno por uno si se desea sino
        // setValue('correo', '')
        // setValue('pais', '')
        // setValue('foto', '')
        
        // o limpiar todo el form
        reset()
    
    })    
  return (
    <>
        <div className="modal fade" id="modalPersonaEdition" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Actualizar Persona</h5>
                        
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={ onSubmit }>
                        <p>Ingrese la informacion de la persona.</p>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                                {
                                    errors.nombre && <span>{errors.nombre.message}</span>
                                }
                                <input 
                                    type="text"
                                    id="nombre" 
                                    name = "nombre" 
                                    className="form-control input-sm" 
                                    placeholder="Ingrese el nombre de la persona"
                                    {...register('nombre', {
                                            required: {
                                                value: true,
                                                message: "es requerido"
                                            }
                                        })
                                    }
                                />                        
                            </div>

                            <div className="mb-3">
                                <label htmlFor="apellidos" className="col-form-label">Apellidos:</label>
                                {
                                    errors.apellidos && <span>{errors.apellidos.message}</span>
                                }
                                <input 
                                    type="text"
                                    id="apellidos" 
                                    name = "apellidos" 
                                    className="form-control input-sm" 
                                    placeholder="Ingrese los apellidos"
                                    {...register('apellidos', {
                                            required: {
                                                value: true,
                                                message: "es requerido"
                                            }
                                        })
                                    }
                                />                        
                            </div>

                            <div className="mb-3">
                                <label htmlFor="tipo_documento" className="col-form-label">Tipo documento:</label>
                                {
                                    errors.tipo_documento && <span>{errors.tipo_documento.message}</span>
                                }
                                <input 
                                    type="text"
                                    id="tipo_documento" 
                                    name = "tipo_documento" 
                                    className="form-control input-sm" 
                                    placeholder="Ingrese el tipo de documento"
                                    {...register('tipo_documento', {
                                            required: {
                                                value: true,
                                                message: "es requerido"
                                            }
                                        })
                                    }
                                />                        
                            </div>

                            <div className="mb-3">
                                <label htmlFor="documento" className="col-form-label">Documento:</label>
                                {
                                    errors.documento && <span>{errors.documento.message}</span>
                                }
                                <input 
                                    type="text"
                                    id="documento" 
                                    name = "documento" 
                                    className="form-control input-sm" 
                                    placeholder="Ingrese el # documento"
                                    {...register('documento', {
                                            required: {
                                                value: true,
                                                message: "es requerido"
                                            }
                                        })
                                    }
                                />                        
                            </div>

                            <div className="mb-3">
                                <label htmlFor="hobbie" className="col-form-label">Hobbie:</label>
                                {
                                    errors.hobbie && <span>{errors.hobbie.message}</span>
                                }
                                <input 
                                    type="text"
                                    id="hobbie" 
                                    name = "hobbie" 
                                    className="form-control input-sm" 
                                    placeholder="Ingrese el hobbie"
                                    {...register('hobbie', {
                                            required: {
                                                value: true,
                                                message: "es requerido"
                                            }
                                        })
                                    }
                                />                        
                            </div>
                            

                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                            >
                                Registrar
                            </button>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

ModalPersonaEdition.propTypes = {
    idRow: PropTypes.number, 
    detailPersona: PropTypes.object
}