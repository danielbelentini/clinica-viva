# Clínica Viva — Site Dentística Estética

Site com 3 páginas construído com **Vite + React + Tailwind CSS + React Router**.

## Estrutura

```
src/
├── App.jsx                        # Roteamento principal
├── index.css                      # Estilos globais + Tailwind
├── main.jsx                       # Entry point
├── components/
│   ├── Navbar.jsx                 # Navegação com menu mobile
│   ├── Footer.jsx                 # Rodapé
│   ├── Depoimentos.jsx            # Carrossel de depoimentos (reutilizado)
│   ├── FAQ.jsx                    # Accordion de perguntas frequentes (reutilizado)
│   └── WhatsAppFloat.jsx          # Botão flutuante WhatsApp
└── pages/
    ├── Home.jsx                   # Página inicial
    ├── Sobre.jsx                  # Sobre a clínica e equipe
    └── Servicos.jsx               # Serviços detalhados + contato
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Personalização

- **Nome da clínica**: substituir `Clínica Viva` nos componentes
- **WhatsApp**: substituir `5511999999999` em todos os arquivos
- **Endereço e horários**: editar em `Servicos.jsx` e `Footer.jsx`
- **Cores**: editar variáveis `sage` em `tailwind.config.js`
- **Coordenadas do mapa**: editar `q=` na URL do iframe em `Servicos.jsx`
