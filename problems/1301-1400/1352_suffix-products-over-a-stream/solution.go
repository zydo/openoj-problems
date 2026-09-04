package main

type SuffixProducts struct {
	prefix []int64
}

func NewSuffixProductsTyped() *SuffixProducts {
	return &SuffixProducts{prefix: []int64{1}}
}

func (design *SuffixProducts) ensure() {
	if design.prefix == nil {
		design.prefix = []int64{1}
	}
}

func (design *SuffixProducts) append(num int) {
	design.ensure()
	if num == 0 {
		design.prefix = design.prefix[:1]
		return
	}
	last := design.prefix[len(design.prefix)-1]
	design.prefix = append(design.prefix, last*int64(num))
}

func (design *SuffixProducts) suffixProduct(k int) int {
	design.ensure()
	if k >= len(design.prefix) {
		return 0
	}
	return int(design.prefix[len(design.prefix)-1] / design.prefix[len(design.prefix)-1-k])
}
