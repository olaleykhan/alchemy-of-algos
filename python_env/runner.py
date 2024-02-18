userName = input("Please enter your first name \n")


print(" your name is ", userName)


age = input("How old are you? please enter a valid age : ")

if(age< 0):
    print("you are not human. please go back to your universe")
elif(age>0 and age < 21):
    print(f"sorry you are to young. come back in {21-age} years. ")
elif(age < 100):
    print("please welcome in. make sure to spend all of your money and have a great time. ")
else:
    print("you are a dinosaur. you should actually be dead ")
