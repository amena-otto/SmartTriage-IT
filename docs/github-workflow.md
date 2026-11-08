# Flujo de GitHub
Ramas: `feature/auth-usuarios`, `feature/tickets`, `feature/triaje`, `feature/panel-admin`, `feature/pruebas-docs`.
1. Clonar repositorio y seleccionar rama asignada.
2. Implementar dentro del módulo propio. No modificar `shared/`, `backend/src/db/`, `backend/src/app.ts`, `frontend/src/app/App.tsx` sin coordinación.
3. Ejecutar `npm run check` cuando proceda.
4. Commit y push a la propia rama; abrir PR hacia `main`.
5. Integrante 5 revisa, integra y ejecuta smoke test.
6. No subir `.env` ni archivos SQLite.
