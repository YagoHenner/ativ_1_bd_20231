import { Router } from 'express';
import { UsuariosController } from '../controller/usuario.controller';

const router = Router();

// Rota para criar um novo usuario
router.post('/auth', UsuariosController.createUser);
router.post('/auth/getUser', UsuariosController.getUser);

// Rota para obter todos os usuarios
//router.get('/auth', UsuariosController.listUsers);

export default router;
