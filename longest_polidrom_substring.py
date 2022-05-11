# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.

s="babad"
b=(s[-3::-1])
print(b)