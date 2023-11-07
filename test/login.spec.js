/**
 * @jest-environment jsdom
 */

import { login } from '../src/views/login';
import * as index from '../src/lib/index';

describe('login', () => {
  test('existe un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(login('../'));
    const haveAButtonLogin = DOM.querySelector('claseLogin');
    expect(haveAButtonLogin).not.toBe(undefined);
  });
});

describe('prueba de Navegacion', () => {
  test('navigateTo', () => {
    const DOM = document.createElement('div');
    const NavigateTo = jest.fn();
    DOM.append(login(NavigateTo));
    const buttonLogin = DOM.querySelector('.claseLogin');
    buttonLogin.click(NavigateTo);
    expect(NavigateTo).toHaveBeenCalledTimes(0);
  });
});

// describe('Ingreso de Usuario existente', () => {
//   const mockIngresoUsuarioExistente = jest.spyOn(window, 'ingresoUsuarioExistente');
//   mockIngresoUsuarioExistente.mockImplementation(() => ({
//     email: 'equipo3@mail.com',
//     password: '1234567',
//   });
//   const DOM = document.createElement('div');
//   DOM.append(login('../'));
//   const email = DOM.querySelector('inputname');
//   const password = DOM.querySelector('inputpass');
//   email.value = 'equipo3@mail.com';
//   password.value = '1234567';
//   const botonLogin = DOM.querySelector('.claseLogin');
//   botonLogin.click();
//   expect(mockIngresoUsuarioExistente).toHaveBeenCalledTimes(1);
// )});

describe('Ingreso de Usuario existente', () => {
  jest.spyOn(index, 'ingresoUsuarioExistente').mockImplementation(() => ({
    email: 'equipo3@mail.com',
    password: '1234567',
  }));
  const DOM = document.createElement('div');
  DOM.append(login('../'));
  const email = DOM.querySelector('input[name="email"]');
  const password = DOM.querySelector('input[name="password"]');
  email.value = 'equipo3@mail.com';
  password.value = '1234567';
  const botonLogin = DOM.querySelector('.claseLogin');
  botonLogin.click();
  expect(index.ingresoUsuarioExistente).toHaveBeenCalledTimes(1);
});
