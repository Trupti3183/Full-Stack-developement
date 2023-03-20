a = int(input("Enter First Number"))
b = int(input("Enter Second Number"))
c = int(input("Enter third Number"))

if a>b and a>c: # colon represents indendation marker
    print(f"{a} is greater")
elif b>c:
    print(f"{b} is greater")    
else:
    print(f"{c} is greater")