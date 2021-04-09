import { LightningElement } from 'lwc';

export default class PageHeaderExample extends LightningElement {
	columns = [
		{ label: 'Label', fieldName: 'name', sortable: true },
		{ label: 'Website', fieldName: 'website', type: 'url' },
		{ label: 'Phone', fieldName: 'phone', type: 'phone' },
		{ label: 'Balance', fieldName: 'amount', type: 'currency' },
		{ label: 'CloseAt', fieldName: 'closeAt', type: 'date' }
	];
	data = [
		{
			id: 1,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		},
		{
			id: 2,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		},
		{
			id: 3,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		},
		{
			id: 4,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		},
		{
			id: 5,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		},
		{
			id: 6,
			name: 'Skylar Kuhic',
			website: 'claudia.org',
			phone: '1-316-732-4745',
			amount: 985.22,
			closeAt: '06-21-2021'
		}
	];
	rowCount = this.data.length;
	fields = [
		{
			label: 'Name',
			apiName: 'Name',
			displayValue: 'Skylar Kuhic'
		},
		{
			label: 'Website',
			apiName: 'Website',
			displayValue: 'claudia.org'
		},
		{
			label: 'Phone',
			apiName: 'Phone',
			displayValue: '1-316-732-4745'
		},
		{
			label: 'Balance',
			apiName: 'Balance',
			displayValue: '$985.22'
		},
		{
			label: 'Close At',
			apiName: 'closeAt',
			displayValue: '06/21/2021'
		}
	];
}
