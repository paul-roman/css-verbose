## CSS Verbose
[![license](https://img.shields.io/github/license/paul-roman/css-verbose.svg?style=flat-square)](https://github.com/paul-roman/css-verbose/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/css-verbose.svg?style=flat-square)](https://www.npmjs.com/package/css-verbose)

This library is for users of CSS-in-JS (pure React, Radium, Aphrodite or whatever).

It provides an API close to real CSS for a more meaningful approach of CSS-in-JS.

### Install
```shell
npm install css-verbose --save
```
### Usage
```jsx harmony
// ES6
import { rgba } from 'css-verbose';
// CommonJS
const CssVerbose = require('css-verbose');

...
render() {
	return (
		<div style={styles}>
			Lorem Ipsum
		</div>
	);
}

let styles = {
	color: 'red',
	// ES6
	backgroundColor: rgba(45, 65, 77, 0.98),
	// CommonJS
	backgroundColor: CssVerbose.rgba(45, 65, 77, 0.98)
};
```

### Features
This module is under development, feel free to open an issue to submit an idea that will ease your pain! 

Note that all these examples assume that you used ES6 imports. If you still use CommonJS's require, simply add the name of your object before the function name.

#### Units
You can use an helper to convert a number to a CSS unit:

_CSS:_
```css
{
	width: 100px;
	height: 10em;
	margin-top: 1%;
}
```

_JS:_
```js
{
	width: (100).px(),
	height: (10).em(),
	marginTop: (1).percents();
}
```
Note that most of helpers here will convert standard numbers to px unit if needed.

#### Colors
Colors helpers are working the exact same way as CSS functions:

_CSS:_
```css
{
	background-color: rgb(150, 34, 78);
	color: rgba(70, 45, 12, 0.4);
}
```

_JS:_
```js
{
	backgroundColor: rgb(150, 34, 78),
	color: rgba(70, 45, 12, 0.4)
}
```
#### Margin / Padding
Two helpers **margin()** and **padding()** are provided to handle margin and padding, which both act the same. They will automatically convert standard numbers to pixels: 

_CSS:_
```css
{
	margin: 10px 40px 1% 6em;
	padding: 50px 3px;
}
```

_JS:_
```js
{
	margin: margin(10, 40, (1).percents(), (6).em()),
	padding: padding(50, 3)
}
```
#### Borders
A **border()** helper is provided to handle borders. The style parameter is mandatory. If you only provide 2 parameters, it will assume that they are the width and the style. It will automatically convert standard numbers to pixels:  

_CSS:_
```css
{
	border: 3px solid rgb(0, 230, 54);
}
```

_JS:_
```js
{
	border: border(3, 'solid', rgb(0, 230, 54))
}
```
