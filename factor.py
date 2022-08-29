a=int(input("enter the number"))
i=1
while i<=a:
    if a%i==0:
        print("factor of ",a,"is",i,end=",")
    i=i+1