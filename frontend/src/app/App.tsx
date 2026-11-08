import { useEffect, useState } from 'react';
import { ShieldCheck, Ticket, BrainCircuit, ChartColumn, Database, ClipboardCheck } from 'lucide-react';
type Health = {status:string;application:string;version:string;database:string};
const features = [
 {name:'Autenticación y usuarios',owner:'Integrante 1',icon:ShieldCheck,status:'Pendiente — AUTH'},
 {name:'Tickets e historial',owner:'Integrante 2',icon:Ticket,status:'Pendiente — TICK'},
 {name:'Triaje Nivel 1',owner:'Integrante 3',icon:BrainCircuit,status:'Pendiente — TRI'},
 {name:'Administración y métricas',owner:'Integrante 4',icon:ChartColumn,status:'Pendiente — ADM'},
 {name:'Pruebas e integración',owner:'Integrante 5',icon:ClipboardCheck,status:'En preparación — QA'},
];
export function App(){
 const [health,setHealth]=useState<Health|null>(null);
 const [error,setError]=useState('');
 useEffect(()=>{fetch('/api/health').then(async r=>{if(!r.ok)throw new Error('API no disponible');return r.json()}).then(setHealth).catch(()=>setError('No se puede conectar con Express en el puerto 3000.'));},[]);
 return <div className="container-fluid"><div className="row"><aside className="col-lg-3 col-xl-2 sidebar p-4"><div className="d-flex align-items-center gap-2 mb-4"><ShieldCheck size={29}/><span className="brand fs-4">SmartTriage IT</span></div><p className="text-white-50 small">Mesa de ayuda · Gestión del Servicio TI</p><hr className="border-secondary"/><p className="small text-white-50">Prototipo académico · v0.1.0</p><p className="small">React · Express · SQLite</p></aside><main className="col-lg-9 col-xl-10 p-4 p-lg-5"><h1 className="brand h2">Entorno de desarrollo preparado</h1><p className="muted mb-4">Panel de arranque. Cada módulo será completado por su integrante mediante Pull Requests.</p><div className="feature-card mb-4"><div className="d-flex gap-3 align-items-center"><Database color="#2563eb"/><div><h2 className="h6 mb-1">Estado de la API y base de datos</h2>{health?<p className="mb-0"><span className="status-dot"/>API conectada · {health.database} · {health.version}</p>:<p className="text-danger mb-0">{error||'Comprobando conexión...'}</p>}</div></div></div><div className="row g-3">{features.map(f=><div className="col-md-6 col-xl-4" key={f.name}><div className="feature-card h-100"><f.icon color="#2563eb" size={26}/><h3 className="h6 mt-3">{f.name}</h3><p className="small muted mb-2">{f.owner}</p><span className="badge text-bg-light border">{f.status}</span></div></div>)}</div><div className="alert alert-info mt-4 small">Este es el esqueleto inicial, no el MVP de tickets. La primera versión funcional debe integrarse antes del jueves 12 de noviembre.</div></main></div></div>;
}
