import { IMenuItem } from '@models/menu.model';

export const menuItems: IMenuItem[] = [
  {
    path: '/',
    label: 'Buscar Personaje (OWN)',
  },
  {
    path: '/characters',
    label: 'Listado de Personajes (MF)',
  },
  {
    path: '/something',
    label: 'Componente seguro por token',
  },
  {
    path: '/something-no-secure',
    label: 'Componente seguro por token (NO SE ENVIA UN TOKEN VALIDO)',
  },
  {
    path: '/remote',
    label: 'Formulario Basico (MF)',
  },
];
