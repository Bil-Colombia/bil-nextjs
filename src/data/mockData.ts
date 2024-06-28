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
    id_fact: 1,
    fecha_expedicion: "2023-01-15",
    for_pago: 1,
    nom_sucu: "Sucursal Centro",
    nomb_comp: "Compañía A",
    valor: 30000
  },
  {
    id_fact: 2,
    fecha_expedicion: "2023-02-20",
    for_pago: 2,
    nom_sucu: "Sucursal Norte",
    nomb_comp: "Compañía B",
    valor: 45000
  },
  {
    id_fact: 3,
    fecha_expedicion: "2023-03-10",
    for_pago: 1,
    nom_sucu: "Sucursal Sur",
    nomb_comp: "Compañía C",
    valor: 50000
  },
  {
    id_fact: 4,
    fecha_expedicion: "2023-04-05",
    for_pago: 3,
    nom_sucu: "Sucursal Este",
    nomb_comp: "Compañía D",
    valor: 32000
  },
  {
    id_fact: 5,
    fecha_expedicion: "2023-05-18",
    for_pago: 1,
    nom_sucu: "Sucursal Oeste",
    nomb_comp: "Compañía E",
    valor: 28000
  },
  {
    id_fact: 6,
    fecha_expedicion: "2023-06-25",
    for_pago: 2,
    nom_sucu: "Sucursal Centro",
    nomb_comp: "Compañía F",
    valor: 35000
  },
  {
    id_fact: 7,
    fecha_expedicion: "2023-07-30",
    for_pago: 1,
    nom_sucu: "Sucursal Norte",
    nomb_comp: "Compañía G",
    valor: 40000
  },
  {
    id_fact: 8,
    fecha_expedicion: "2023-08-15",
    for_pago: 3,
    nom_sucu: "Sucursal Sur",
    nomb_comp: "Compañía H",
    valor: 42000
  },
  {
    id_fact: 9,
    fecha_expedicion: "2023-09-10",
    for_pago: 1,
    nom_sucu: "Sucursal Este",
    nomb_comp: "Compañía I",
    valor: 47000
  },
  {
    id_fact: 10,
    fecha_expedicion: "2023-10-05",
    for_pago: 2,
    nom_sucu: "Sucursal Oeste",
    nomb_comp: "Compañía J",
    valor: 36000
  },
  {
    id_fact: 11,
    fecha_expedicion: "2023-11-20",
    for_pago: 1,
    nom_sucu: "Sucursal Centro",
    nomb_comp: "Compañía K",
    valor: 39000
  },
  {
    id_fact: 12,
    fecha_expedicion: "2023-12-15",
    for_pago: 3,
    nom_sucu: "Sucursal Norte",
    nomb_comp: "Compañía L",
    valor: 44000
  },
  {
    id_fact: 13,
    fecha_expedicion: "2024-01-10",
    for_pago: 1,
    nom_sucu: "Sucursal Sur",
    nomb_comp: "Compañía M",
    valor: 31000
  },
  {
    id_fact: 14,
    fecha_expedicion: "2024-02-25",
    for_pago: 2,
    nom_sucu: "Sucursal Este",
    nomb_comp: "Compañía N",
    valor: 48000
  },
  {
    id_fact: 15,
    fecha_expedicion: "2024-03-30",
    for_pago: 1,
    nom_sucu: "Sucursal Oeste",
    nomb_comp: "Compañía O",
    valor: 35000
  }
];

