num= [1,1,2,3,3]
i=0
b=[]
while i<len(num):
  if num[i] not in b:
    b.append(num[i])
  i=i+1
print(b)