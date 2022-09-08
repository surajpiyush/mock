let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr=[];
for(let x=0;x<arr1.length;x++){
    arr[x]=arr1[x]
}
for(let y=0;y<arr2.length;y++){
    arr[arr1.length+y]=arr2[y]
}
console.log(arr);