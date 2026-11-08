# Arquitectura SmartTriage IT
- Frontend: React + TypeScript + Vite + Bootstrap.
- Backend: Node.js + Express 5 + TypeScript.
- Almacenamiento: SQLite (`data/smarttriage.db`) con foreign_keys, WAL y busy_timeout.
- Cada integrante trabaja en rama funcional; Integrante 5 integra a `main`.
- La base `.db` **no se versiona**: se recrea con `npm run db:init` y `npm run db:seed`.
- Para la demo compartida, sólo Express accede al SQLite de la computadora anfitriona.
- Los roles son agente, tecnico y administrador; estos no son solicitantes de otro sistema institucional.
