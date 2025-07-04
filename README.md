# Finance Board Api
Take care your finance by yourself. This project is being built as an API to manage everything need.

The main stack used is TypeScript.

You'll find about 48 routes. [TODO]

The user is *soft-deleted* when you chose that option if logged.

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
├──migrations/
Src/
├──Controllers/
├──Dtos
├──Enums/
├──Exceptions/
├──Models/
├──Repositories/
├──Routes/
├──Services/
├──Utils
Tests/
├──Mocks/
├──├──Dtos/
├──├──General/
├──├──Models/
├──Services/
├──Utils/
env.example
.gitignore
package.json
README.md
tsconfig.json
```

---
That's all Folks!
