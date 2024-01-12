import axios from "axios";

const personaApi = axios.create({
    baseURL:"http://ip172-18-0-98-cmgjqaio7r5g00fodlng-8000.direct.labs.play-with-docker.com/api"
    //baseURL:"http://127.0.0.1:8000/api"
})

export const getPersonaTable = async () => {
    const request = await personaApi.get('/persona/')
    const response = request.data
    const personaTable = {}
    personaTable.columns = ['Id', 'Nombre', 'Apellidos', 'Tipo documento', 'Documento', 'Hobbie']
    const data = []
    response.forEach(persona => {
        data.push({
            id: persona.id,
            nombre: persona.nombre,
            apellido: persona.apellidos,
            tipo_documento: persona.tipo_documento,
            documento: persona.documento,
            hobby: persona.hobbie
        })
    });
    console.log(request.status)
    console.log(response)
    personaTable.data = data    
    localStorage.setItem('persona', JSON.stringify(personaTable))
    //console.log(personaTable)
    return personaTable
}

export const createPersona = async (body) => {
    // Crear una instancia de FormData
    let formData = new FormData()
    formData.append('nombre', body.form.nombre);
    formData.append('apellidos', body.form.apellidos);
    formData.append('tipo_documento', body.form.tipo_documento);
    formData.append('documento', body.form.documento)
    formData.append('hobbie', body.form.hobbie)

    /* const request = await loginApi.post('api/products/', {
        name: body.form.name,
        description: body.form.description,
        image: body.form.imagen,
        measure_unit: parseInt(body.form.measure_unit), 
        category_product: parseInt(body.form.category_product)
    }, {headers: body.headers}) */
    const request = await personaApi.post('/persona/', formData, {headers: body.headers})/* .then((res) => {
    console.log(res.status)
    })
    .catch((error) => {
    console.error({ error })
    }) */
    const response = request.data
    console.log(request)
    // console.log(response)

    if(request.status === 200 || request.status === 201){
        console.log('persona creada, ' + request.status)
        //localStorage.setItem('user', JSON.stringify(response))
    }

    return response
}

export const updatePersona = async (body) => {
    // Crear una instancia de FormData
    let formData = new FormData()
    formData.append('nombre', body.form.nombre);
    formData.append('apellidos', body.form.apellidos);
    formData.append('tipo_documento', body.form.tipo_documento);
    formData.append('documento', body.form.documento)
    formData.append('hobbie', body.form.hobbie)

    const request = await personaApi.put(`/persona/${body.id}/`, formData, {headers: body.headers})
        const response = request.data
        // console.log(request.status)
        // console.log(response)

        if(request.status === 200){           
            //notification("Felicidades",body.message,'success');
            console.log('actualizado ok')
        }

        return response
}

export const deletePersona = async (body) => {
    // Crear una instancia de FormData
    
    console.log(body)
    
    //console.log(process.env.REACT_APP_API_URL)
    //const request = await axios.post('localhost:8000/login/', userCredentials)
    const request = await personaApi.delete(`/persona/${body.id}/`, {headers: body.headers})
    const response = request.data
    // console.log(request.status)
    // console.log(response)

    if(request.status === 200 || request.status === 201){           
        //notification("Felicidades",body.message,'success');
        console.log('eliminado ok')
    }

    return response
   
}

