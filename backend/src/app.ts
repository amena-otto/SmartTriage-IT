import express from 'express';
import cors from 'cors';
import { db } from './db/connection';
export const app=express();
app.disable('x-powered-by');
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json({limit:'20kb'}));
app.get('/api/health', (_req,res)=>{
 try {db.prepare('SELECT COUNT(*) AS total FROM categorias').get();res.json({status:'ok',application:'SmartTriage IT',version:'0.1.0',database:'SQLite conectada'});}
 catch {res.status(503).json({status:'error',message:'Inicializa la base de datos con npm run db:init y npm run db:seed'});}
});
// QA-01: montar aquí las rutas de auth, tickets, triaje y admin cuando lleguen los PR.
