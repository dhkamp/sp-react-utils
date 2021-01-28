import { useListItems } from "./useListItems.hook";

jest.mock("react", () => ({
	...jest.requireActual("React"),
	useEffect: global.useEffect,
	useState: (val: any) => [val, (v: any) => (val = v)],
}));

const spRest = {
	web: {
		getList: () => ({
			getItemsByCAMLQuery(argv: any) {
				return new Promise((resolve, reject) => {
					console.log(argv);
				});
			},
		}),
	},
};

test("test 2", () => {
	const [items, err] = useListItems(spRest as any, "test123");
	expect(global.useEffect).toHaveBeenCalledTimes(1);
	//expect(items.length).toEqual(0);
});

test("test test", () => {
	expect(3 + 3).toEqual(6);
});
