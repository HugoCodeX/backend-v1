## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## 🌐 Endpoints Disponibles

### 🔐 Autenticación (`/auth`)
* `POST /auth/register` - Registrar un nuevo usuario.
* `GET /auth/verify-email?token=...` - Verificar cuenta a través del correo (con auto-login).
* `POST /auth/login` - Iniciar sesión (Devuelve tokens).
* `POST /auth/refresh` - Refrescar el token de acceso (Usando la cookie de `refresh_token`).
* `POST /auth/logout` - Cerrar sesión e invalidar tokens. *(Requiere autenticación)*
* `GET /auth/me` - Obtener información del usuario actualmente autenticado. *(Requiere autenticación)*
* `POST /auth/forgot-password` - Solicitar el envío de un correo para recuperar la contraseña.
* `POST /auth/reset-password` - Restablecer la contraseña usando el token enviado por correo.

### 📋 Tareas (`/tasks`) - *(Todos requieren autenticación)*
* `GET /tasks` - Obtener la lista de tareas del usuario actual.
* `POST /tasks` - Crear una nueva tarea.
* `PATCH /tasks/:id` - Actualizar información de una tarea específica.
* `DELETE /tasks/:id` - Eliminar una tarea.

### 👑 Administración (`/admin`) - *(Requieren autenticación y ser rol `admin`)*
* `GET /admin/users` - Listar todos los usuarios.
* `DELETE /admin/users/:id` - Eliminar a un usuario por completo.

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.




