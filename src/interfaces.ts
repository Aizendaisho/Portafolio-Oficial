export interface ChildrenProps {
  children: React.ReactNode;
}
export interface statePosition {
  x: number;
  y: number;
}
export interface TitleProps {
  title: string;
  animation: any;
  isHover: boolean;
}
export interface TitleLink {
  title: string;
}
export interface MobilLinks {
  title: string;
  href: string;
  onClick: () => void;
}
export interface ServiciosProps {
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface ProyectosProps {
  nombre: string;
  descripcion: string;
  icono: string;
  url: string;
  github: string;
  imagen: string;

}