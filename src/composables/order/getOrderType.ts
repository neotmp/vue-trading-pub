/**
 * getOrderType returns string representation of order type
 * vie switch
 * @param num is value of order type
 * @returns  string or undefined
 */
export function getOrderType(num: number): string | undefined {
	switch (num) {
		case 1:
			return 'Market'
		case 2:
			return 'Conditional'
		case 2:
			return 'Modify'
		default:
			return undefined
	}
}
