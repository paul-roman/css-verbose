declare module 'css-verbose' {
	/* Colors */
	interface Color {
		red: number;
		green: number;
		blue: number;
		alpha: number;

		new(hex: string): Color;
		new(red: number, green: number, blue: number, alpha?: number): Color;

		toHex(): string;
	}
	export function color(hex: string): Color;
	export function color(red: number, green: number, blue: number, alpha?: number): Color;

	export function rgb(red: number, green: number, blue: number): string;
	export function rgba(red: number, green: number, blue: number, alpha: number): string;

	/* Padding / Margin shorthand */
	export function __(value1: string | number, value2?: string | number, value3?: string | number, value4?: string | number): string;
	export function margin(value1: string | number, value2?: string | number, value3?: string | number, value4?: string | number): string;
	export function padding(value1: string | number, value2?: string | number, value3?: string | number, value4?: string | number): string;

	/* Border shorthand */
	export function border(width: string | number, style?: string, color?: string): string;
}

/* Units */
interface Number {
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
