# Finance Board Api

Manage your finances by yourself. This project is being built as an API to manage everything need.

The main stack used is TypeScript.

You'll find about 44 routes. [TODO]

For more information, take a look at [Frequent Asks](#frequent-asks).

## How To Run?

We've two options:

1. Using ts-config;
2. Using Nodemon;

The difference between both is: with nodemon you can restart the application to test responses while the normal
way of run is required to you stop the server and start again.

### Normal Runner:

```commandline
npm run start
```

### Nodemon Runner:

```commandline
npm run dev
```

## About Unit Testing
* Please take a look at our [testing](./Tests/TESTING.md) document file.

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
├──Types/
└──Utils
Tests/
├──Mocks/
├──└──Dtos/
├──└──General/
├──└──Models/
├──Services/
└──Utils/
└──TESTING.md
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

## Frequent Asks

<details>
<summary>
About Delete
</summary>
<p>
The User is just *soft-deleted* when you chose that option if logged.
</p>
<p>
To reactive it, you can make login again and the user will be reactivated.
</p>
</details>

<details>
<summary>
Authentication
</summary>
<p>
To make authentication, we're using 
<a href="https://www.npmjs.com/package/jsonwebtoken" 
target="_blank">JsonWebToken JWT</a>.
</p>
</details>

<details>
<summary>
Password Encryption
</summary>
<p>
To make password encryption, we're using 
<a href="https://www.npmjs.com/package/bcrypt" 
target="_blank">Bcrypt</a>.
</p>
</details>

<details>
<summary>
Database ORM
</summary>
<p>
To make database ORM, we're using 
<a href="https://www.npmjs.com/package/prisma" 
target="_blank">Prisma</a>.
</p>
<p>
The database used is 
<a href="https://www.postgresql.org/" 
target="_blank">Postgres</a>.
</p>
</details>

<details>
<summary>
Migration
</summary>
<p>
If you want to make a migration, you can use the command:
</p>
<p>
<code>npm run migrate migration_description</code>
</p>
<p>
Replace <code>migration_description</code> by yours, separating by underscore.
</p>
</details>

---

That's all Folks!
