/**
 * @jest-environment jsdom
 */

import { login } from '../src/views/login';

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
