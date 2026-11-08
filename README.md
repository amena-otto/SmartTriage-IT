# SmartTriage IT
Prototipo académico de mesa de ayuda y triaje de incidentes. **No es TI SmartDesk AI institucional.**

## Requisitos
Node.js 22.12+ o 24 LTS, npm, Git. Para menor fricción use Node 24 LTS.

## Iniciar en Windows / PowerShell
```powershell
npm install
npm run db:init
npm run db:seed
npm run dev
```
- Frontend: http://localhost:5173
- API health: http://localhost:3000/api/health
- Datos de demostración: `admin`, `agente`, `tecnico1`–`tecnico4` / clave temporal `Cambiar123!` (**solo desarrollo**, cambiar antes de uso real).

**Estado:** esqueleto ejecutable con base SQLite y contratos. **No incluye todavía login, tickets ni triaje funcional**: los cinco integrantes los implementarán en sus ramas. La pantalla de inicio muestra el estado de la API.

## Estructura
- `frontend/src/modules/`: auth / tickets / triaje / admin.
- `backend/src/modules/`: mismos módulos API.
- `shared/types/`, `shared/contracts/`: contratos fijados por integrador.
- `backend/src/db/`: esquema y seed reproducibles.
- `docs/`: arquitectura, GitHub y cronograma.
- `issues/`: 25 plantillas copiables para GitHub.

## Comprobación
```powershell
npm run check
```
En la primera entrega del **jueves 12/11/2026**, se debe demostrar login → registro de ticket → sugerencia explicada → guardado → listado. El repositorio base por sí solo **no constituye esa entrega**.

## Colaboración
Cada persona trabaja en su propia rama y abre un PR hacia `main`. El Integrante 5 revisa y fusiona. `data/*.db` y secretos nunca se suben.
