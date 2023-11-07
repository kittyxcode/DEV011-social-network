// importamos la funcion que vamos a testear
import {
  crearUsuarioConCorreoYContrasena,
  ingresoUsuarioExistente,
  correoValidacion,
  iniciarConGoogle,
  deleteComment,
  editarComment,
  darLike,
  quitarLike,
  verificarLikes,
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

describe('Eliminar un post', () => {
  it('debería ser una función', () => {
    expect(typeof deleteComment).toBe('function');
  });
});

describe('Editar comentario', () => {
  it('debería ser una función', () => {
    expect(typeof editarComment).toBe('function');
  });
});

describe('Dar like', () => {
  it('debería ser una función', () => {
    expect(typeof darLike).toBe('function');
  });
});

describe('Quitar like', () => {
  it('debería ser una función', () => {
    expect(typeof quitarLike).toBe('function');
  });
});

describe('Verificar likes', () => {
  it('debería ser una función', () => {
    expect(typeof verificarLikes).toBe('function');
  });
});
