# Imersão Front-End 2ª Edição [![pages-build-deployment](https://github.com/thiago-roock/Imersao-alura-frontend-spotify/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/thiago-roock/Imersao-alura-frontend-spotify/actions/workflows/pages/pages-build-deployment)

### Aula 01
> Revisão: HTML, CSS e JS na Prática.

### Aula 02
> Estilo Avançado e Posicionamento: Transformando Layouts.

### Aula 03
> Layout Flexbox, Pseudo-classes e Responsividade em CSS.

### Aula 04
> CSS Grid, Media Queries e Manipulação do DOM com JavaScript.

## Tecnologias utilizadas🚀 

| Nome   | Descrição                  |
| ---------- |  --------------------- |
| HTML5 | Frontend   |
| CSS3   |  Estilos   |
| Javascript | Backend   |
| Jquery | Backend   |
| Json-server | Simulador de api   |


## 🛠 Instalação Json-Server
> Realize a instalação abaixo e, faça as configurações necessárias para que suba a api `Artists.json` na porta padrão `https://localhost:3000`.

| Nome   | Descrição                    | Obrigátorio               |
| ---------- | ------------------------------ | --------------------- |
| 🌎[Node.js](https://nodejs.org/en/download)       |     Requisito necessário para o json-server ser executado            | ✅  |
| 🌎[Json-Server](https://www.npmjs.com/package/json-server)       |     Requisito necessário para a api ser executada localmente           | ✅  |


### 💻 Como configurar
> Após instalar o `Node.js` na sua máquina, para realizar a instalação do `Json-Server`, acesse seu Prompt de Comando e digite o comando abaixo:

```
npm i json-server -g
```

### 💻 Como usar
Após a instalação, para subir sua api, você pode executar o comando conforme o exemplo abaixo:

```
json-server --watch api-artists/artists.json --port 3000
```

* Caminho do arquivo json: --watch
* Porta onde irá subir: --port

#### 🌎 Visualizar API
Após subir a `API`, você pode visualiza-la no navegador localmente, no endereço:
🌎[http://localhost:3000/artists](http://localhost:3000/artists) 
