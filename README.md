# Node.js client for the Sonar-API

![alt text](https://i.imgur.com/oZIYoDn.png?2 "Sonar Logo")

(Early release of the package only includes "getAll" requests! Plans for later releases will include "get", "create", "delete", and "update" requests to the API.)

## Installation
Using npm:
```sh
npm install node-sonar-api
```

## Usage
Require the package:
```javascript
const sonar = require('node-sonar-api');
```

Create the sonar client:
```javascript
let client = sonar.createClient({
    sonarHost: "example.sonar.software",
    sonarUsername: "sonarUser",
    sonarPassword: "sonarPassword"
});
```

Now make requests to the Sonar API!

## Examples
The below examples are all for "getAll" requests.

Using promises:
```javascript
client.getAll.accounts()
    .then(json => console.log(json));
```
Specifying parameters with an object:
```javascript
client.getAll.accounts({
    limit: 5,
    page: 2
})
    .then(json => console.log(json));
```

Using a callback:
```javascript
client.getAll.accounts(json => {
    console.log(json);
});
```
Specifying parameters with an object:
```javascript
client.getAll.accounts({ limit: 5, page: 2 }, json => {
    console.log(json);
});
```

Specifying an ID:
```javascript
client.getAll.account.contacts(23673)
    .then(json => console.log(json));
```

Specifying entity type:
```javascript
client.getAll.notes('accounts', 23673)
    .then(json => console.log(json));
```

## Documentation
[📖 Sonar REST API](https://sonar.software/apidoc/)