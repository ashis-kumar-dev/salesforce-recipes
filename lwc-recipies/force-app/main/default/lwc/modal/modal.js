import { api, LightningElement } from 'lwc';

const headerClasses = ['slds-modal__header'];
const footerClasses = ['slds-modal__footer'];
const modalClasses = ['slds-modal', 'slds-fade-in-open'];

export default class Modal extends LightningElement {
	showModal = false;
	@api showFooter = false;
	@api title;
	@api variant = 'base';
	@api size = 'normal';

	@api show() {
		this.showModal = true;
	}

	@api hide() {
		this.showModal = false;
	}

	get modalClass() {
		switch (this.size) {
			case 'small':
				return [...modalClasses, 'slds-modal_small'].join(' ');
			case 'medium':
				return [...modalClasses, 'slds-modal_medium'].join(' ');
			case 'large':
				return [...modalClasses, 'slds-modal_large'].join(' ');
			default:
				return [...modalClasses].join(' ');
		}
	}

	get headerClass() {
		if (!this.showHeader) {
			return [...headerClasses, 'slds-modal__header_empty'].join(' ');
		}
		return headerClasses.join(' ');
	}

	get footerClass() {
		if (this.variant === 'footer-directional') {
			return [...footerClasses, 'slds-modal__footer_directional'].join(
				' '
			);
		}
		return [...footerClasses].join(' ');
	}

	get showHeader() {
		return this.title && this.variant !== 'no-header';
	}

	handleClose() {
		this.dispatchEvent(new CustomEvent('close'));
		this.hide();
	}
}
