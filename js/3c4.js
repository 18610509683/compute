var ar3=[]
for(var i=9;i>=0;i--){
	for(var j=i-1;j>=0;j--){
		for(var k=j-1;k>=0;k--){
			var str=i+''+j+''+k
			ar3.push(str)
		}
	}
}































function getyl34(data) {
	var Arr = [];
	ar3.map((vv,kk)=>{
		var ar=[];
		var temp=0;
		var cs=0;
		var h=[];
		data.map((v,k)=>{
			var res=ylTest(v,vv)
			if(res[0]){
				ar.push(v);
				h.push(v)
				temp=0;
				cs+=1;
			}else{
				temp+=1;
				ar.push(temp)
				h.push(res[1])
			}

		})
		var obj=obj||{}
		obj={};
		obj['yl']=ar;
		obj.cs=cs;
		obj.h=h;
		obj.str=vv;
		Arr.push(obj)
	})
	Arr.sort((a,b)=>b.cs-a.cs)
	console.log(Arr)
	return Arr

}

var result=getyl34(data)

function ylTest(v,vv){
	var ar=[];
	for(var i=0;i<v.length;i++){
		if(vv.indexOf(v[i])!=-1){
			ar.push(v[i])
		}
	}
	if(ar.length>3){
		return [1,v]
	}else{
		return [0,ar.sort().join('')]
	}
}