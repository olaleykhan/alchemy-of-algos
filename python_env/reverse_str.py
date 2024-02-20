
# Reverse a String: Write a function that reverses the order of characters in a string.


def reverseStr(str:str):
    output:str = ""
    for char in str:
        output=char + output
    print(f'{str} reversed is {output}')

reverseStr("kyle xy")