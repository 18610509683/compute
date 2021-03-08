function getDGYL(H4) {
	var obj = obj || {};
	for(var i=0;i<10;i++){
		var ar=[];
		var temp=0;
		cs1=cs2=cs3=cs4=cs5=0
		H4.map((v,k)=>{
			var res=ylTest(v,i)
			if(res){
				ar.push(-res);
				temp=0;
				var m='cs'+Math.abs(res);
				window[m]+=1;
				cs5+=1;
			}else{
				temp+=1;
				ar.push(temp)
			}

		})
		obj[i]={};
		obj[i]['yl']=ar;
		for(var j=1;j<6;j++){
			var s='cs'+j;
			obj[i][s]=window[s]
		}
	}
	console.log(obj)
	return obj
}





















var DGYL=getDGYL(H4);

function ylTest(str,n) {
	var arr=[];
	var len=str.length;
	var cs=0;
	for(var i=0;i<len;i++){
		if(arr.indexOf(str[i])==-1){
			arr.push(str[i])
		}
		if(str[i]==n){
			cs+=1;
		}
	}
	if(arr.length<4&&cs){
		return cs;
	}else{
		return 0
	}
}
