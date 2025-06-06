
# 🌐 My Personal Portfolio

Este é o repositório do meu portfólio pessoal, desenvolvido com foco em performance, design moderno e animações suaves.

## 🚀 Tecnologias Utilizadas

* **Next.js 14** – Framework React full-stack com renderização otimizada.
* **Tailwind CSS** – Utilitário de estilo rápido e responsivo.
* **Framer Motion** – Biblioteca de animações para React.
* **Hygraph (GraphCMS)** – CMS headless para gerenciamento de conteúdo dinâmico.

## 🎯 Funcionalidades

* Página inicial com animações e introdução.
* Seção de projetos carregados dinamicamente via API do Hygraph.
* Página “Sobre mim” com detalhes profissionais.
* Formulário de contato.
* Design responsivo com suporte a dark mode.

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
APP_URL=http://localhost:3000
HYGRAPH_API=https://api-sa-east-1.hygraph.com/v2/SEU_ENDPOINT/master
```

* `APP_URL`: URL da aplicação local ou de produção.
* `HYGRAPH_API`: Endpoint da API pública do Hygraph. Você pode encontrar esse link no seu projeto do Hygraph (Project Settings → API Access → Content API).

> ⚠️ **Importante:** Certifique-se de que os modelos de conteúdo (schemas) no Hygraph estão publicados para que os dados fiquem acessíveis via API.

## 🧑‍💻 Rodando localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/CameloDev/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Configure o `.env.local` ou `.env`  conforme acima.

4. Inicie o servidor local:

   ```bash
   pnpm run dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000)

## ☁️ Deploy com Vercel

1. Faça login em [vercel.com](https://vercel.com) e importe o repositório.

2. Nas configurações do projeto, defina as variáveis de ambiente:

   ```env
   APP_URL=https://seu-site.vercel.app
   HYGRAPH_API=https://api-sa-east-1.hygraph.com/v2/SEU_ENDPOINT/master
   ```

3. A Vercel cuidará do build e deploy automático.

## 👤 Autor

Desenvolvido por **Camelo Dev**
🔗 [LinkedIn](https://linkedin.com/in/victor-jayme)
🌐 [Site Pessoal](https://camelodev.tech)

