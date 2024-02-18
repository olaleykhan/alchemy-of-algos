print('Hello world \n Making  a quick passwird checker')

input("please input your user name: ")
p_word_accepted = False

while(p_word_accepted==False):
    p_word = input("now, please input your password: ")
    p_word_len = len(p_word)
    p_word_display = "*" * p_word_len

    if( p_word_len< 8 ):
        print(f'your password {p_word_display} is too short. password is minimum of 8 characters')
    elif(p_word_len > 10):
        print(f'password too long')
    else:
        print(f'password {p_word_display} accepted. Please, Welcome on board')
        p_word_accepted = True