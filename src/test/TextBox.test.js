import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import {TextBox} from '../components/TextBox';

describe('TextBox component', () =>{

    let article
    let button
    beforeEach(()=>{//se utiliza para no estar repitiendo codigo a la hora de renderizar y buscar el objeto y despues se ejecutan los test respectivos
        render(<TextBox/>)
        article = screen.getByRole('article', {name: 'parrafo principal'})
        button = screen.getByRole('button', {name: 'Pulsa para modificar'})
    })

    test('valida la caja de texto en el documento', () => {        
        expect(article).toBeInTheDocument()
    })

    test('valida el color de la caja de texto', () => {        
        expect(article).toHaveStyle({
            backgroundColor: 'indigo',
        })
    })

    test('si al pulsar el boton cambia el color del fondo', () => {
        fireEvent.click(button)
        expect(article).toHaveStyle({
            backgroundColor: 'tomato',
        })
    })
})