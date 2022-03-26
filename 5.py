a=[1,2,3]
b=[4,5,6,7]
a.extend(b)
i=0
sum=0
while i<len(a):
  sum=sum+a[i]
  i=i+1
print(sum/2)

