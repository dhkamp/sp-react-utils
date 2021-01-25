import { useListItems } from "./useListItems.hook";

const spRest = {
	web: {
		getList: () => ({
			getItemsByCAMLQuery(argv: any) {
				console.log(argv);
			},
		}),
	},
};

test("test 2", () => {
	const [items, err] = useListItems(spRest as any, "test123");
	expect(items.length).toEqual(0);
});

test("test test", () => {
	expect(3 + 3).toEqual(6);
});
