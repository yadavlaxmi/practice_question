# Input: dividend = 10, divisor = 3
# Output: 3
# Explanation: 10/3 = 3.33333.. which is truncated to 3.


dividend=10
divisor=3
def Div(dividend,divisor):
    if dividend<divisor:
        return 0
    return 1 + Div(dividend-divisor, divisor)
print("result ",Div(dividend,divisor))