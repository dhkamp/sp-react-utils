import { SPRest, ICamlQuery } from "@pnp/sp/presets/all";
import { useListItems } from "./useListItems.hook";

import { executeCAMLQuery, getCAMLQuery } from "./useListItems.core";

jest.mock("react", () => ({
	...jest.requireActual("React"),
	useEffect: global.useEffect,
	useState: (val: any) => [val, (v: any) => (val = v)],
}));

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

	const response = await executeCAMLQuery(mockSPRest, url, query);

	expect(global.mockGetItemsByCAMLQuery).toHaveBeenCalledTimes(1);
	expect(global.mockGetItemsByCAMLQuery).toHaveBeenCalledWith(query);
});
