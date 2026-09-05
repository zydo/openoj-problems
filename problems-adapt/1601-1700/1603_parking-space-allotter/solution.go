package main

type ParkingAllotter struct {
	slots [4]int
}

func NewParkingAllotterTyped(big int, medium int, small int) *ParkingAllotter {
	return &ParkingAllotter{slots: [4]int{0, big, medium, small}}
}

func (design *ParkingAllotter) addCar(carType int) bool {
	if design.slots[carType] > 0 {
		design.slots[carType]--
		return true
	}
	return false
}
