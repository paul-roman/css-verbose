declare module 'css-verbose' {
	/* Units */
	export function cm(n: number): string;
	export function mm(n: number): string;
	export function inch(n: number): string;
	export function px(n: number): string;
	export function pt(n: number): string;
	export function pc(n: number): string;
	export function em(n: number): string;
	export function ex(n: number): string;
	export function ch(n: number): string;
	export function rem(n: number): string;
	export function vw(n: number): string;
	export function vh(n: number): string;
	export function vmin(n: number): string;
	export function vmax(n: number): string;
	export function percents(n: number): string;

	/* Colors */
	export function rgb(red: string, green: string, blue: string): string;
	export function rgba(red: string, green: string, blue: string, alpha: string): string;
}
