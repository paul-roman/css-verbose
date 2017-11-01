require('./src/units');
const colorsFunctions = require('./src/colors');
const marginPaddingFunctions = require('./src/margin_padding');

module.exports = Object.assign({},
	colorsFunctions, marginPaddingFunctions
);
