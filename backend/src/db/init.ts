import fs from 'node:fs';
import path from 'node:path';
import { db, DATABASE_PATH } from './connection';
const candidates = [path.resolve(__dirname, 'schema.sql'), path.resolve(__dirname, '../db/schema.sql'), path.resolve(__dirname, '../../src/db/schema.sql')];
const schema = candidates.find(fs.existsSync);
if (!schema) throw new Error('No se encontró schema.sql');
db.exec(fs.readFileSync(schema,'utf8'));
console.log(`SQLite inicializado: ${DATABASE_PATH}`);
