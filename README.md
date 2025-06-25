# 🚀 Gerenciador de Projetos · Teste Técnico V4Company

Aplicação Nuxt 3 (SSR/SPA) com Pinia para gerenciamento de projetos. Permite **listar, filtrar, criar, editar, excluir e visualizar** projetos com persistência em uma Fake API (`json-server`). Tudo isso com validação, middleware, responsividade e identidade visual inspirada na V4 Company.

---

## ⚙️ Tecnologias Utilizadas

- **[Nuxt 3](https://nuxt.com/)** – SSR e SPA com Vue 3  
- **[Pinia](https://pinia.vuejs.org/)** – State Management escalável  
- **[vee-validate](https://vee-validate.logaretm.com/) + [Yup](https://github.com/jquense/yup)** – Formulários com validações amigáveis  
- **[json-server](https://github.com/typicode/json-server)** – Fake REST API  
- **[Vitest](https://vitest.dev/)** + [Testing Library](https://testing-library.com/) – Testes automatizados  
- **[TailwindCSS](https://tailwindcss.com/)** – Estilização com identidade visual da V4  
- **TypeScript**, **ESLint**, **Prettier**

---

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Wev-at2/gerenciador-projetos.git
cd gerenciador-projetos
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a Fake API

```bash
npm run api
```

> Inicia o json-server em `http://localhost:3001` com base no arquivo `db.json`.

### 4. Inicie o Nuxt

```bash
npm run dev
```

> Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

---

## 🧱 Estrutura de Pastas

```bash
.
├── composables/            # Schemas e validações com Yup
├── middleware/             # Middleware de autenticação
├── pages/
│   ├── login.vue
│   └── projetos/
│       ├── index.vue       # Listagem
│       ├── create.vue      # Criação
│       ├── [id]/index.vue  # Detalhes
│       └── [id]/edit.vue   # Edição
├── stores/                 # Estado global com Pinia
│   └── projetos.ts
├── assets/css/             # Estilização Tailwind customizada
├── tests/                  # Testes com Vitest
│   └── projetosForm.spec.ts
├── db.json                 # Fake API
└── vitest.config.ts        # Configuração de testes
```

---

## 🧪 Testes Automatizados

```bash
npm run test
```

Cobertura básica de:

* Validação de formulário
* Submissão e persistência
* Teste isolado de store (Pinia)

---

## 🔐 Autenticação Fake

* Middleware customizado (`definePageMeta`) protege rotas como `/projetos/create` e `/projetos/[id]/edit`.
* Login armazena token dummy no `localStorage`.
* Logout apenas limpa o token e redireciona.

---

## 🎨 Estilização

* **TailwindCSS v4**
* Tema escuro com cores personalizadas da V4 Company
* Tipografia com **Montserrat** e **Bebas Neue**
* Responsivo, com foco em **acessibilidade** e UX agradável

---

## 📌 Decisões Técnicas

| Item                 | Detalhe                                             |
| -------------------- | --------------------------------------------------- |
| Autenticação         | Middleware + token dummy em localStorage            |
| Formulários          | `vee-validate` com schema via `Yup`                 |
| Estado Global        | `Pinia` com actions assíncronas, filtros, paginação |
| SSR Habilitado       | Mantido conforme briefing                           |
| Roteamento Protegido | `definePageMeta` com `middleware: 'auth'`           |
| Validação Visual     | Estilização personalizada com feedback amigável     |
| Boas Práticas        | ESLint + Prettier + Tipagem completa com TypeScript |

---

## ✅ Checklist do Briefing

* [x] CRUD completo (listar, criar, editar, excluir, visualizar)
* [x] Filtros + paginação
* [x] Middleware de autenticação
* [x] json-server com `db.json` versionado
* [x] SSR habilitado
* [x] State com Pinia
* [x] Formulários validados com vee-validate/yup
* [x] Estilização consistente com identidade visual
* [x] Testes automatizados (formulário/store)
* [x] Tipagem com TypeScript
* [x] Estrutura modular, organizada e escalável

---

## 👨‍💻 Autor

**Weverton Costa**
Desenvolvedor Frontend · UI Designer

[🔗 LinkedIn](https://linkedin.com/in/weverton-costa)
[🌐 Portfólio](https://weverton.dev.br)

---

> 💡 *Esse projeto é um exemplo de entrega técnica sólida, elegante e pragmática com foco em clareza, estrutura e propósito.*
