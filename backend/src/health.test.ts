import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from './app';
describe('API Health',()=>{it('responde con estado',async()=>{const r=await request(app).get('/api/health'); expect([200,503]).toContain(r.status);});});
