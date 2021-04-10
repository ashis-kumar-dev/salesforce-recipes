import { LightningElement } from 'lwc';

export default class ModalExample extends LightningElement {
	handleClick() {
		const modal = this.template.querySelector('c-modal');
		if (modal) {
			modal.show();
		}
	}
	handleCancel() {
		const modal = this.template.querySelector('c-modal');
		if (modal) {
			modal.hide();
		}
	}
}
