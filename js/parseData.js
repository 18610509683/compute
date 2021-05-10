;(()=>{
	var ar=data.map((v,k)=>{
		return v[0]
	})
	data.map((v,k)=>{
		if(k!=0){
			if(v.indexOf(ar[k-1][0])!=-1){
				var t=dfd.testType(v.substr(1));
//				if(t>)
				console.log(data[k-1],v,t)
			}
		}
	})
})();
