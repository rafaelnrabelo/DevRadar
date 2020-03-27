
<h1 align="center">
  <img src="https://user-images.githubusercontent.com/55251721/77790953-7a4a5400-7044-11ea-9b09-1cd911245053.png" width=250 /> <br/>
</h1>

<h2 align="center">
  Projeto da Semana Omnistack 10 com algumas alterações<br/> <br/>
  <a href="https://github.com/rafaelnrabelo/DevRadar#testando">
    <img src="https://img.shields.io/badge/Testing-Install-%237D40E7" alt="testing"/>
  </a>
</h2>

## Modificações:
   ### Mobile:
   - Adição do Logo no Header da página Main.
   - Alteração da Splash screen e do Logo do app.
   - Submit do filtro de tecnologias com Enter.
   - Realocação de função do botão de Submit para retorno a localização atual.
   - Adição de uma página para cadastro de Devs pela aplicação.
   - Alteração da cor do Header e da StatusBar na pagina do GitHub para adequação ao estilo do site.
  
  ### Backend:
   - Adição de uma nova rota para deletar um Dev.
  
  ### Web:
   - Adição de um botão para apagar o Dev.
   
## Testando:
   1. Clone o repositorio usando `git clone https://github.com/rafaelnrabelo/DevRadar.git`
   2. Mova para a pasta clonada usando `cd DevRadar`
  ### Backend
   1. Mova para a pasta backend usando `cd backend`
   2. Instale todas dependecias usando `yarn install`
   4. Adicione a url de conexão do MongoDB no campo `MONGO_URL` no arquivo `.env.json` na pasta `src`
   5. Execute `yarn dev` para iniciar o servidor.
  ### Web
   1. Mova para a pasta web usando `cd web`
   2. Instale todas dependecias usando `yarn install`
   4. Adicione a url de conexão do backend no campo `API_URL` no arquivo `.env.json` na pasta `src`
   5. Execute `yarn start` para iniciar a aplicação web.
  ### Mobile
   1. Mova para a pasta mobile usando `cd mobile`
   2. Instale todas dependecias usando `yarn install`
   4. Adicione a url de conexão do backend no campo `API_URL` no arquivo `.env.json` na pasta `src`
   5. Execute `yarn start` para iniciar o expo.
