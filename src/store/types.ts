export type TServerResponse = {
	code: number
	message: string
	error: TError
	data: TData
}

export type TData = {
	id: number
	brokers: TBroker[]
}

export type TError = {
	error: object
}

export type TBroker = {
	id: number
	name: string
	country: string
	phone: string
	email: string
	memo: string
	openedAt: Date
	editedAt: string
	active: boolean
	accounts: TAccount[] | null
	orders: TOrder[] | null
	positions: TPosition[] | null
	transactions: TTransaction[] | null
}

export type TOrder = {
	id: number
	brokerId: number
	accountId: number
	type: number
	volume: number
	pair: string
	timestamp: Date
	timestamp_tmp: Date
	price: number
	sl: number
	ts: number
	tp: number
	memo: string
	status: number
	pairId: number
	margin: number
	commission: number
	spreadPips: number
	direction: number
}

export type TPosition = {
	id: number
	brokerId: number
	accountId: number
	orderId: number
	pair: string
	pairId: number
	volume: number
	timestamp: Date
	type: number
	price: number
	sl: number
	ts: number
	tp: number
	profit: number
	memo: string
	change: number
	commission: number
	margin: number
	swap: number
	direction: number
}

export type TAccount = {
	id: number
	brokerId: number
	broker: string
	balance: number
	contract: string
	type: number
	leverage: number
	lot: number
	stopOut: number
	equity: number
	freeMargin: number
	marginLevel: number
	margin: number
	openedAt: Date
	closedAt: string
	active: boolean
	hedge: boolean
	memo: string
	contractId: number
	currencyId: number
	currency: string
	profit: number
	name: string
	change: string
}

export type TTransaction = {
	id: number
	timestamp: Date
	brokerId: number
	accountId: number
	debitId: number
	creditId: number
	currencyId: number
	direction: number
	amount: number
	memo: string
	status: number
	external: boolean
	fee: number
}
