import { Suscripcion, Usuario } from '../types';

export const suscripciones: Suscripcion[] = [
  {
    activo: true,
    nombre: 'Plan Básico',
    precio: 10,
    duracion: '1 mes',
    descripcion: 'Acceso limitado',
    auditoria_hora: '2023-06-21T10:00:00Z',
    id_suscripcion: 1,
  },
  {
    activo: true,
    nombre: 'Plan Premium',
    precio: 30,
    duracion: '1 mes',
    descripcion: 'Acceso ilimitado',
    auditoria_hora: '2023-06-21T10:00:00Z',
    id_suscripcion: 2,
  },
];

export const usuarios: Usuario[] = [
  {
    email: 'user@example.com',
    password: 'password123',
  },
  {
    email: 'jose@example.com',
    password: 'josepassword',
  },
];
