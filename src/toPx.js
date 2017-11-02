module.exports = {
	toPx(value) {
		if (typeof value === 'string') {
			if (/^\d+$/.test(value))
				return `${value}px`;
			else
				return value;
		}
		else
			return `${value}px`;
	}
};
