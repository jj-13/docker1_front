import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'; // Agrega la importación del Provider
import store from '../Store'; // Ajusta la ruta según la ubicación de tu store
import {PersonaTable} from '../components/PersonaTable'; // Ajusta la ruta según la ubicación real de tu componente
import {TextBox} from '../components/TextBox';

/*
describe('PersonaTable component', () => {
  const columns = ['ID', 'Nombre', 'Apellido', 'Tipo de Documento', 'Documento', 'Hobby'];
  const rows = [
    { id: 1, nombre: 'John', apellido: 'Doe', tipo_documento: 'DNI', documento: '12345678', hobby: 'Programación' },
  ];

  it('renders PersonaTable component', () => {
    render(
      <Provider store={store}>
        <PersonaTable
          title="Tabla de Personas"
          optionalText="Texto opcional"
          columns={columns}
          rows={rows}
          onUpdateTable={() => {}}
        />
      </Provider>
    );

    const linkElement = screen.getByText('John');
    expect(linkElement).toBeInTheDocument();
  });
});
*/
