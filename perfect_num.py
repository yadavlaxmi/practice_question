num=int(input("enter the number"))
i=1
sum=0
while i<num:
    if num%i==0:
        sum=sum+i
    i=i+1
if num==sum:
    print("perfect")
else:
    print("non")