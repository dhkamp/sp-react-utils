import { SPRest } from "@pnp/sp/presets/all";
import * as React from "react";
import { getCAMLQuery, executeCAMLQuery } from "./useListItems.core";

interface IUseListItemsProps {
	spRestAdapter: SPRest;
	component(items: Array<any>, isLoading: boolean): React.ReactNode;
	url: string;
	viewfields: Array<string>;
	rowlimit?: number;
	where: string;
}

interface IUseListItemsState {
	items: Array<any>;
	isLoading: boolean;
	error: Error;
}

export class UseListItems extends React.PureComponent<
	IUseListItemsProps,
	IUseListItemsState
> {
	static defaultProps: Pick<
		IUseListItemsProps,
		"viewfields" | "rowlimit" | "where"
	> = {
		viewfields: [],
		rowlimit: 0,
		where: "",
	};
	constructor(props: IUseListItemsProps) {
		super(props);

		this.state = {
			items: [],
			isLoading: true,
			error: null,
		};
	}
	async componentDidMount() {
		try {
			const result = await executeCAMLQuery(
				this.props.spRestAdapter,
				this.props.url,
				getCAMLQuery(
					this.props.viewfields,
					this.props.rowlimit,
					this.props.where
				)
			);

			this.setState(() => ({
				isLoading: false,
				items: result,
			}));
		} catch (err) {
			this.setState(() => ({
				isLoading: false,
				error: err,
			}));
		}
	}
	render() {
		return this.props.component(this.state.items, this.state.isLoading);
	}
}
