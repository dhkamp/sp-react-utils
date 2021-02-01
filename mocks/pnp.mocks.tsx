declare module NodeJS {
	interface Global {
		mockGetItemsByCAMLQuery: (argv: any) => Promise<Array<any>>;
	}
}

global.mockGetItemsByCAMLQuery = jest.fn((argv: Array<any>) =>
	Promise.resolve(argv)
);
