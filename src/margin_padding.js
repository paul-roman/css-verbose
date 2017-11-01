function toPx(value) {
	if (typeof value === 'string') {
		if (/^\d+$/.test(value))
			return `${value}px`;
		else
			return value;
	}
	else
		return `${value}px`;
}

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

module.exports = {
	__
};
