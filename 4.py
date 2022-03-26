target=6
n=[7,2,4]
i=0
a1=[]
while i<len(n):
  j=i
  a2=[]
  while j<len(n):
    m=n[i]+n[j]
    if m==target:
      a1.append(i)
      a2.append(j)
      a1.extend(a2)
    j=j+1
  i=i+1
print(a1)