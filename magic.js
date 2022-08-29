var a=[1,3,4,10,3];
for(var i=0;i<a.length;i++){
    for(j=0;j<=i;j++){
    if(a[j]%2==a[i] ||  a[i]==a[j]*2){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
}
// console.log("true");
