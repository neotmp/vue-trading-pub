type BreadcrumbsItem = {
	id: number
	label: string
	link: boolean
	href: string
	current: boolean
}

export function getBreadcrumbsData(pageCode: number): BreadcrumbsItem[] {
	// TO DO Find a betetr way of dealing w/ 404 cases
	if (!pageCode) {
		return [{ id: 0, label: 'Home', link: true, href: '/', current: true }]
	}

	switch (pageCode) {
		case 1:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Brokers', link: false, href: '#', current: true }
			]
		case 11:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Brokers', link: true, href: '/brokers', current: false },
				{ id: 2, label: 'Edit', link: false, href: '#', current: true }
			]

		case 12:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Brokers', link: true, href: '/brokers', current: false },
				{ id: 2, label: 'Detail', link: false, href: '#', current: true }
			]

		case 13:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Brokers', link: true, href: '/brokers', current: false },
				{ id: 2, label: 'Analytics', link: false, href: '#', current: true }
			]

		case 14:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Brokers', link: true, href: '/brokers', current: false },
				{ id: 2, label: 'Add', link: false, href: '#', current: true }
			]

		case 2:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Accounts', link: false, href: '#', current: true }
			]

		case 21:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Accounts', link: true, href: '/accounts', current: false },
				{ id: 2, label: 'Edit', link: false, href: '#', current: true }
			]

		case 22:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Accounts', link: true, href: '/accounts', current: false },
				{ id: 2, label: 'Detail', link: false, href: '#', current: true }
			]

		case 23:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Accounts', link: true, href: '/accounts', current: false },
				{ id: 2, label: 'Analytics', link: false, href: '#', current: true }
			]

		case 24:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Accounts', link: true, href: '/accounts', current: false },
				{ id: 2, label: 'Add', link: false, href: '#', current: true }
			]

		case 3:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Orders', link: false, href: '#', current: true }
			]

		case 31:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Orders', link: true, href: '/orders', current: false },
				{ id: 2, label: 'Add', link: false, href: '#', current: true }
			]

		case 32:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Orders', link: true, href: '/orders', current: false },
				{ id: 2, label: 'Edit', link: false, href: '#', current: true }
			]

		case 33:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Orders', link: true, href: '/orders', current: false },
				{ id: 2, label: 'Detail', link: false, href: '#', current: true }
			]

		case 4:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Positions', link: false, href: '#', current: true }
			]

		case 41:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Positions', link: true, href: '/positions', current: false },
				{ id: 2, label: 'Add', link: false, href: '#', current: true }
			]

		case 42:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Positions', link: true, href: '/Positions', current: false },
				{ id: 2, label: 'Modify', link: false, href: '#', current: true }
			]

		case 43:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Positions', link: true, href: '/positions', current: false },
				{ id: 2, label: 'Detail', link: false, href: '#', current: true }
			]

		case 44:
			return [
				{ id: 0, label: 'Home', link: true, href: '/', current: false },
				{ id: 1, label: 'Positions', link: true, href: '/positions', current: false },
				{ id: 2, label: 'Close', link: false, href: '#', current: true }
			]

		default:
			return [{ id: 0, label: 'Home', link: false, href: '/', current: true }]
	}
}
