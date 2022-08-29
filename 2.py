num=int(input("enter the number"))
num1=int(input("enter the number"))
while num<=num1:
    i=1
    while i<=10:
        if num%2!=0:
            b=i*num
            print(b)
        i=i+1
    num=num+1

