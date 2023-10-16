func twoSum(nums []int, target int) []int {
    
	// create our empty hashmap for tracking numbers we have seen
    myMap := make(map[int]int)

	// loop through the array
    for i, num := range nums{
		// check if the complement of the current number is in the hashmap
        comp := target - num;		
        idx,ok := myMap[comp]
		// if it is, return the current index and the index of the complement
        if ok {
            return []int{i,idx}
        }
		// if it is not, add the current number to the hashmap
        myMap[num] =i
    }
	// if we get here, there is no solution
	// return an empty array so we don't geta compile error
    return []int{}
}