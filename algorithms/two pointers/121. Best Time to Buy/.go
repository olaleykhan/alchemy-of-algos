func maxProfit(prices []int) int {
    l := 0;
    h := 0;
    max:= 0;

    for h < len(prices) {
        curr := prices[h]- prices[l]
        if(curr<0){
            l=h;
            h++
        }else{
            max = getMax(max,curr)
            h++
        }
    }
    return max;
    
}

func getMax(a,b int)int {
    if a>b {
        return a
    }
    return b
}