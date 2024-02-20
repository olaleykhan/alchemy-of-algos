# Prime Number Check: Write a function that checks if a number is prime (only divisible by 1 and itself).


def primeChecker(n:int):
    for i in range(2,n):
        # print(i, " : this is I")
        if(n%i==0):
            print(n," is false")
            return False
    print(n, " is true")
    return True

primeChecker(7)
primeChecker(10)
primeChecker(13)
primeChecker(1)
primeChecker(2)
primeChecker(0)