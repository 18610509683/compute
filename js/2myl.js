var all2='98,97,96,95,94,93,92,91,90,87,86,85,84,83,82,81,80,76,75,74,73,72,71,70,65,64,63,62,61,60,54,53,52,51,50,43,42,41,40,32,31,30,21,20,10';
all2=all2.split(',')



































function getyl2(H4) {
	var Arr = [];
	all2.map((vv,kk)=>{
		var ar=[];
		var temp=0;
		var cs=0;
		var h=[];
		H4.map((v,k)=>{
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
//	console.log(Arr)
	return Arr
//	for(var i=0;i<10;i++){
//		var ar=[];
//		var temp=0;
//		cs1=cs2=cs3=cs4=cs5=0
//		H4.map((v,k)=>{
//			var res=ylTest(v,i)
//			if(res){
//				ar.push(-res);
//				temp=0;
//				var m='cs'+Math.abs(res);
//				window[m]+=1;
//				cs5+=1;
//			}else{
//				temp+=1;
//				ar.push(temp)
//			}
//
//		})
//		obj[i]={};
//		obj[i]['yl']=ar;
//		for(var j=1;j<6;j++){
//			var s='cs'+j;
//			obj[i][s]=window[s]
//		}
//	}
//	console.log(obj)
	return obj
}
var result=getyl2(H4)
//console.log(H4)
function ylTest(v,vv){
	var ar=[];
	for(var i=0;i<v.length;i++){
		if(vv.indexOf(v[i])!=-1){
			ar.push(v[i])
		}
	}
	if(ar.length>2){
		return [1,v]
	}else if(ar.length==2){
		return [0,ar.sort().join('')]
	}else{
		return [0,ar.sort().join('')]
	}
}
