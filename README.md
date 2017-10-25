##CSS Verbose
This library is for users of CSS-in-JS (pure React, Radium, Aphrodite or whatever).

It provides an API close to real CSS for a more meaningful approach of CSS-in-JS.

###Install
```shell
npm install css-verbose --save
```
###Usage
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
