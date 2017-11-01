interface CssVerbose {
	/* Colors */
	rgb(red: number, green: number, blue: number): string;
	rgba(red: number, green: number, blue: number, alpha: string): string;

	/* Padding / Margin */
	__(value1: string | number): string;
	__(value1: string | number, value2: string | number): string;
	__(value1: string | number, value2: string | number, value3: string | number): string;
	__(value1: string | number, value2: string | number, value3: string | number, value4: string | number): string;
}

interface Number {
	/* Units */
	cm(): string;
	mm(): string;
	inch(): string;
	px(): string;
	pt(): string;
	pc(): string;
	em(): string;
	ex(): string;
	ch(): string;
	rem(): string;
	vw(): string;
	vh(): string;
	vMin(): string;
	vMax(): string;
	percents(): string;
}

