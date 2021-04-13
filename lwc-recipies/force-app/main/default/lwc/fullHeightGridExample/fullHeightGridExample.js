import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountsDataProvider.getAccounts';

export default class FullHeightGridExample extends LightningElement {
	isLoading = true;
	columns = [
		{ label: 'Name', fieldName: 'Name' },
		{ label: 'Website', fieldName: 'Website', type: 'url' },
		{ label: 'Phone', fieldName: 'Phone', type: 'phone' }
	];
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
}
