# Frontend Engineer - TechnicalAssignment

Thank you for your interest in Sorare! We're excited to learn more about you. As a
first step, we'd like for you to complete this take home coding assessment. You
should allow yourself 4 to 6 hours, but try not to spend much more than that. We will
be grading you on correctness, clarity, and overall completion. Should you have any
questions, please do not hesitate to ask us. Good luck!


## Setup

### Aributes

Sorare’s player cards display various information about a player. Each card has
multiple aributes, including:
* Name & season picture,
* Season
* Scarcity
* Team name & picture,
* Shirt Number
* Age
* Position
* Country
* etc...

### Slugs

Each Sorare card is uniquely identified by a slug.
For example:

- Slugmarcoverratti-2021-unique-1identifiesthiscard
- Slugmarcoverratti-2021-rare-1identifiesthiscard


### Goal

The goal of this challenge is to implement a React component able to display a card
from the data you get from a GraphQL API call. You can find Sorare’s GraphQL API
playground and docs here:hps://api.sorare.com/graphql/playground.

As of today, the API won’t let you do any XHR requests from your local development
and you’ll get a CORS error if you try to. Simply rely on abackend proxyto make this
work within your Express/Webpack server (example usingcreate-react-app’s
react-scripts):
```js
const{ createProxyMiddleware } = require('httpproxymiddleware');
    module.exports= function(app) {
    app.use('/graphql',
    createProxyMiddleware({
    target:'https:api.sorare.com/',
    changeOrigin: true
    })
  );
};
```
This will let you queryhp://localhost:YOUR_DEV_PORT/graphqlas you would query
hps://api.sorare.com/graphql.

## Part I

Implement a simple routing strategy and display the card from a slug passed
through the URL:
● hp://localhost:8080/cards/<card slug here>

For example, the following URL should display the unique Marco Verrai card shown
previously:
● hp://localhost:8080/cards/marco-verrai-2021-unique-


Of course, the goal is not to reuse the provided “pictureUrl” aribute available within
the GraphQL API to display the card.

Feel free to use whatever assets you want as the backgrounds.

## Part II

Implement the ability to display multiple cards on the same page, reading all slugs
from a comma-separated list of slugs in the URL:
● hp://localhost:8080/cards/<card slug here>,<card slug here>,...
For example, the following URL should display the unique and the rare Marco Verrai
cards shown previously:
● hp://localhost:8080/cards/marco-verrai-2021-unique-1,marco-verrai-
1-rare-

## Part III

Update your code to only show cards placeholder at page loading time, and add a
buon triggering a “Card Reveal” animation that queries the GraphQL API and reveals
the cards

## Part IV

From there, how would you proceed to generate a PNG version of the card? (no code
required)

## Submission

Please use the link provided in the assignment email to submit your final
document(s) within 48 hours. Thank you for taking the time to interview with Sorar

Disclaimer
This document is a strictly confidential communication to and solely for the use of the recipient and
may not be reproduced or circulated without Sorare's prior wrien consent. If you are not the
intended recipient, you may not disclose or use the information in this document in any way.


