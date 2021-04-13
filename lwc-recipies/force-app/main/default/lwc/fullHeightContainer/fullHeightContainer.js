import { LightningElement } from 'lwc';

export default class FullHeightContainer extends LightningElement {
	renderedCallback() {
		const grid = this.template.querySelector('div.container');
		if (grid) {
			const rect = grid.getBoundingClientRect();
			grid.style.setProperty('--y-pos', `${rect.y}px`);
		}
	}
}
