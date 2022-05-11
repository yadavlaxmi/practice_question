# 5.longest substring repeating characters 
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

s="abcabcbb"
i=0
c=0
l=[]
while i<len(s):
    if s[i] not in l:
        l.append(s[i])
        c+=1
    i+=1
print(c)
