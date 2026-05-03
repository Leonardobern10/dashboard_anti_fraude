# Dashboard Anti-Fraude

Este é um dashboard desenvolvido em React com TypeScript e Vite para monitoramento e gestão de pedidos com foco em detecção de fraudes.

## Descrição

O Dashboard Anti-Fraude permite aos usuários visualizar estatísticas de pedidos, gerenciar ordens, analisar riscos e acessar detalhes de pedidos individuais. Inclui funcionalidades de autenticação e navegação protegida.

## Funcionalidades

- **Autenticação**: Login seguro para acesso ao dashboard.
- **Dashboard Principal**: Visualização de estatísticas e métricas de pedidos.
- **Tabela de Pedidos**: Lista de pedidos com filtros e status.
- **Detalhes do Pedido**: Visualização detalhada de um pedido específico, incluindo histórico e métodos de pagamento.
- **Componentes Reutilizáveis**: Cards, tabelas e badges para exibição de dados.
- **Tema Personalizado**: Suporte a temas claros e escuros.

## Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **UI/UX**: Material-UI (@mui/material), Emotion (para estilização)
- **Estado**: Zustand (gerenciamento de estado)
- **Roteamento**: React Router DOM
- **HTTP Client**: Axios
- **Animações**: Motion
- **Formulários**: React Hook Form
- **Linting**: ESLint com TypeScript
- **Build Tool**: Vite

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Leonardobern10/dashboard_anti_fraude
   cd dashboard_anti_fraude
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (se necessário, como URLs de API).

## Como Usar

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Abra o navegador em `http://localhost:5173` (porta padrão do Vite).

3. Faça login e navegue pelo dashboard.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com hot reload.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linter para verificar código.
- `npm run preview`: Visualiza a build de produção localmente.

## Estrutura do Projeto

```
src/
├── api/          # Chamadas para APIs (auth, orders)
├── assets/       # Estilos e imagens
├── components/   # Componentes reutilizáveis (Header, NavBar, Cards, etc.)
├── data/         # Dados mock ou constantes
├── hooks/        # Hooks customizados (useLogin, useOrders)
├── pages/        # Páginas principais (Dashboard, Login, OrderDetails)
├── routes/       # Rotas protegidas
├── services/     # Serviços de negócio
├── store/        # Estado global (authStore)
├── theme/        # Configuração de tema
├── types/        # Definições de tipos TypeScript
├── ui/           # Componentes de UI
└── utils/        # Utilitários
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é privado e não possui licença pública.
