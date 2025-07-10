# Finance Board Api

Manage your finances by yourself. This project is being built as an API to manage everything need.

The main stack used is TypeScript.

The API Routes can be found at: [Routes Session](#finance-board-api-routes)

For more information, take a look at [Frequent Asks](#frequent-asks).

Our license is the MIT, found here: [MIT License](LICENSE).

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


## Finance Board API Routes

| **PREFIX**      | **POST**                                                                                                                                                       | **GET**                                          | **PATCH**                  | **DELETE**               | **FINAL** |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|----------------------------|--------------------------|-----------|
| USER            | `/api/v1/user`<br/>`/api/v1/user/login`<br/>`/api/v1/user/recovery`<br/>`/api/v1/user/{id}/deactivate`<br/>`/api/v1/user/logout`<br/>`/api/v1/user/logout-all` |                                                  | `/api/v1/user/{id}/update` |                          | 7 Routes  |
| BANK            | `/api/v1/bank`                                                                                                                                                 | `/api/v1/bank/{id}`<br/>`/api/v1/bank/user/{id}` | `/api/v1/bank/{id}`        | `/api/v1/bank/{id}`      | 5 Routes  |
| CARD            | `/api/v1/card`                                                                                                                                                 | `/api/v1/card/{id}`<br/>`/api/v1/card/bank/{id}` | `/api/v1/card/{id}`        | `/api/v1/card{id}`       | 5 Routes  |
| INVOICE         | `/api/v1/invoice`                                                                                                                                              | `/api/v1/invoice/card/{id}`                      | `/api/v1/invoice/{id}`     |                          | 3 Routes  |
| MONEY           | `/api/v1/money`                                                                                                                                                | `/api/v1/money/user/{id}`                        | `/api/v1/money/{id}`       |                          | 3 Routes  |
| PIX KEY         | `/api/v1/pix-key`                                                                                                                                              | `/api/v1/pix-key/bank/{id}`                      | `/api/v1/pix-key/{id}`     | `/api/v1/pix-key/{id}`   | 4 Routes  |
| BANK BOX        | `/api/v1/bank-box`                                                                                                                                             | `/api/v1/bank-box/bank/{id}`                     | `/api/v1/bank-box/{id}`    | `/api/v1/bank-box/{id}`  | 4 Routes  |
| MONEY BOX       | `/api/v1/money-box`                                                                                                                                            | `/api/v1/money-box/money/{id}`                   | `/api/v1/money-box/{id}`   | `/api/v1/money-box/{id}` | 4 Routes  |
| OPERA BANK      | `/api/v1/opera-bank`                                                                                                                                           | `/api/v1/opera-bank/bank/{id}`                   |                            |                          | 2 Routes  |
| OPERA BANK BOX  | `/api/v1/opera-bank-box`                                                                                                                                       | `/api/v1/opera-bank-box/bank-box/{id}`           |                            |                          | 2 Routes  |
| OPERA INVOICE   | `/api/v1/opera-invoice`                                                                                                                                        | `/api/v1/opera-invoice/invoice/{id}`             |                            |                          | 2 Routes  |
| OPERA MONEY     | `/api/v1/opera-money`                                                                                                                                          | `/api/v1/opera-money/money/{id}`                 |                            |                          | 2 Routes  |
| OPERA MONEY BOX | `/api/v1/opera-money-box`                                                                                                                                      | `/api/v1/opera-money-box/money-box/{id}`         |                            |                          | 2 Routes  |

> Total Routes: 45

Take look in the details about **Request Bodies** at [Frequent Asks](#frequent-asks).

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
<summary>Request Bodies</summary>
<ul>
<li>User Routes <a href="./REQUESTBODY.md/#user-routes">here</a>.</li>
<li>PixKey Routes <a href="./REQUESTBODY.md/#pix-key-routes">here</a>.</li>
<li>Bank Routes <a href="./REQUESTBODY.md/#bank-routes">here</a>.</li>
<li>Bank Box Routes <a href="./REQUESTBODY.md/#bank-box-routes">here</a>.</li>
<li>Card Routes <a href="./REQUESTBODY.md/#card-routes">here</a>.</li>
<li>Invoice Routes <a href="./REQUESTBODY.md/#invoice-routes">here</a>.</li>
<li>Money Routes <a href="./REQUESTBODY.md/#money-routes">here</a>.</li>
<li>Money Box Routes <a href="./REQUESTBODY.md/#money-box-routes">here</a>.</li>
<li>Opera Bank Routes <a href="./REQUESTBODY.md/#opera-bank-routes">here</a>.</li>
<li>Opera Bank Box Routes <a href="./REQUESTBODY.md/#opera-bank-box-routes">here</a>.</li>
<li>Opera Invoice Routes <a href="./REQUESTBODY.md/#opera-invoice-routes">here</a>.</li>
<li>Opera Money Routes <a href="./REQUESTBODY.md/#opera-money-routes">here</a>.</li>
<li>Opera Money Box Routes <a href="./REQUESTBODY.md/#opera-money-box-routes">here</a>.</li>
</ul>
</details>

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
