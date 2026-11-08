export type Impacto = 'Alto' | 'Medio' | 'Bajo';
export type Urgencia = 'Alta' | 'Media' | 'Baja';
export type Prioridad = 'Crítica' | 'Alta' | 'Media' | 'Baja';
export type EstadoTicket = 'Nuevo'|'Asignado'|'En proceso'|'Resuelto'|'Cerrado';
export type Rol = 'agente'|'tecnico'|'administrador';
export interface DatosTicket { solicitante:string; titulo:string; descripcion:string; impacto:Impacto; urgencia:Urgencia; }
export interface SugerenciaTriaje { categoria_id:number; categoria:string; palabra_activadora:string|null; es_otros:boolean; prioridad:Prioridad; grupo_id:number|null; tecnico_id:number|null; }
export interface DecisionTriaje { categoria_final_id:number; prioridad_final:Prioridad; grupo_final_id:number|null; tecnico_id:number|null; }
