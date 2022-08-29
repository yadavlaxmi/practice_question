# number=int(input("enter the number"))
# a=0
# b=1
# c=1
# print(a)
# print(b)
# while c<=number:
#     print(c)
# a=b
# b=c
# c=a+b
num=int(input('enter'))
a=0
b=1
while a<=num:
    print(a)
    a,b=b,a+b
