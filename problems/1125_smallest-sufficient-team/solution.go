import "sort"

func smallestSufficientTeam(reqSkills []string, people [][]string) []int {
	skillIndex := make(map[string]int)
	for i, skill := range reqSkills {
		skillIndex[skill] = i
	}

	np := len(people)
	masks := make([]int, np)
	for i := range people {
		for _, skill := range people[i] {
			masks[i] |= 1 << skillIndex[skill]
		}
	}

	full := (1 << len(reqSkills)) - 1

	// Emulate an insertion-ordered dict: state -> team.
	order := []int{0}        // states in insertion order
	teams := [][]int{{}}     // team per state, parallel to order
	pos := map[int]int{0: 0} // state -> index into order/teams

	for i := 0; i < np; i++ {
		snap := len(order)
		// new_entries: insertion-ordered
		neOrder := []int{}
		neTeams := [][]int{}
		nePos := map[int]int{}
		for s := 0; s < snap; s++ {
			state := order[s]
			team := teams[s]
			newState := state | masks[i]
			candidate := make([]int, len(team), len(team)+1)
			copy(candidate, team)
			candidate = append(candidate, i)
			idx, inDp := pos[newState]
			accept := !inDp || len(teams[idx]) > len(candidate)
			if accept {
				idx2, inNe := nePos[newState]
				accept2 := !inNe || len(neTeams[idx2]) > len(candidate)
				if accept2 {
					if inNe {
						neTeams[idx2] = candidate
					} else {
						nePos[newState] = len(neOrder)
						neOrder = append(neOrder, newState)
						neTeams = append(neTeams, candidate)
					}
				}
			}
		}
		for k, ns := range neOrder {
			if idx, ok := pos[ns]; ok {
				teams[idx] = neTeams[k]
			} else {
				pos[ns] = len(order)
				order = append(order, ns)
				teams = append(teams, neTeams[k])
			}
		}
	}

	res := append([]int(nil), teams[pos[full]]...)
	sort.Ints(res)
	return res
}
