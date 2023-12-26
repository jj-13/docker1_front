import { ModalPersona } from './ModalPersona'

export const BreadcombPersona = () => {
  return (
    <>
         <div className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="breadcrumb">
                                            <div className="breadcrumb">
                                                <h2>Acciones para Personas</h2>                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="breadcrumb" style = {{ background: '#337ab7 !important' }}>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModalone">Agregar Persona</button>                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ModalPersona />
    </>
  )
}
