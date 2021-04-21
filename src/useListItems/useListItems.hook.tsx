import { useState, useEffect } from "react";
import { SPRest } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";

import { getCAMLQuery, executeCAMLQuery } from "./useListItems.core";

export interface IUseListItemHookResult {
	items: Array<any>;
	isLoading: boolean;
	error: Error;
}

export function useListItems(
	spRest: SPRest,
	url: string,
	viewfields: Array<string> = [],
	rowlimit: number = 0,
	where: string = ""
): IUseListItemHookResult {
	const [items, setItems] = useState<Array<any>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error>(null);

	useEffect(() => {
		let isUnmounted = false;

		function handleItemsResponse(items: Array<any>) {
			if (isUnmounted) return;
			setItems(items);
			setIsLoading(false);
		}

		function handleCatchError(err: Error) {
			if (isUnmounted) return;
			setError(err);
			setIsLoading(false);
		}
		executeCAMLQuery(spRest, url, getCAMLQuery(viewfields, rowlimit, where))
			.then(handleItemsResponse)
			.catch(handleCatchError);

		return () => {
			isUnmounted = true;
		};
	}, [url, rowlimit, viewfields, where]);

	return { items, isLoading, error };
}
