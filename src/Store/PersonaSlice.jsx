import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPersonaTable, createPersona, updatePersona, deletePersona } from '../api/persona.api'

export const person = createAsyncThunk(
    'personas',
    async () => {
        //console.log(userCredentials)      

        const response_api = await getPersonaTable()
        return response_api
    }
)

export const createPerson = createAsyncThunk(
    'personas/create',
    async (body) => {
        console.log(body)      

        const response_api = await createPersona(body)
        return response_api
    }
)

export const updatePerson = createAsyncThunk(
    'personas/update',
    async (body) => {
        console.log(body)      

        const response_api = await updatePersona(body)
        return response_api
    }
)

export const deletePerson = createAsyncThunk(
    'personas/delete',
    async (body) => {
        console.log(body)      

        const response_api = await deletePersona(body)
        return response_api
    }
)



const personSlice = createSlice({
    name: 'personas',
    initialState:{        
        columns:[],
        rows:[]
    },
    extraReducers:(builder)=>{
        builder
        //list
        .addCase(person.pending, (state)=>{
            console.log('person entro pending')
            state.token = null
        })
        .addCase(person.fulfilled, (state, action)=>{
            console.log('person entro fulfilled')
            state.columns = [...action.payload.columns]
            state.rows = [...action.payload.data]
        })
        .addCase(person.rejected, (state, action)=>{
            console.log('person entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('user-checking entro 400 backend')
                state.error = action.error.message
            }
        })        
        //create
        .addCase(createPerson.pending, (state)=>{
            console.log('createPerson entro pending')
            state.token = null
        })
        .addCase(createPerson.fulfilled, (state, action)=>{
            console.log('createPerson entro fulfilled')            
            state.rows = action.payload.data
        })
        .addCase(createPerson.rejected, (state, action)=>{
            console.log('createPerson entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('user-checking entro 400 backend')
                state.error = action.error.message
            }
        }) 
        //update
        .addCase(updatePerson.pending, (state)=>{
            console.log('updatePerson entro pending')
            state.token = null
        })
        .addCase(updatePerson.fulfilled, (state, action)=>{
            console.log('updatePerson entro fulfilled')            
            state.rows = action.payload.data
        })
        .addCase(updatePerson.rejected, (state, action)=>{
            console.log('updatePerson entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('user-checking entro 400 backend')
                state.error = action.error.message
            }
        })        
    }
})

export default personSlice.reducer