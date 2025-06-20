#  Desafio Photo Opp - Frontend

Este é o projeto **Frontend** do desafio **Photo Opp**, feito com **React + TypeScript**.

O objetivo foi criar uma aplicação web capaz de capturar fotos via webcam, permitir a visualização, o download e o compartilhamento via QR Code.

###  Link do Deploy

 [https://desafio-photo-opp-frontend.vercel.app/](https://desafio-photo-opp-frontend.vercel.app/)

##  Sobre o projeto

A aplicação **não seguiu fielmente o layout do Figma**.  
O foco principal foi a **implementação de funcionalidades e lógica de desenvolvimento**.

Fluxo da aplicação:

1. Tela inicial com botão "Começar"
2. Contagem regressiva antes da captura
3. Captura da foto via webcam
4. Tela de revisão com opção de refazer ou confirmar
5. Tela de download com QR Code para acesso à foto
6. Tela final com mensagem de agradecimento

##  Tecnologias utilizadas

- **React com TypeScript**
- **Styled Components** → Estilização dos componentes
- **React Webcam** → Captura de fotos da webcam
- **qrcode.react** → Geração de QR Code
- **Fetch API** → Comunicação com o backend 
- **useState / useEffect** → Controle de estado e ciclo de vida dos componentes
- **Spring Boot (Backend - API REST)** → [Repositório Backend](https://github.com/FerRufato/Desafio-Photo-opp)

##  Como rodar o projeto localmente

### Pré-requisitos:
- Node.js instalado
- Backend rodando (Spring Boot)

### Passos:

```bash
# Clone o repositório
git clone https://github.com/FerRufato/Desafio-Photo-opp-frontend.git

# Acesse a pasta do projeto
cd Desafio-Photo-opp-frontend

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

> A aplicação vai rodar localmente em:  
http://localhost:3000  
(Ou na porta configurada no seu projeto)

##  Integração com o Backend

O frontend se comunica com a API backend Spring Boot hospedada no GitHub:  
 [https://github.com/FerRufato/Desafio-Photo-opp](https://github.com/FerRufato/Desafio-Photo-opp)

Para funcionar corretamente, o backend precisa estar rodando localmente ou em um servidor acessível.

##  Funcionalidades implementadas

✅ Captura de foto pela webcam  
✅ Contagem regressiva antes da foto  
✅ Revisão e confirmação da foto  
✅ Download da imagem  
✅ Geração de QR Code com link de download  
✅ Tela de agradecimento final  
✅ Deploy na **Vercel**
