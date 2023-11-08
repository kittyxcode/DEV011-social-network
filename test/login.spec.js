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

describe('Ingreso de Usuario existente', () => {
  test('Se ingresa boton login', (done) => {
    jest.spyOn(index, 'ingresoUsuarioExistente').mockImplementation(() => ({
      email: 'equipo3@mail.com',
      password: '1234567',
    }));
    const DOM = document.createElement('div');
    DOM.append(login());
    const email = DOM.querySelector('#inputUserError');
    const password = DOM.querySelector('.imputpass');
    const error = DOM.querySelector('#spanErrorUserStyle');
    email.value = 'equipo3@mail.com';
    password.value = '1234567';
    const botonLogin = DOM.querySelector('.claseLogin');
    botonLogin.click();
    expect(index.ingresoUsuarioExistente).toHaveBeenCalledTimes(1);
    setTimeout(() => {
      expect(error.classList.contains('error')).toBe(false);
      done();
    }, 0);
  });
});
