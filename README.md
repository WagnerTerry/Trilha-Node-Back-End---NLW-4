NLW#4 TRILHA NODE - BACK-END
Dependências e infos

yarn init -y - Cria o package.json com as informações que já tem

yarn add express
yarn add @types/express -D - apenas para o ambiente de desenvolvimento -D
yarn add typescript -D
yarn add ts-node-dev -D - converte o js em tempo de execução
yarn add typeorm reflect-metadata - gerenciar banco de dados (mysql, postgresql etc)
yarn add sqlite3
yarn add uuid
yarn add @types/uuid -D

yarn tsc --init
gerar o arquivo tsconfig.json e dentro dele{
strict: false
descomentar:
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"strictPropertyInitialization": false,
}

dentro de package.json inserir {
"scripts": {
"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
},
} com isso o projeto roda com yarn dev

depois de instalar o typeorm colocar em package.json
"scripts": {
"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
"typeorm": "ts-node-dev node_modules/typeorm/cli.js"
},

yarn typeorm migration:create -n CreateUsers - migration para criar as tabelas
yarn typeorm migration:run - para rodar o migration
