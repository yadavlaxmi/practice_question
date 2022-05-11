# Input: nums = [1,1,2]
# Output: 2, nums = [1,2,_]

list=[1,1,2]
i=0
list2=[]
while i<len(list):
    if list[i] not in list2:
        list2.append(list[i])
    i+=1
print(list2)