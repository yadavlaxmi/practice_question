# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

list=[-1,0,3,5,9,12]
i=0
while i<len(list):
    if list[i]==9:
        print(i)
    i+=1