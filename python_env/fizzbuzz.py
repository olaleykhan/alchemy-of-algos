# write a program that prints fizz for multiples of 3, buzz for multiples of 5 and fizzbuzz for multiples of 3 and 5

def fizzbuzzer(n:int):
    curr=1
    while(curr<=n):
        if(curr%3==0 and curr%5 != 0):
            print("fizz")
        elif(curr%5==0 and curr%3 != 0):
            print("buzz")
        elif(curr%3==0 and curr%5==0):
            print("fizzbuzz")
        else:
            print("*")
        curr+=1



fizzbuzzer(100)