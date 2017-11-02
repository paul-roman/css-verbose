Object.assign(Number.prototype, {
	cm() {
		return `${this}cm`;
	},

	mm() {
		return `${this}mm`;
	},

	inch() {
		return `${this}in`;
	},

	px() {
		return `${this}px`;
	},

	pt() {
		return `${this}pt`;
	},

	pc() {
		return `${this}pc`;
	},

	em() {
		return `${this}em`;
	},

	ex() {
		return `${this}ex`;
	},
	ch() {
		return `${this}ch`;
	},

	rem() {
		return `${this}rem`;
	},

	vw() {
		return `${this}vw`;
	},

	vh() {
		return `${this}vh`;
	},

	vMin() {
		return `${this}vmin`;
	},

	vMax() {
		return `${this}vmax`;
	},

	percents() {
		return `${this}%`;
	}
});
