const toPx = require('./toPx').toPx;

function __(a, b, c, d) {
	if (b === undefined)
		return toPx(a);
	else if (c === undefined)
		return `${toPx(a)} ${toPx(b)}`;
	else if (d === undefined)
		return `${toPx(a)} ${toPx(b)} ${toPx(c)}`;
	else
		return `${toPx(a)} ${toPx(b)} ${toPx(c)} ${toPx(d)}`;
}

function padding(a, b, c, d) { return __(a, b, c, d); }
function margin(a, b, c, d) { return __(a, b, c, d); }

module.exports = {
	__,
	margin,
	padding
};
