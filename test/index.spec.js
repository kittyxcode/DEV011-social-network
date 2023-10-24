// importamos la funcion que vamos a testear
import {
  crearUsuarioConCorreoYContrasena,
  ingresoUsuarioExistente,
  correoValidacion,
  iniciarConGoogle,
} from '../src/lib/index';

describe('crear usuario con correo y contrasena', () => {
  it('debería ser una función', () => {
    expect(typeof crearUsuarioConCorreoYContrasena).toBe('function');
  });
});

describe('ingreso usuario existente', () => {
  it('debería ser una función', () => {
    expect(typeof ingresoUsuarioExistente).toBe('function');
  });
});

describe('correo validacion', () => {
  it('debería ser una función', () => {
    expect(typeof correoValidacion).toBe('function');
  });
});

describe('iniciar con google', () => {
  it('debería ser una función', () => {
    expect(typeof iniciarConGoogle).toBe('function');
  });
});
