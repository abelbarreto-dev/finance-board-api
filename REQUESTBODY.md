# Application Request Bodies
Here you can find the request bodies for each route set.

**NOTE:** some parameters are enumerated and/or optionals.

### USER ROUTES

```json
{
  "name": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "username": "johndoe",
  "password": "securePassword123!",
  "active": true,
  "mobile": "5511987654321"
}
```

### PIX KEY ROUTES

```json
{
  "bankId": 1,
  "name": "John Doe",
  "typeKey": "EMAIL",
  "pixKey": "john.doe@example.com"
}
```

**ENUMs Values:**

* <details><summary>typeKey</summary><ul>
    <li>CPF</li>
    <li>CNPJ</li>
    <li>EMAIL</li>
    <li>PHONE</li>
    <li>RANDOM</li>
</ul></details>

### BANK ROUTES

```json
{
  "userId": 123,
  "accountType": "CHECKING",
  "name": "ITAU",
  "numbAccount": "12345-6",
  "numbAgency": "0001",
  "balanceValue": 12500.30
}
```

**ENUMs Values:**

* <details><summary>accountType</summary><ul>
    <li>CHECKING</li>
    <li>SAVINGS</li>
    <li>PAYMENT</li>
</ul></details>

* <details><summary>name</summary><ul>
    <li>ITAU</li>
    <li>BRADESCO</li>
    <li>SANTANDER</li>
    <li>CAIXA</li>
    <li>HSBC</li>
    <li>CITI</li>
    <li>BCO</li>
    <li>BANCO_DO_BRASIL</li>
    <li>NUBANK</li>
    <li>INTER</li>
    <li>WILLBANK</li>
    <li>PICPAY</li>
    <li>C6BANK</li>
    <li>BTG_PACTUAL</li>
    <li>JP_MORGAN</li>
</ul></details>

### BANK BOX ROUTES

```json
{
  "bankId": 1, 
  "description": "Emergency Savings", 
  "objective": 10000, 
  "balanceValue": 3500.75
}
```

### CARD ROUTES

```json
{
  "bankId": 1,
  "description": "Primary Credit Card",
  "cardType": "VIRTUAL",
  "cardFlag": "VISA",
  "cardLimit": 5000,
  "currentLimit": 3200
}
```

**ENUMs Values:**

* <details><summary>cardType</summary><ul>
    <li>VIRTUAL</li>
    <li>TEMPORARY</li>
    <li>PHYSICAL</li>
</ul></details>

* <details><summary>cardFlag</summary><ul>
    <li>MASTERCARD</li>
    <li>VISA</li>
    <li>ELO</li>
    <li>AMEX</li>
    <li>DINERS</li>
    <li>HIPERCARD</li>
</ul></details>

### INVOICE ROUTES

```json
{
  "cardId": 1,
  "description": "June 2024 Invoice",
  "quantity": 15,
  "invoicePaid": 0,
  "reversal": false,
  "balanceValue": 1899.99
}
```

### MONEY ROUTES

```json
{
  "userId": 123,
  "balanceValue": 750.25
}
```

### MONEY BOX ROUTES

```json
{
  "moneyId": 1,
  "description": "Vacation Fund",
  "objective": 8000,
  "balanceValue": 4200.50
}
```

### OPERA BANK ROUTES

```json
{
  "bankId": 1,
  "description": "Salary Deposit",
  "typeTransfer": "PIX",
  "state": "OTHERS",
  "bankOperation": "DEPOSIT",
  "senderName": "ACME Corp",
  "receiverName": "John Doe",
  "balanceValue": 3500.00
}
```

**ENUMs Values:**

* <details><summary>typeTransfer</summary><ul>
    <li>PIX</li>
    <li>TED</li>
    <li>DOC</li>
</ul></details>

* <details><summary>state</summary><ul>
    <li>MYSELF</li>
    <li>OTHERS</li>
</ul></details>

* <details><summary>bankOperation</summary><ul>
    <li>WITHDRAW</li>
    <li>DEPOSIT</li>
    <li>PAYMENT</li>
</ul></details>

### OPERA BANK BOX ROUTES

```json
{
  "bankBoxId": 1,
  "typeTransfer": "DEPOSIT",
  "balanceValue": 200.00
}
```

**ENUMs Values:**

* <details><summary>typeTransfer</summary><ul>
    <li>WITHDRAW</li>
    <li>DEPOSIT</li>
</ul></details>

### OPERA INVOICE ROUTES

```json
{
  "invoiceId": 1,
  "balanceValue": 1899.99
}
```

### OPERA MONEY ROUTES

```json
{
  "moneyId": 1,
  "typeTransfer": "PAYMENT",
  "balanceValue": 150.75
}
```

**ENUMs Values:**

* <details><summary>typeTransfer</summary><ul>
    <li>WITHDRAW</li>
    <li>DEPOSIT</li>
    <li>PAYMENT</li>
</ul></details>

### OPERA MONEY BOX ROUTES

```json
{
  "moneyBoxId": 1,
  "typeTransfer": "WITHDRAW",
  "balanceValue": -100.00
}
```

**ENUMs Values:**

* <details><summary>typeTransfer</summary><ul>
    <li>WITHDRAW</li>
    <li>DEPOSIT</li>
</ul></details>
