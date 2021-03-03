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
yarn typeorm migration:create -n CreateSurveys
yarn typeorm migration:run

yarn add jest @types/jest -D - para fazer testes
yarn jest --init {
1-running test in package.json? Yes
2-use Typescript in configuration file? Yes
3-choose the test environment: node
4-Jest coverage reports? no
5-provider instrument code for coverage? v8
6-Automatically clear mock every test? yes
}

jest {
bail: true - assegura que se ocorrer um bug ele nao passará para o outro
//testEnvironment: "node",
testMatch: ["**/__tests__/*.test.ts"] - pasta onde ira executar os testes
preset: "ts-jest",
} package.json {
"test": "NODE_ENV=test jest -i" - no Windows se nao funcionar usar "set NODE_ENV=test jest"

}

yarn add ts-jest -D
yarn add supertest @types/supertest -D

yarn typeorm migration:create -n CreateSurveysUsers
yarn add nodemailer
yarn add @types/nodemailer -D
yarn add handlebars - templates customizados html
yarn add yup - para validação
