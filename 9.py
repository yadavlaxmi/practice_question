x=int(input("enter a number"))
rev=0
while x>0:
    b=x%10
    rev=rev*10+b
    x=x//10
print("revse=",rev)