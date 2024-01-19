import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom'
import {AcceptCookies} from '../components/AcceptCookies'

describe('AcceptCookies components', () => {

    let checkbox
    let article
    beforeEach(() => {
        render(<AcceptCookies/>)
        checkbox = screen.getByLabelText('Acepta las cookies')
        article = screen.getByRole('article', {name: 'confirmacion cookies'})
    })

    test('si el checkbox esta en el componente y esta desactivado', () => {
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
    })

    test('si cambia el texto al pulsar el checkobox', () => {
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        expect(article.textContent).toBe('Cookies aceptadas')
    })
})