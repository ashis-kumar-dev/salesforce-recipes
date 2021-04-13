import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountsDataProvider.getAccounts';

export default class FullHeightGridExample extends LightningElement {
	isLoading = true;
	columns = [
		{ label: 'Name', fieldName: 'Name', editable: true, sortable: true },
		{ label: 'Website', fieldName: 'Website', type: 'url', sortable: true },
		{ label: 'Phone', fieldName: 'Phone', type: 'phone', sortable: true }
	];
	sortedBy;
	sortedDirection;
	@track wiredGetAccountsResponse;
	@track data;
	@track error;
	@track rows = 0;

	@wire(getAccounts)
	wiredGetAccounts(response) {
		this.wiredGetAccountsResponse = response;
		if (response.data) {
			this.data = response.data;
			this.error = undefined;
			this.rows = response.data.length;
		} else if (response.error) {
			this.error = response.error.body?.message;
			this.data = undefined;
			this.rows = 0;
		}
		this.isLoading = false;
	}

	updateColumnSorting(event) {
		const fieldName = event.detail.fieldName;
		const sortDirection = event.detail.sortDirection;
		// assign the latest attribute with the sorted column fieldName and sorted direction
		this.sortedBy = fieldName;
		this.sortedDirection = sortDirection;
		this.data = this.sortData(fieldName, sortDirection);
	}

	sortData(fieldName, sortDirection) {
		const sortedData = JSON.parse(JSON.stringify(this.data));
		const key = (item) => item[fieldName]?.toLowerCase() ?? '';
		const order = sortDirection === 'asc' ? 1 : -1;
		sortedData.sort((self, other) => {
			return (
				order * ((key(self) > key(other)) - (key(other) > key(self)))
			);
		});
		return sortedData;
	}
}
