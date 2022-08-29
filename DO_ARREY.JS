list1=["a","b"]
list2=[1,2,3,4,8,9]
c=[]
d=[]
i=0
e=[]
while (i<list1.length){
    d.push(c+list2)
    c.push(list1[i],list2[i])
    i++
}
d=c.concat(list2)
var n=[...new Set(d)];
console.log(n);