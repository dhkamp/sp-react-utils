import * as React from "react";
import { getCAMLQuery, executeCAMLQuery } from "./useListItems.core";

interface IUseListItemsProps {
	children(items: Array<any>, isLoading: boolean): React.ReactNode;
}

interface IUseListItemsState {
	items: Array<any>;
	isLoading: boolean;
}

export class UseListItems extends React.PureComponent<
	IUseListItemsProps,
	IUseListItemsState
> {
	constructor(props: IUseListItemsProps) {
		super(props);

		this.state = {
			items: [],
			isLoading: false,
		};
	}
	componentDidMount() {}
	render() {
		return this.props.children(this.state.items, this.state.isLoading);
	}
}
