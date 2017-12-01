# react-iTunes-search

[![Travis](https://img.shields.io/travis/LeoAJ/react-iTunes-search.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-iTunes-search)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-iTunes-search/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-square)](http://makeapullrequest.com)
[![node](https://img.shields.io/badge/node-%3E=_8.0-yellowgreen.svg?style=flat-square)](https://nodejs.org)
[![David](https://img.shields.io/david/LeoAJ/react-iTunes-search.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-iTunes-search)
[![David](https://img.shields.io/david/dev/LeoAJ/react-iTunes-search.svg?style=flat-square)](https://david-dm.org/LeoAJ/react-iTunes-search#info=devDependencies)

:musical_note: :mag: Simple web app for iTunes search with React  (v16)

>If you like this one and you also like Redux, there is a Redux implementation version [here](https://github.com/LeoAJ/redux-iTunes-search). Please check it out.

## Preview

![Preview Gif](https://user-images.githubusercontent.com/492921/31646805-f68ca096-b2b8-11e7-988d-ecfe934debff.gif)

## Live Demo

http://leoj.js.org/react-iTunes-search/

## Detail

To know more detail, please read my [post](http://leoj.js.org/personal/React-iTunes-Search/).

## Installation

1. `git clone git@github.com:LeoAJ/react-iTunes-search.git`
2. `cd react-iTunes-search`
3. `yarn`

## Dev

Run webpack dev server with [react-hot-loader 3](https://github.com/gaearon/react-hot-loader)

```
yarn start
```

and go to `localhost:3000`

## Deploy

Use webpack minify plugin

```
yarn deploy
```

## Lint

run eslint, using [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) rules.

```
yarn lint
```

## Flow

```
flow-typed install
yarn flow
```

## Unit test

Use `Jest`

```
yarn jest
```

### Test

run both `lint`, `flow` and `jest`

```
yarn test
```

## Built with

* React (v16)
* Babel 6
* ES6/ES7 (async/await)
* Webpack
* React-hot-loader 3
* PostCSS
* Eslint
* Materialize
* iTunes search API
* Flow
* Jest
* Enzyme

## License

MIT
