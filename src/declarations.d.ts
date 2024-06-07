declare module '*.webp' {
	const value: any;
	export = value;
}

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}