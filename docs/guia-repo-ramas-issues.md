# Crear repositorio y ramas en GitHub

1. En https://github.com/new crea el repositorio privado `SmartTriage-IT`, **vacío** (sin README, .gitignore o licencia).
2. Descomprime el paquete y abre una terminal PowerShell dentro de `smarttriage-it`.
3. Instala Node.js 24 LTS. Ejecuta `npm install`, `npm run db:init`, `npm run db:seed`, `npm run dev`. Abre `http://localhost:5173`.
4. Ejecuta lo siguiente reemplazando TU_USUARIO:

```powershell
git init -b main
git add .
git commit -m "chore: inicializar SmartTriage IT"
git remote add origin https://github.com/TU_USUARIO/SmartTriage-IT.git
git push -u origin main
```

5. Crear ramas desde el mismo commit base:

```powershell
git switch main
git branch feature/auth-usuarios
git branch feature/tickets
git branch feature/triaje
git branch feature/panel-admin
git branch feature/pruebas-docs
git push origin feature/auth-usuarios feature/tickets feature/triaje feature/panel-admin feature/pruebas-docs
```

6. Crea los 25 issues desde los archivos `issues/*.md` en la pestaña Issues de GitHub; añade assignees cuando sepas los usuarios GitHub de tus compañeros.
7. Crea dos milestones: `Entrega 1 — 12/11/2026` y `Entrega final — 20/11/2026`.
8. Invita colaboradores desde Settings > Collaborators. Protege main con reglas de Pull Request si está disponible en tu cuenta/plan.

**Nota:** no subir nunca archivos `.db`, `.env` o contraseñas reales; los usuarios de seed son exclusivamente para pruebas locales.
