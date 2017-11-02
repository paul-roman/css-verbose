const toPx = require('./toPx').toPx;

function border(width, style, color) {
	if (style === undefined)
		return `${width}`;
	else if (color === undefined)
		return `${toPx(width)} ${style}`;
	else
		return `${toPx(width)} ${style} ${color}`;

}

module.exports = {
	border
};
