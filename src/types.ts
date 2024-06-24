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
  email: string,
  password: string
}