declare module NodeJS {
	interface Global {
		useEffect: (f: Function) => {};
	}
}

global.useEffect = jest.fn((f: Function) => f());
