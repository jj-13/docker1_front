import { configureStore } from '@reduxjs/toolkit'
import personReducer from './PersonaSlice'


const store = configureStore({
    reducer:{
        persona: personReducer        
    }
})

export default store