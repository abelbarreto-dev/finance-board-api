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

| **PREFIX**      | **POST**                                                                                                                                                                                                               | **GET**                                                                                                 | **PATCH**                                                                           | **DELETE**                                                                         | **FINAL** |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-----------|
| USER            | <details><summary>Routes Post</summary><p>`/api/v1/user`<br/>`/api/v1/user/login`<br/>`/api/v1/user/recovery`<br/>`/api/v1/user/{id}/deactivate`<br/>`/api/v1/user/logout`<br/>`/api/v1/user/logout-all`</p></details> |                                                                                                         | <details><summary>Routes Patch</summary><p>`/api/v1/user/{id}/update`</p></details> |                                                                                    | 7 Routes  |
| BANK            | <details><summary>Routes Post</summary><p>`/api/v1/bank`</p></details>                                                                                                                                                 | <details><summary>Routes Get</summary><p>`/api/v1/bank/{id}`<br/>`/api/v1/bank/user/{id}`</p></details> | <details><summary>Routes Patch</summary><p>`/api/v1/bank/{id}`</p></details>        | <details><summary>Routes Delete</summary><p>`/api/v1/bank/{id}`</p></details>      | 5 Routes  |
| CARD            | <details><summary>Routes Post</summary><p>`/api/v1/card`</p></details>                                                                                                                                                 | <details><summary>Routes Get</summary><p>`/api/v1/card/{id}`<br/>`/api/v1/card/bank/{id}`</p></details> | <details><summary>Routes Patch</summary><p>`/api/v1/card/{id}`</p></details>        | <details><summary>Routes Delete</summary><p>`/api/v1/card{id}`</p></details>       | 5 Routes  |
| INVOICE         | <details><summary>Routes Post</summary><p>`/api/v1/invoice`</p></details>                                                                                                                                              | <details><summary>Routes Get</summary><p>`/api/v1/invoice/card/{id}`</p></details>                      | <details><summary>Routes Patch</summary><p>`/api/v1/invoice/{id}`</p></details>     |                                                                                    | 3 Routes  |
| MONEY           | <details><summary>Routes Post</summary><p>`/api/v1/money`</p></details>                                                                                                                                                | <details><summary>Routes Get</summary><p>`/api/v1/money/user/{id}`</p></details>                        | <details><summary>Routes Patch</summary><p>`/api/v1/money/{id}`</p></details>       |                                                                                    | 3 Routes  |
| PIX KEY         | <details><summary>Routes Post</summary><p>`/api/v1/pix-key`</p></details>                                                                                                                                              | <details><summary>Routes Get</summary><p>`/api/v1/pix-key/bank/{id}`</p></details>                      | <details><summary>Routes Patch</summary><p>`/api/v1/pix-key/{id}`</p></details>     | <details><summary>Routes Delete</summary><p>`/api/v1/pix-key/{id}`</p></details>   | 4 Routes  |
| BANK BOX        | <details><summary>Routes Post</summary><p>`/api/v1/bank-box`</p></details>                                                                                                                                             | <details><summary>Routes Get</summary><p>`/api/v1/bank-box/bank/{id}`</p></details>                     | <details><summary>Routes Patch</summary><p>`/api/v1/bank-box/{id}`</p></details>    | <details><summary>Routes Delete</summary><p>`/api/v1/bank-box/{id}`</p></details>  | 4 Routes  |
| MONEY BOX       | <details><summary>Routes Post</summary><p>`/api/v1/money-box`</p></details>                                                                                                                                            | <details><summary>Routes Get</summary><p>`/api/v1/money-box/money/{id}`</p></details>                   | <details><summary>Routes Patch</summary><p>`/api/v1/money-box/{id}`</p></details>   | <details><summary>Routes Delete</summary><p>`/api/v1/money-box/{id}`</p></details> | 4 Routes  |
| OPERA BANK      | <details><summary>Routes Post</summary><p>`/api/v1/opera-bank`</p></details>                                                                                                                                           | <details><summary>Routes Get</summary><p>`/api/v1/opera-bank/bank/{id}`</p></details>                   |                                                                                     |                                                                                    | 2 Routes  |
| OPERA BANK BOX  | <details><summary>Routes Post</summary><p>`/api/v1/opera-bank-box`</p></details>                                                                                                                                       | <details><summary>Routes Get</summary><p>`/api/v1/opera-bank-box/bank-box/{id}`</p></details>           |                                                                                     |                                                                                    | 2 Routes  |
| OPERA INVOICE   | <details><summary>Routes Post</summary><p>`/api/v1/opera-invoice`</p></details>                                                                                                                                        | <details><summary>Routes Get</summary><p>`/api/v1/opera-invoice/invoice/{id}`</p></details>             |                                                                                     |                                                                                    | 2 Routes  |
| OPERA MONEY     | <details><summary>Routes Post</summary><p>`/api/v1/opera-money`</p></details>                                                                                                                                          | <details><summary>Routes Get</summary><p>`/api/v1/opera-money/money/{id}`</p></details>                 |                                                                                     |                                                                                    | 2 Routes  |
| OPERA MONEY BOX | <details><summary>Routes Post</summary><p>`/api/v1/opera-money-box`</p></details>                                                                                                                                      | <details><summary>Routes Get</summary><p>`/api/v1/opera-money-box/money-box/{id}`</p></details>         |                                                                                     |                                                                                    | 2 Routes  |

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
