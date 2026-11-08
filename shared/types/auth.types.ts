import type { Rol } from './triaje.types';
export interface UsuarioPublico { id:number; nombre:string; usuario:string; rol:Rol; activo:boolean; grupo_id:number|null; }
