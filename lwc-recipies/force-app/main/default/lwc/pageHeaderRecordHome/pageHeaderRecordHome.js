import { api, LightningElement } from 'lwc';

export default class PageHeaderRecordHome extends LightningElement {
	@api iconName;
	@api objectApiName;
	@api objectDisplayName;
	@api recordName;
	@api fields = [];

	isSelected = false;

	handleClick() {
		this.isSelected = !this.isSelected;
	}
}
