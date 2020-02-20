
<h1 align="center">Projeto DevRadar da Semana Omnistack 10</h1>
<h2 align="center">com algumas alterações</h2>

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
    4. Adicione a url de conecção do MongoDB no campo MONGO_URL no arquivo `.env.json` na pasta `src`
    5. Execute `yarn dev` para iniciar o servidor.
  ### Web
    1. Mova para a pasta web usando `cd web`
    2. Instale todas dependecias usando `yarn install`
    4. Adicione a url de conecção do backend no campo API_URL no arquivo `.env.json` na pasta `src`
    5. Execute `yarn start` para iniciar a aplicação web.
  ### Mobile
    1. Mova para a pasta mobile usando `cd mobile`
    2. Instale todas dependecias usando `yarn install`
    4. Adicione a url de conecção do backend no campo API_URL no arquivo `.env.json` na pasta `src`
    5. Execute `yarn start` para iniciar o expo.
