
question=["how many continent are there?","what is the capital of india?","Ng me kaun sa course padhaya jata hai?"]
option=[["four","nine","seven","eigth"],["chandigarah","bhopal","channai","delhi"],["software engineering","counsling tourism","agricalture"]]
ans=[2,1,4]
i=0
answer_list=[3,4,1]
help_list=[[3,4]],[[1,4]],[[1,2]]
life_line=0
while i<len(question):
    print("your question")
    print()
    print(question[i])
    print("your option")
    j=0
    while j<len(option[i]):
        print(j+1,option[i][j])
        j=j+1
    solution=input("enter your answer/life_line5050=")
    if solution=="life_line5050":
        if life_line==0:
            print(help_list[i])
            check=int(input("enter the number="))
            if check==answer_list[i]:
                print("congrats! your answer is right")
                life_line=life_line+1
            else:
                print("So sad your answer is wrong")
                break
        else:
            print("you are already use your life_line")
            user=int(input("enter your correct answer="))
            a=answer_list[i]
            if user==a:
                print("congrats your answer is right")
            else:
                print("So sad your answer is wrong")
                break
    elif(int(solution)==answer_list[i]):
        print("congrats your answer is right")
    else:
        print("So sad your answer is wrong")
        break
    i=i+1