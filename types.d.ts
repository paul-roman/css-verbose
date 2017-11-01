declare module CssVerbose {
	/* Colors */
	export function rgb(red: string, green: string, blue: string): string;
	export function rgba(red: string, green: string, blue: string, alpha: string): string;

	/* Padding / Margin */
	export function __(value1: string | number): string;
	export function __(value1: string | number, value2: string | number): string;
	export function __(value1: string | number, value2: string | number, value3: string | number): string;
	export function __(value1: string | number, value2: string | number, value3: string | number, value4: string | number): string;
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

export = CssVerbose;
