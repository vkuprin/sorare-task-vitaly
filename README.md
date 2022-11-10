## Setup Guide
### Install dependencies
Recommended yarn version 3.2.0 (yarn set version berry)
Node version 18.0.0
```
$ yarn install
```

#### Running local dev server
```
$ yarn dev
```

### Running proxy server
```
$ yarn proxy
```

### Build Setup

```
$ yarn build
```

Build should be outputted to `dist/` folder

After that we can check production version with `yarn preview`

### Answer on PART 4

How would I proceed with PNG card images generation?

I would prefer to use a query for all cards.
To have an array of collection of all card ids and cards images urls.

Example:
```graphql
query {
    allCards {
        nodes {
            id
            pictureUrl
        }
    }
}
```

Then I would use react logic to store all cards in a state and use it later to randomly pick values from collection of cards.

```javascript
const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
```



