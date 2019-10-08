let a=[1,4,2,5,3,6]

let b=a.filter((v,i)=>{
	if(v>2){
		return true
	}else{
		return false
	}
})

let c=a.sort((a,b)=>{
	return a-b
})

let d=a.reduce((sum,v)=>{
	return sum+v
},0)

console.log(b);
console.log(c);
console.log(d);
