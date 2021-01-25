import { useState, useEffect } from "react";
import { SPRest } from "@pnp/sp/presets/all";
import { ICamlQuery } from "@pnp/sp/lists";

function getQuery(
	viewfields: Array<string>,
	where: string = "",
	rowlimit: number = 0
): ICamlQuery {
	const vf = `<ViewFields>${viewfields.reduce((acc, v) => {
		return (acc += `<FieldRef Name='${v}' />`);
	}, "")}</ViewFields>`;

	const r = rowlimit > 0 ? `<RowLimit>${rowlimit}</RowLimit>` : "";

	return {
		ViewXml: `<View>${vf}${r}<Query>${where}</Query></View>`,
	};
}

export function useListItems(
	spRest: SPRest,
	url: string,
	viewfields: Array<string> = [],
	where: string = "",
	rowlimit: number = 0
): [Array<any>, Error] {
	const [items, setItems] = useState<Array<any>>([]);
	const [error, setError] = useState<Error>(null);

	useEffect(() => {
		function handleItemsResponse(items: Array<any>) {
			setItems(items);
		}

		function handleCatchError(err: Error) {
			setError(err);
		}
		spRest.web
			.getList(url)
			.getItemsByCAMLQuery(getQuery(viewfields, where, rowlimit))
			.then(handleItemsResponse)
			.catch(handleCatchError);
	}, [url, rowlimit, viewfields, where]);

	return [items, error];
}
