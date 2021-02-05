import { ICamlQuery } from "@pnp/sp/presets/all";
import { renderHook } from "@testing-library/react-hooks";
import { useListItems, IUseListItemHookResult } from "./useListItems.hook";
import { executeCAMLQuery, getCAMLQuery } from "./useListItems.core";

const mockSPRest = {
	...jest.requireActual("@pnp/sp/presets/all"),
	web: {
		getList: () => ({
			getItemsByCAMLQuery: global.mockGetItemsByCAMLQuery,
		}),
	},
};

const trimAll = (str: string) => str.replace(/\s/g, "");

const defaultQuery = `<View>
	<ViewFields>
		{ViewFields}
	</ViewFields>
	<RowLimit>{RowLimit}</RowLimit>
	<Query>
		{Query}
	</Query>
</View>`;

afterEach(() => {
	jest.clearAllMocks();
});

test("should construct a valid CAML query with the provided rowlimit", () => {
	const rowLimit = 17;
	const caml = getCAMLQuery([], rowLimit, "");

	const query: ICamlQuery = {
		ViewXml: trimAll(
			defaultQuery
				.replace("{ViewFields}", "")
				.replace("{RowLimit}", `${rowLimit}`)
				.replace("{Query}", "")
		),
	};

	expect(caml.ViewXml).toEqual(query.ViewXml);
});

test("should construct a valid CAML query with the provided viewfields", () => {
	const viewfields = ["Title", "ID", "CustomField"];
	const caml = getCAMLQuery(viewfields, 0, "");

	const query: ICamlQuery = {
		ViewXml: trimAll(
			defaultQuery.replace("{RowLimit}", "").replace("{Query}", "")
		).replace(
			"{ViewFields}",
			viewfields.map((v) => `<FieldRef Name="${v}"/>`).join("")
		),
	};

	expect(caml.ViewXml).toEqual(query.ViewXml);
});

test("should construct a valid CAML query with the provided where-query", () => {
	const where = `<Where>
		<Contains>
			<FieldRef Name='LinkTitleNoMenu' />
			<Value Type='Text'>L</Value>
		</Contains>
	</Where>`;
	const caml = getCAMLQuery([], 0, where);

	const query: ICamlQuery = {
		ViewXml: trimAll(
			defaultQuery.replace("{ViewFields}", "").replace("{RowLimit}", "")
		).replace("{Query}", where),
	};

	expect(caml.ViewXml).toEqual(query.ViewXml);
});

test("should call the sharepoint endpoint with the provided query", async () => {
	const url = "/sites/mysite/customlist";
	const query = {
		ViewXml: "just to have a value",
	} as ICamlQuery;

	await executeCAMLQuery(mockSPRest, url, query);

	expect(global.mockGetItemsByCAMLQuery).toHaveBeenCalledTimes(1);
	expect(global.mockGetItemsByCAMLQuery).toHaveBeenCalledWith(query);
});

test("useListItem hook should toggle its loading state after api response", async () => {
	const mockSPRestAdapter = {
		...jest.requireActual("@pnp/sp/presets/all"),
		web: {
			getList: () => ({
				getItemsByCAMLQuery: () => {
					return new Promise((resolve) => {
						setTimeout(() => {
							resolve([]);
						}, 500);
					});
				},
			}),
		},
	};

	const { result, waitForNextUpdate } = renderHook<{}, IUseListItemHookResult>(
		() => useListItems(mockSPRestAdapter, "/sites/mysite/customlist", [], 0, "")
	);

	expect(result.current.isLoading).toEqual(true);

	await waitForNextUpdate();

	expect(result.current.isLoading).toEqual(false);
});

test("useListItems hook should return items returned by the endpoint", async () => {
	const expectedItems = ["item1", "item2"];

	const mockSPRestAdapter = {
		...jest.requireActual("@pnp/sp/presets/all"),
		web: {
			getList: () => ({
				getItemsByCAMLQuery: () => {
					return new Promise((resolve) => {
						setTimeout(() => {
							resolve(expectedItems);
						}, 500);
					});
				},
			}),
		},
	};

	const { result, waitForNextUpdate } = renderHook<{}, IUseListItemHookResult>(
		() => useListItems(mockSPRestAdapter, "/sites/mysite/customlist", [], 0, "")
	);

	expect(result.current.items).toEqual([]);

	await waitForNextUpdate();

	expect(result.current.items).toEqual(expectedItems);
});

test("useListItems hook should return an error if the promise gets rejected", async () => {
	const expected = new Error("there was an error");

	const mockSPRestAdapter = {
		...jest.requireActual("@pnp/sp/presets/all"),
		web: {
			getList: () => ({
				getItemsByCAMLQuery: () => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(expected);
						}, 500);
					});
				},
			}),
		},
	};

	const { result, waitForNextUpdate } = renderHook<{}, IUseListItemHookResult>(
		() => useListItems(mockSPRestAdapter, "/sites/mysite/customlist", [], 0, "")
	);

	expect(result.current.error).toEqual(null);

	await waitForNextUpdate();

	expect(result.current.error).toEqual(expected);
});
