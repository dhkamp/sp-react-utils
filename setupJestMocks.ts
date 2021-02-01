declare module NodeJS  {
    interface Global {
        useEffect: (f: Function) => {}
    }
}

const mockUseEffect = (f: Function) => f();

global.useEffect = jest.fn(mockUseEffect);
