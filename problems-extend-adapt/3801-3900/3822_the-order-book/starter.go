package main

type OrderBook struct{}

func NewOrderBookTyped() *OrderBook {
	panic("TODO")
}

func (design *OrderBook) addOrder(orderId int, orderType string, price int) {
	panic("TODO")
}

func (design *OrderBook) modifyOrder(orderId int, newPrice int) {
	panic("TODO")
}

func (design *OrderBook) cancelOrder(orderId int) {
	panic("TODO")
}

func (design *OrderBook) getOrdersAtPrice(orderType string, price int) []int {
	panic("TODO")
}
