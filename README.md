# Photo Opp - Frontend

Este é o **Frontend** da aplicação **Photo Opp**, desenvolvido como parte de um desafio técnico.

O sistema permite que o usuário:

✅ Capture uma foto usando a webcam  
✅ Visualize uma prévia antes de confirmar  
✅ Faça o download da foto  
✅ Veja uma tela de agradecimento após o processo  

---

## Tecnologias Utilizadas

- **React** (com **Vite**)
- **TypeScript**
- **Styled Components**
- **Hooks React**: principalmente **useState** e **useEffect**
- **Fetch API** (para envio da foto ao backend)
- **HTML5 Media API** (para acesso à webcam)

---

## Estrutura de Pastas

```
src/
├── components/
│   ├── Button/
│   ├── CameraCapture/
│   └── Spinner/
│
├── pages/
│   ├── InitialScreen/
│   ├── CountdownScreen/
│   ├── CaptureScreen/
│   ├── ReviewScreen/
│   ├── ConfirmDownloadScreen/
│   ├── DownloadScreen/
│   ├── FinalScreen/
│   ├── ThankYouScreen/
│   ├── LoadingScreen/
│   └── CameraTest/
│
└── styles/
    └── GlobalStyles.ts
```

---

##  Funcionalidades principais

-  **Captura de foto com webcam**
-  **Contagem regressiva antes da foto**
-  **Preview da foto antes de salvar**
-  **Envio da imagem para o backend via Fetch API**
-  **Download da imagem**
-  **Tela final de agradecimento**
-  **Navegação entre as telas controlada 100% com `useState` (sem uso de React Router)**

---

##  Integração com o Backend

Este frontend se comunica com o backend Java Spring Boot que também desenvolvi.

Repositório do backend:  
[https://github.com/FerRufato/Desafio-Photo-opp](https://github.com/FerRufato/Desafio-Photo-opp)

> O backend está rodando na porta **8080**  
> Endpoint de envio da foto:  

```
POST http://localhost:8080/photos
```

---

##  Observação importante sobre o layout

> **Importante:**  
> Por opção técnica, **não segui exatamente o layout proposto no Figma**.  
> Priorizei o desenvolvimento da lógica, o funcionamento completo das funcionalidades, a integração com a API e a entrega dentro do prazo.  

O foco foi:  
✅ Organização de código  
✅ Estruturação das telas  
✅ Funcionalidade fim a fim  

---

##  Como rodar localmente

1. Clone o projeto:

```bash
git clone https://github.com/SEU_USUARIO/REPOSITORIO_FRONTEND.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3003
```

> *(Você usou a porta 3003 durante o desenvolvimento.)*

---

##  Status do Projeto

✔️ Backend: Deploy feito no GitHub  
✔️ Frontend: Finalizado e funcionando localmente  
✔️ Integração com backend: Testada via Fetch API  
✔️ Fluxo completo: Do início ao fim, com captura, review, download e agradecimento  
