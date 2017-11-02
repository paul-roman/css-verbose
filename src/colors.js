class Color {
	constructor(red, green, blue, alpha) {
		this.red = 0;
		this.green = 0;
		this.blue = 0;
		this.alpha = 1;
		if (red === undefined)
			return;
		if (green === undefined) {
			let hex = red;
			if (hex[0] === '#')
				hex = hex.substr(1);
			this.red = parseInt(hex.substr(0, 2), 16);
			this.green = parseInt(hex.substr(2, 2), 16);
			this.blue = parseInt(hex.substr(4, 2), 16);
		}
		else {
			this.red = red;
			this.green = green;
			this.blue = blue;
			if (alpha !== undefined)
				this.alpha = alpha;
		}
	}

	toString() {
		if (this.alpha === 1)
			return `rgb(${this.red}, ${this.green}, ${this.blue})`;
		else
			return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
	}

	toHex() {
		return `#${this.red.toString(16).toUpperCase()}${this.green.toString(16).toUpperCase()}${this.blue.toString(16).toUpperCase()}`
	}
}

function color(red, green, blue, alpha) {
	return `${new Color(red, green, blue, alpha)}`;
}

function rgb(red, green, blue) {
	return `${new Color(red, green, blue)}`;
}

function rgba(red, green, blue, alpha) {
	return `${new Color(red, green, blue, alpha)}`;
}

module.exports = {
	Color, color,
	rgb, rgba
};
