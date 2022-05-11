# 1.Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# list=[2,7,11,15]
# a=9
# i=0
# list1=[]
# while i<len(list):
# 	j=0
# 	while j<len(list):
# 		if list[i]+list[j] ==a:
# 			list1.append(i),list1.append(j)
# 		j+=1
# 	i+=1
# 	break
# print(list1)


# Leetcode:

# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# list=[3,2,4]
# i=0
# a=6
# list1=[]
# while i<len(list):
# 	j=1
# 	while j<len(list):
# 		if list[i]+list[j]==a:
# 			list1.append(j),list1.append(i)
# 		j+=1
# 		break
# 	i+=1
# print(list1)


# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]


list=[3,3]
i=0
a=6
list1=[]
while i<len(list):
	j=1
	while j<len(list):
		if list[i]+list[j]==a:
			list1.append(i),list1.append(j)
		j+=1
	i+=1
	break
print(list1)