import { api, LightningElement } from 'lwc';

export default class PageHeaderObjectHome extends LightningElement {
	@api iconName;
	@api title;
	@api subtitle;
	@api rowCount;
	now = Date.now();
}
