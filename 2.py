a=int(input("enter the number="))
i=0
while i<a:
  b=a%10
  b=b//10
  i=i+1
if a==b:
  print("palidrome")
else:
  print("not palidrome")