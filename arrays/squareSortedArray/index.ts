// You are given an array of Integers in which each subsequent value is not less than the previous value.
//  Write a function that takes this array as an input and returns a ne
//  w array with the squares of each number sorted in ascending order.

// Brute force
function squareSortedArray(arr:number[]):number[]{
    const temp:number[] = [];

    arr.forEach(i=>{
        temp.push(i**2)
    })

    const sorted = temp.sort((a,b)=>a-b)

    console.log(arr, "gives : ", sorted)

    return sorted;
}

// squareSortedArray([1,2,4])
// squareSortedArray([-3,0,0,0,3])
// squareSortedArray([-11,-3,-1, 0, 2,7,9,11,23,45])
// squareSortedArray([-11,-3,-1, 0, 7, 2])
// squareSortedArray([-11,-3,-1, 0, 7, 2])
// squareSortedArray([])


// However, the above can be optimized using the two pointer technique
// let's see how. 
// two ways, either append then revers, or create fixed array and insert accordingly.
// first, I will append and then reverse
// TODO: I will NOT be writing the secod solution. unless something changes later
// TODO: 
function squareSortedArray2(arr:number[]):number[]{
    const temp=[];
    let p1=0;
    let p2=arr.length-1;

    while(p2>=p1){
        const left = (arr[p1])**2;
        const right = (arr[p2])**2;
        if(right>left){
            temp.push(right);
            p2--
        }else{
            temp.push(left);
            p1++
        }
    }
    const output = temp.reverse();
    console.log(arr, "gives : ", output)
    return output;
}


squareSortedArray2([1,2,4])
squareSortedArray2([-3,0,0,0,3])
squareSortedArray2([-11,-3,-1, 0, 2,7,9,11,23,45])
squareSortedArray2([-11,-3,-1, 0,3, 7])
squareSortedArray2([-11,-3,-1, 0, 1, 2])
squareSortedArray2([])