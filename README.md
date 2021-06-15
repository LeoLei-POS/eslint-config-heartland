# eslint-config-heartland-restaurant

Configuration of eslint for Heartland JS projects to standardize the code style.

## Configs 

* `config/base.js` - based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript)
* `config/react.js` - based on [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native)
* `config/typescript` - based on [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint#readme)

## Usage 

Install

```sh
yarn add
  eslint@6.8.0
  eslint-config-heartland-restaurant
  eslint-plugin-import
  @typescript-eslint/eslint-plugin
  eslint-config-prettier 
  eslint-plugin-prettier
  -D 
```

If your project use __React__, install relate peer dependencies:

```sh
yarn add
  eslint-plugin-react
  eslint-plugin-react-hooks
  eslint-plugin-react-native
  -D
```

Then config your project in `package.json`:

```js

// Base rule

"eslintConfig": {
		"extends": [
			"heartland-restaurant",
			"heartland-restaurant/config/react",
			"heartland-restaurant/config/typescript",
			"prettier"
		]
	},

// With react

"eslintConfig": {
		"extends": [
			"heartland-restaurant",
			"heartland-restaurant/config/react",
			"prettier"
		]
	},

// Enable Typescript

"eslintConfig": {
		"extends": [
			"heartland-restaurant",
			"heartland-restaurant/config/typescript",
			"prettier"
		]
	},

```

## Integration

How to integrate with __Intellij__ or __vscode__?

Intellij: Preferences -> Language & Frameworks -> JavaScript -> Code Quality Tools -> Eslint -> Automatic ESlint configuration

Vscode: Install `Eslint` from `MarketPlace` of Vscode.

