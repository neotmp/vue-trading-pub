import { orderDetail } from './orderDetail'
import { list } from './orderList'
import { orderState } from './orderState'
import { editOrder } from './editOrder'
import { submitCreateOrder } from './submitCreateOrder'
import { submitEditOrder } from './submitEditOrder'

export function useOrder() {
	const { orderData, ordersList, payload } = orderState()
	return {
		//local state
		orderData,
		payload,
		ordersList,
		//methods
		submitCreateOrder,
		submitEditOrder,
		editOrder,
		list,
		orderDetail
	}
}
