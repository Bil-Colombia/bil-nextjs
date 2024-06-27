import { LucideIcon } from "lucide-react";

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
}

export interface Suscripcion {
  activo: boolean;
  nombre: string;
  precio: number;
  duracion: string;
  descripcion: string;
  auditoria_hora: string;
  id_suscripcion: number;
}

export interface EmpresaResponse {
  id_empresa: number;
  razon_social: string;
  nom_comercial: string;
  imagen: any;
  nit: string;
  dig_ver: number;
  rut: any;
  auditoria_hora_creacion: string;
  auditoria_objeto_creacion: number;
  auditoria_origen_creacion: string;
  auditoria_hora: string;
  auditoria_estado: string;
  pais: number;
}

export interface Usuario {
  id_fact: number;
  fecha_expedicion: string;
  for_pago: number;
  nom_sucu: string;
  valor: number;
  nomb_comp: string;
}

export interface Cliente {
  celular: number;
  fec_nac: string;
  id_user: number;
  cor_elec: string;
  direccion: string;
  nomb_comp: string;
  nombre_genero: string;
}

export interface Empresa {
  visitas: number;
  gasto_total: number;
  gasto_maximo: number;
  gasto_minimo: number;
  cliente_desde: string;
  ultima_visita: string;
  gasto_promedio: number;
}

export interface Producto {
  fact_id: number;
  user_id: number;
  nom_prod: string;
  nomb_comp: string;
  id_det_fact: number;
}

export interface Sucursal {
  nombre: string;
  id_trac: number;
  user_id: number;
  direccion: string;
  sucursal_id: number;
}

export interface Data {
  cliente: Cliente[];
  empresa: Empresa[];
  producto: Producto[];
  sucursal: Sucursal[];
}
