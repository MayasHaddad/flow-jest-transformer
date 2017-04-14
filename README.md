# flow-jest-transformer
Custom transformer for handling .js.flow files

## Install
```
npm i --save-dev flow-jest-transformer
```

or 

```
yarn add -SD flow-jest-transformer
```

## Usage
Update your jest configuration to add this:

```json
"transform": {
  "^.+\\.jsx?$": "babel-jest",
  "^.+\\.js.flow$": "flow-jest-transformer"
},
```
