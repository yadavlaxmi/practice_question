a=[2,36,44,22,3,4,5,6]
l=[]
i=0
while i<len(a):
    s=' '
    j=0
    d=str(a[i])
    while j<len(d):
        if d[j]=='1':
            s=s+'one'
        if d[j]=='2':
            s=s+'two'
        if d[j]=='3':
            s=s+'three'
        if d[j]=='4':
            s=s+'four'
        if d[j]=='5':
            s=s+'five'
        if d[j]=='6':
            s=s+'six'
        if d[j]=='7':
            s=s+'seven'
        if d[j]=='8':
            s=s+'eight'
        if d[j]=='9':
            s=s+'nine'
        if d[j]=='0':
            s=s+'zero'
        j+=1
    i=i+1
    l.append(s)
print(l)
