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

test("test useEffect hook", () => {
	const [items, err] = useListItems(spRest as any, "test123");
	expect(global.useEffect).toHaveBeenCalledTimes(1);
});
