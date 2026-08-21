# FlowDesk — React

Landing page institucional do **FlowDesk**, construída com React 19 + Vite 8.

---

## Requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- npm **9 ou superior** (já vem com o Node)

Verifique as versões instaladas:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Extraia o arquivo ZIP e acesse a pasta

```bash
cd flowdesk-react
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.  
O servidor usa **HMR** (Hot Module Replacement) — qualquer alteração nos arquivos é refletida instantaneamente.

---

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o bundle de produção em `/dist` |
| `npm run preview` | Serve o bundle de produção localmente |
| `npm run lint` | Executa o linter Oxlint em todos os arquivos |
| `npm test` | Roda todos os testes unitários uma vez |
| `npm run test:watch` | Roda os testes em modo watch (re-executa ao salvar) |

---

## Testes unitários

Os testes são escritos com **Vitest** + **Testing Library** e rodam em ambiente **jsdom**.

### Rodar todos os testes (uma vez)

```bash
npm test
```

### Rodar em modo watch (desenvolvimento)

```bash
npm run test:watch
```

### O que é testado

| Arquivo de teste | Componente / Hook | Testes |
|---|---|---|
| `Pricing.test.jsx` | `<Pricing />` | Toggle mensal/anual, preços, badges, CTAs, aria-checked |
| `FAQ.test.jsx` | `<FAQ />` | Accordion open/close, aria-expanded, conteúdo |
| `Navbar.test.jsx` | `<Navbar />` | Menu mobile, Escape, scroll, aria-expanded |
| `Hero.test.jsx` | `<Hero />` | Headings, CTAs, métricas, FlowUI |
| `Footer.test.jsx` | `<Footer />` | Colunas, links, email de suporte, copyright |
| `HowItWorks.test.jsx` | `<HowItWorks />` | 4 passos numerados, títulos, mini-UIs |
| `CtaFinal.test.jsx` | `<CtaFinal />` | Heading, links de email, nota do piloto |
| `Metrics.test.jsx` | `<Metrics />` | Labels, descrições, valores iniciais |
| `useNavbar.test.jsx` | `useNavbar` | scrolled, mobileOpen, toggleMobile, closeMobile, Escape |
| `useReveal.test.jsx` | `useReveal` | Fallback sem IntersectionObserver, observe/disconnect |

Os arquivos de teste ficam em `src/test/`.

---

## Estrutura do projeto

```
flowdesk-react/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens e ícones
│   ├── components/          # Componentes React (JSX + CSS)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   └── ...
│   ├── hooks/               # Custom hooks
│   │   ├── useCursor.js
│   │   ├── useNavbar.js
│   │   └── useReveal.js
│   ├── test/                # Arquivos de teste
│   │   ├── setup.js
│   │   ├── Pricing.test.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Build de produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `/dist`.  
Para visualizá-los localmente antes de fazer deploy:

```bash
npm run preview
```

---

## Tecnologias

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Vitest](https://vitest.dev/) — test runner
- [Testing Library](https://testing-library.com/) — utilitários de teste
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) — linter ultrarrápido
