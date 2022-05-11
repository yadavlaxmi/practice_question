# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

x=121
y=x
rev=0
while x>0:
    z=x%10
    rev=rev*10+z
    x=x//10
if y==rev:
    print("true")
else:
    print("false")