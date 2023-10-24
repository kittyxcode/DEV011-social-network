// importamos la funcion que vamos a testear
import { crearUsuarioConCorreoYContrasena } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof crearUsuarioConCorreoYContrasena).toBe('function');
  });
});
