const colorsFunctions = require('./src/colors');
const marginPaddingFunctions = require('./src/margin_padding');
const borderFunctions = require('./src/border');
require('./src/units');

module.exports = Object.assign({},
	colorsFunctions, marginPaddingFunctions, borderFunctions
);
