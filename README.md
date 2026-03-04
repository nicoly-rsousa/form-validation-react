# 📋 Formulário com React Hook Form + Zod

Formulário de cadastro com validação de dados pessoais e endereço, desenvolvido como exercício prático.

## 🚀 Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/) — gerenciamento do formulário
- [Zod](https://zod.dev/) — validação de schema
- [React Router DOM](https://reactrouter.com/) — navegação entre páginas
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Vite](https://vitejs.dev/) — bundler

## 📁 Estrutura

```
src/
├── pages/
│   ├── Formulario/
│   │   └── App.tsx       # Formulário principal
│   └── Sucesso/
│       └── sucesso.tsx   # Página de confirmação
├── Schema/
│   └── schema.ts         # Validações com Zod
└── main.tsx              # Rotas da aplicação
```

## 📝 Campos do formulário

| Campo | Validação |
|---|---|
| CPF | Exatamente 11 dígitos |
| Nome Completo | Obrigatório |
| CEP | Obrigatório |
| Rua | Obrigatório |
| Número | Obrigatório |
| Complemento | Opcional |
| Bairro | Obrigatório |
| Cidade | Obrigatório |
| Estado | Obrigatório |

## ⚙️ Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`
