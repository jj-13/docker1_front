import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { createPerson } from "../Store/PersonaSlice"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export const ModalPersona = ({ onUpdateTable }) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, 
        formState:{errors}, watch, setValue, reset} = useForm(/* {
          defaultValues:{ //para setear desde el inicio el forumario
            nombre: "usu1",
            correo: "usu1@gmail.com"
          }
        } */) //formState permite mostrar los errores del formulario segun las validaciones del register

        const onSubmit = handleSubmit((data)=>{    
            //console.log(data)
            //alert('enviando datos...')
            console.log('formulario enviado')    
            //antes de enviar al backend se puede manipular la data del form
            const body = {
                form: {
                    nombre: data.nombre,
                    apellidos: data.apellidos,
                    tipo_documento: data.tipo_documento,
                    documento: data.documento,
                    hobbie: data.hobbie,
                },
                headers: {              
                    'Content-Type': 'application/json', // Agrega el encabezado Content-Type
                    // 'Content-Type': 'multipart/form-data', // Agrega el encabezado Content-Type
                    // 'Authorization': `Bearer ${user.token}`,
                } 
            }
            //console.log(body)
            dispatch(createPerson(body)).then((result) =>{
                // console.log('dispatch_categoryProduct')
                // console.log(result)
                // console.log(result.payload)
                if (result.payload){
                    toast.success("Create succesfully.",{
                        duration:5000,
                        position:"top-right",
                        style:{
                            background:"#101010",
                            color:"white"
                        }
                    })
                    onUpdateTable(); // Llama a la función de actualización después de completar la creación

                }
            }).catch((error) => {
                //alert("Error:" + error)
                toast.error(error)
            })
            //console.log(data.correo)
            //una ves verificada la data del form
        
            //una vez enviado los datos limpiar los inputs uno por uno si se desea sino
            // setValue('correo', '')
            // setValue('pais', '')
            // setValue('foto', '')
            
            // o limpiar todo el form
            reset()
            //window.location.reload()
        
          })    
  return (
    <>
        <Toaster position='top-right' reverseOrder={false} /> 

        <div className="modal fade" id="myModalone" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Persona</h5>
                        
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
                                    id="name" 
                                    name = "name" 
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
                                    errors.tipo_documento && <span>{errors.tipo_documento.message}</span>
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
                                    errors.tipo_documento && <span>{errors.tipo_documento.message}</span>
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
ModalPersona.propTypes = {
    onUpdateTable: PropTypes.func
}