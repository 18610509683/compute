var data = undefined;
var Df = function() {
	var data = (function(n) {
		var ar = [];
		for(var i = 0; i < n; i++) {
			var temp = Math.round(Math.random() * 100000).toString();
			var str = '00000';
			var len = temp.length;
			var st = str.substr(len);
			temp = st + temp;
			ar.push(temp)
		}
		return ar;
	}(100));
	this.getData = function() {
		return data;
	};
	var H4 = (function() {
		var ar = [];
		for(var i in data) {
			var str = data[i].substr(1);
			ar.push(str)
		}
		return ar
	}());
	this.getH4 = function() {
		return H4;
	};
	var zh4m = (function() {
		var obj = {}
		var n = 0;
		for(let i = 9; i > -1; i--) {
			for(let j = i - 1; j > -1; j--) {
				for(let k = j - 1; k > -1; k--) {
					for(let m = k - 1; m > -1; m--) {
						let t = i + '' + j + k + m;
						obj[t] = [];
						n += 1;
					}
				}
			}
		}
		return obj
	}());
	this.getZh4m = function() {
		return zh4m;
	};
	this.testType = function(str) {
		let obj = {}
		for(let i = 0; i < 4; i++) {
			let cs = 1;
			for(let j = i + 1; j < 4; j++) {
				if(str[j] == str[i]) {
					cs += 1;
				}
			}
			if(obj[str[i]]) {

			} else {
				obj[str[i]] = cs;
			}
		}
		var res = undefined;
		let arr = [];
		for(let i in obj) {
			arr.push(obj[i])
		}
		let tem = arr.sort().join('');
		switch(tem) {
			case '4':
				res = 4;
				break;
			case '13':
				res = 3;
				break;
			case '22':
				res = 2;
				break;
			case '112':
				res = 1;
				break;
			default:
				res = 0;
				break;
		}
		return res
	};
	this.filterData = function(n) {
		var res = [];
		var data = H4;
		for(let i in data) {
			var ty = this.testType(data[i]);
			if(ty == n) {
				res.push(data[i])
			}
		}
		return res;
	};
	this.watchYl = function() {
		var need = H4;
		for(let i in need) {
			let r = this.testType(need[i]);
			if(r == 0) {
				let data = need.slice(i * 1)
				this.getNext(need[i], data)
			}
			//			console.log(need[i],r,i)
		}
	};
	this.getNext = function(str, data) {

	};
	this.getHe = function(data) {
		var result=data.map((v, k) => {
			var len = v.length;
			var obj = {
				hm: v,
				pos: {

				},
				color: new Array(5).fill('gray'),
				daxiao: [],
				dansh: []
			}
			var da = ['9', '8', '7', '6', '5'],
				dan = ['9', '7', '5', '3', '1']
			for(var i = 0; i < len; i++) {
				var ar = [i]
				if(da.indexOf(v[i]) != -1) {
					obj.daxiao.push('大')
				} else {
					obj.daxiao.push('小')
				}
				if(dan.indexOf(v[i]) != -1) {
					obj.dansh.push('单')
				} else {
					obj.dansh.push('双')
				}
				for(var j = i + 1; j < len; j++) {
					if(v[i] == v[j]) {
						ar.push(j);
						if(i == 0) {
							obj.color.splice(i, 1, 'blue')
							obj.color.splice(j, 1, 'blue')
						} else {
							obj.color.splice(i, 1, 'red')
							obj.color.splice(j, 1, 'red')
						}
					}
				}
				if(!obj.pos[v[i]]) {
					obj.pos[v[i]] = ar
				}

				//			console.log(ar)
			}
			return obj
		})
//		console.log(result)
		
		return result
		

	}
}

var dfd = new Df();
//console.log(dfd.getData())
var data=dfd.getData();
//var testRes = dfd.getHe(data)
var H4=dfd.getH4();
var zh4m=dfd.getZh4m()
//console.log(zh4m)





function getQ(str){
	var ar=[];
	all3.map((v,k)=>{
		var num=0;
		for(var i=0;i<v.length;i++){
			if(str.indexOf(v[i])!=-1){
				num+=1;
			}
		}
		if(num>1){
			ar.push(v)
		}
	})
//	console.log(ar)
}

