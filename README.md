# Node.js client for the Sonar REST API

[![npm version](https://badge.fury.io/js/node-sonar-api.svg)](https://badge.fury.io/js/node-sonar-api)

[![NPM](https://nodei.co/npm/node-sonar-api.png)](https://nodei.co/npm/node-sonar-api/)

Node client for the [sonar.software API](https://sonar.software/apidoc/) ![alt text](https://i.imgur.com/oZIYoDn.png?2 "Sonar Logo")

(Early release of the package only includes "getAll" and "get" requests! Plans for later releases will include "create", "delete", and "update" requests to the API)

* 0.2.7 fixes path generation for parameters that require arrays

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


## Examples (.getAll)
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


## Examples (.get)
The below examples are all for "get" requests.

All requests with "get" require an identifier.

Using promises:
```javascript
client.get.Account(1)
    .then(json => console.log(json));
```
Properties of an entity are accessed by lowercase:
```javascript
client.get.account.address(1, 63)
    .then(json => console.log(json));
```

Using a callback:
```javascript
client.get.Account(1, json => {
    console.log(json);
});
```

Specifying entity type:
```javascript
client.get.task('accounts', 1, 203)
    .then(json => console.log(json));
```


## Examples (.update) [Only for /api/v1/accounts/]
The below examples are "update" requests for /api/v1/accounts/...

All requests with "update" require an identifier.

Using promises:
```javascript
client.update.Account(1, {
    name: 'New Name Test'
})
    .then(json => console.log(json));
```
Properties of an entity are accessed by lowercase:
```javascript
client.update.account.address(1, 63, {
    line1: 'AT%26T Center Parkway',
    city: 'San Antontio',
    state: 'TX',
    county: 'Bexar Co.',
    zip: '78219',
    country: 'US'
})
    .then(json => console.log(json));
```
[📖 URL Encoding Special Character References](https://www.w3schools.com/tags/ref_urlencode.asp)

Using a callback:
```javascript
client.update.Account(1, { 
    name: 'New Name Test' 
}, json => {
    console.log(json);
});
```
## Notice
"update" functionality only implemented for the /api/v1/accounts/... portion of the API. This is for testing purposes as testing with the 'PATCH' requests are limited. If any problems are encountered while using the "update" functionality, please open an issue.

## Documentation
[📖 sonar.software REST API](https://sonar.software/apidoc/)