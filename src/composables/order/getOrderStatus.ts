/**
 * getOrderStatus returns string representaion of order status
 * via switch
 * @param num value of order status as stored in db
 * @returns string or undefined
 */
export function getOrderStatus(num: number): string | undefined {
	switch (num) {
		case 1:
			return 'Executed'
		case 2:
			return 'Pending'
		case 3:
			return 'Rejected'
		case 4:
			return 'Canceled'
		default:
			return undefined
	}
}
