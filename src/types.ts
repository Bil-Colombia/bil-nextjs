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