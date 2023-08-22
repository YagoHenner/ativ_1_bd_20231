import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { Usuario } from '../types';
// import { hashSync, compareSync } from 'bcrypt';

const usuarios: Usuario[] = [
  {
    id: 0,
    nome: 'Master',
    cpf: 1,
    data_nascimento: '2001-01-01',
  },
];

const createUser = (req: Request, res: Response) => {
  const { nome, cpf, data_nascimento } = req.body;

  const id = Number(uuid());

  const usuarioExistente = usuarios.find(usuario => usuario.cpf === cpf);

  if (usuarioExistente) {
    return res
      .status(400)
      .json({ message: `Já existe um usuário com o CPF ${cpf}` });
  }

  const usuario: Usuario = {
    id,
    nome,
    cpf,
    data_nascimento,
  };

  usuarios.push(usuario);

  return res.status(201).json(usuario);
};

export const getUser = (req: Request, res: Response) => {
  const { cpf } = req.body;

  const usuario = usuarios.find(usuario => usuario.cpf == cpf);

  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.status(200).json(usuario);
};

export const UsuariosController = {
  createUser,
  getUser,
};
