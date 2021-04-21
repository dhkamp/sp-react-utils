import { SPRest } from "@pnp/sp";
import { ICamlQuery } from "@pnp/sp/lists";

const defaultQuery = `<View>
	<ViewFields>
		{ViewFields}
	</ViewFields>
	<RowLimit>{RowLimit}</RowLimit>
	<Query>
		{Query}
	</Query>
</View>`;

const trimAll = (str: string) => str.replace(/\s/g, "");

export function getCAMLQuery(
	viewFields: Array<string>,
	rowLimit: number,
	where: string
): ICamlQuery {
	const vf = viewFields.map((v) => `<FieldRef Name="${v}"/>`).join("");

	const viewXML = trimAll(
		defaultQuery.replace("{RowLimit}", `${rowLimit || ""}`)
	)
		.replace("{ViewFields}", vf)
		.replace("{Query}", where);

	return {
		ViewXml: viewXML,
	};
}

export async function executeCAMLQuery(
	spAdapter: SPRest,
	listURl: string,
	query: ICamlQuery
): Promise<Array<any>> {
	return spAdapter.web.getList(listURl).getItemsByCAMLQuery(query);
}
