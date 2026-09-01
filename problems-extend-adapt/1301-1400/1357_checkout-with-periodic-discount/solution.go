package main

// A product-to-price map plus a served-customer counter; every n-th
// customer pays bill * (100 - discount) / 100.
type DiscountRegister struct {
	n         int
	discount  int
	prices    map[int]int
	customers int
}

func NewDiscountRegisterTyped(n int, discount int, products []int, prices []int) *DiscountRegister {
	catalog := make(map[int]int, len(products))
	for i, id := range products {
		catalog[id] = prices[i]
	}
	return &DiscountRegister{n: n, discount: discount, prices: catalog}
}

func (design *DiscountRegister) getBill(product []int, amount []int) float64 {
	bill := 0
	for j, id := range product {
		bill += design.prices[id] * amount[j]
	}
	design.customers++
	if design.customers%design.n == 0 {
		return float64(bill*(100-design.discount)) / 100.0
	}
	return float64(bill)
}
