# Finance Board Api
Take care your finance by yourself. This project is being built as an API to manage everything need.

The main stack used is TypeScript.

You'll find about 44 routes. [TODO]

The user is *soft-deleted* when you chose that option if logged.

## How To Run?

We've two options:
1. Using ts-config;
2. Using Nodemon;

The difference between both is: with nodemon you can restart the application to test responses while the normal
run require you stop the server and restart again.

### Normal Runner:
```commandline
npm run start
```

### Nodemon Runner:
```commandline
npm run dev
```

## How To Test?
* **About Unit Testing**:
Each feature built at that project has its own unit tests cases;
  * This project uses [Ts-Jest](https://www.npmjs.com/package/ts-jest) as test provider;
* To run, you can just type it on console:

```commandline
npm test
```

Or

```commandline
npx jest
```

For more information, our tests are found at [Tests Package](Tests/).

## Packages Structure
Here, I present you our package structure.

```commandline
prisma/
├──└──migrations/
└──└──schema.prisma
Src/
├──Controllers/
├──Dtos
├──└──Special/
├──Enums/
├──Exceptions/
├──Models/
├──└──Special/
├──Middlewares/
├──Repositories/
├──└──Session/
├──Routes/
├──Services/
├──└──Session
└──Utils
Tests/
├──Mocks/
├──└──Dtos/
├──└──General/
├──└──Models/
├──Services/
└──Utils/
env.example
.gitignore
App.ts -----------------> # starts here
jest.config.ts
LICENSE
nodemon.json
package.json
README.md
tsconfig.json
```

---
That's all Folks!
