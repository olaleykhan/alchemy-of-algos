package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Hello go World!")
	fizzBuzz()
	fmt.Println("When's Saturday?")
	today := time.Now().Weekday()
	print(today);
}


func fizzBuzz(){
	
	for i :=1; i<=100 ; i++ {
		if i%3 == 0 && i%5 == 0{
			fmt.Println("fizz-buzz")
		} else if i%3 == 0{
			fmt.Println("fizz")
		} else if i%5 == 0{
			fmt.Println("buzz")
		} else{
			fmt.Println(i)
		}

	}
}
