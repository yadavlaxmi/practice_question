# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

list=[2,4,3]
list1=[5,6,4]
i=0
while list>0:
    b=list%10
    rev=rev*10+b
    list=list//10
    i+=1
print(rev)