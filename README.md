# Comandos 

- npm init // cria o package.json para iniciar um projeto node

- npm i nome_pacote // instala um pacote específico

- npm install ou npm i // instala todos os pacotes do package.json


# BACK-END    05/08

//

- Framework: framework é uma estrutura que fornece um conjunto de ferramentas, código reutilizável e diretrizes para simplificar e acelerar o processo de criação de aplicações.


- Cache: É uma área de memória de alta velocidade onde dados frequentemente acessados são armazenados para acesso rápido, como em navegadores web, sistemas operacionais e bancos de dados. Acelera o acesso a informações.


- Emuladores: é um software ou hardware que permite que um sistema se comporte como outro, executando programas e utilizando dispositivos projetados para o sistema emulado.


- npm: Node Package Manager, ou seja, Gerenciador de Pacotes do Node.O NPM funciona como um repositório online onde desenvolvedores podem encontrar e baixar pacotes, além de uma interface de linha de comando (CLI) para interagir com esse repositório. 

- npx: O comando npx significa Node Package eXecute. Portanto, o npx é uma ferramenta muito útil para quem trabalha com Node.js, simplificando a execução de pacotes e evitando instalações desnecessárias. 

- rodar um script : npm run "nome do scrip"

- node.js: é o ambiente ou "run time" que executa o javascript no nosso terminal, maquina local ou servidor. que pode ser instalado em todos os sistemas operacionais.(um ambiente que roda os pacotes)

- métodos de rotas: get= obter um dado e trazer uma informação, post= criar um dado para o banco, put= atualizar os dados, pacht= atualizar dados parciais(específicos), delete= deletar dados do banco.

- protocolo http: cuida das requisições e respostas da web, especificando as regras do protocolo.

- express: uma dos framework do node.js que constrói a API backend

- mudança de formato de importação de require para import: no package.json adicionar o tipo = "Type" : "module"

--watch(parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

sintaxe básica de uma rota de API 
 
 app.post('/produtos', (req, res) => {
  res.json({
    menssage: ' criado com sucesso!'})
  })

  - método criar/inserir: post
  -rota ou endereço: /produto
  -tipo de resposta: json


  PADRÃO DE PROJETO:

 - uma forma de realizar a codificação de maneira conhecida no meio dos desenvolvedores, seu benefício é o amplo conhecimento e eficiência no desenvolvimento.

 SIGLA MVC:

 - Model: Acesso do banco de dados, add, delete com operações do banco, definindo as regras do projeto como validção de dados.

 - View: Uma camada de visualização a interface do user, função do front-end.

 - Controller: controla e entrada de dados que estão chegando do user, processamento rever se esta convertido ver a necessidade desses dados que chegam se eles seram deletados cadastrados, e saída de dados. 



 - depndencias dev fazem partes e são feramentas do desenvolvimento do projeto(ajuda) / ja as dependencias fazem parte do projeto interno



 ## COMANDOS DO PRISMA

 - INSTALAÇÃO DO PRISMA
  - npm i prisma - D
  - npm i @prisma/client

  - INICIALIZAR O PRISMA
  - npx prisma init

  -GERAR O MODEL DO PRISMA A PARTIR DE UM BD EXISTENTE
  -npx prisma db pull

  - GERAR O BD A PARTIR DE UM MODEL DO PRISMA
  -npx prisma db push

  - GERAR OS ARQUIVOS NECESSÁRIOS PARA USAR O PRISMA CLIENT NO CÓDIGO
  -npx prisma generate