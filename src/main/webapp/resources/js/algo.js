var series={
		arithmetic : ()=>{
			/*1부터 100까지 등차수열*/
			
			$('#calculate').click(()=>{
				var start=$('#start').val()*1;
				var end=$('#end').val()*1;
				var total=0;
				for(var i=start;i<=end;i++){
					total+=i;
				}
				$('#result').val(total);
			});
		},
		switchSeries : ()=>{
			$('#calculate').click(()=>{
				var start=$('#start').val();
				var end=$('#end').val();
				var total=0;
				for(var i=parseInt(start);i<=parseInt(end);i++){
					if(i%2==0){
						total-=i;
					}else{
						total+=i;
					}
					console.log('total = '+total);
				}
				$('#result').val(total);
			});
		},
		geometrics : ()=>{
			$('#calculate').click(()=>{
				var start=1;
				var diff=1;
				var sum=0;
				var n=$('#n').val();
				for(var i=1;i<=parseInt(n);i++){
					console.log('start : '+start);
					console.log('diff : '+diff);
					sum+=start;
					start+=diff;
					diff=diff+1;
				}
				$('#result').val(sum);
			});
		},
		factorial : ()=>{
			$('#calculate').click(()=>{
				var start=1;
				var sum=0;
				var n=$('#n').val();
				for(var i=1;i<=parseInt(n);i++){
					for(var j=1;j<=i;j++){
						start *= j;
						console.log('start = '+start);
					}	
					sum+=start;
					start=1;
					console.log('sum = '+sum);
				}
				$('#result').val(sum);
			});
		},
		fibonacci : ()=>{
			$('#calculate').click(()=>{
				alert('피보나치 진입..!');
				var first=1;
				var second=1;
				var sum=first+second;
				var temp=0;
				var n=$('#n').val();
				for(var i=3;i<=parseInt(n);i++){
					sum += first+second;
					temp=first;
					first=second;
					second=temp+second;
					console.log('first = '+first);
					console.log('second = '+second);
				}
				$('#result').val(sum);
			});
		}
};

