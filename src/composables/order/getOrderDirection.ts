/**
 * GetOrderDirection returns a string version of order (Buy or Sell) direction
 * @param num value of order direction as stored in db
 * @returns string or undefined
 */
export function getOrderDirection(num: number): string | undefined {
	switch (num) {
		case 1:
			return 'Buy'
		case 2:
			return 'Sell'
		default:
			return undefined
	}
}
