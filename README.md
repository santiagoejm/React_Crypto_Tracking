# React_Crypto_Tracking

Hello world!! This project, is a _crypto currency tracker app_,it is powered by **React.js, MaterialUI, and Chartjs**. The data is fetched from the [CoinGecko](https://www.coingecko.com/en/api) API, making use of **Axios**. **ContextAPI** were implemented for handling the state.

In this app, the user can visualized the top 100 Cryptos by market cap, with a pagination of 10 currencies per page. Also, a search bar is deployed so the user can search and filter the tokens by either name or symbol _(example: Bitcoin or BTC)_. A `carousel` is displayed at the top of the home page, where infinetly are looped the tokens with recent changes in their prices. The user can view the prices of the tokens expressed in EUR or USD.

Another cool and major functionality is the view of the price chart of any of the tokens from the last day, last month, last 3 months or last year. I have to thanks ~~`@piyush-eon~~` and his helpfull repository for this great shared knowledge.

**MaterialUI** components where use to structure the page and for the navigation **React-Router-Dom**, for its simple and intuitive way of working.

## Current Functionality

- Preview tokens ordered by market cap from greater to smaller, its price per token, and variability in the last 24 hours.
- Search for tokens by name or symbol, and that way filter the tokens displayed.
- Paginate up to 10 pages with 10 tokens per page.
- Select a token and jump to the specific crypto page information, where the user can view more details about it, included the Chart of prices in the last day, month, quarter or year.
-

## Future Functionality to Implement

- Improve the styling and appearance of the app, make it more responsive and responsible as well.
- Generate the option to switch from light to dark mode wthin the app.
- Fix a couple of bugs, that currently are shown by the lack of handling error and reference.

## Usage

- clone` the repository.
- install the dependencies:
  `npm install`
- run the app:
  `npm start`
- you are good to go.

## Live Demo

Just Click on the next Link: [CryptoTracking](https://santiagoejm.github.io/React_Crypto_Tracking/).
