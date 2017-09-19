var component=
		{
		input : function(json){
			return $('<input/>',json);
		}
	};

var indexUI=(()=>{
var $wrapper,ctx,img,js,css,$content;

	var init=function(){
		$wrapper=$('#wrapper');
		$content=$('#content');
		navbar();
		main();
		controller();
	};
	var navbar=function(){
		$wrapper.html(
				'<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a id="home">'
				+'HOME</a></div><ul id="ul"><li class="dropdown"><a class="dropdown-toggle"data-toggle="dropdown"href="#">MEMBER'
				+'<span class="caret"></span></a><ul id="ul1"><li><a id="member_list">회원목록</a></li><li><a id="member_update">'
				+'회원정보수정</a></li><li><a id="member_delete">회원탈퇴</a></li></ul></li><li class="dropdown">'
				+'<a class="dropdown-toggle"data-toggle="dropdown"href="#">GRADE<span class="caret"></span></a><ul id="ul2"><li>'
				+'<a id="grade_input">성적입력</a></li><li><a id="grade_list">성적목록</a></li><li><a id="grade_update">성적수정</a></li>'
				+'</ul></li><li class="dropdown"><a class="dropdown-toggle"data-toggle="dropdown"href="#">수열<span class="caret">'
				+'</span></a><ul id="ul3"><li><a id="arithBtn">등차수열</a></li><li><a id="switchBtn">스위치수열</a></li><li>'
				+'<a id="geoBtn">계차수열</a></li><li><a id="facBtn">팩토리얼</a></li><li><a id="fiboBtn">피보나치</a></li></ul></li></ul><ul class="nav navbar-nav navbar-right"><c:choose>'
				+'<c:when test="${empty user}"><li><a id="member_join"><span class="glyphicon glyphicon-user"></span>회원가입</a>'
				+'</li><li><a id="login"><span class="glyphicon glyphicon-log-in"></span>로그인</a></li></c:when><c:otherwise><li>'
				+'<a onclick="detail()"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;님</a></li><li><a id="logout">'
				+'<span class="glyphicon glyphicon-log-in"></span>로그아웃</a></li></c:otherwise></c:choose></ul></div></nav>');
	};
	var controller=()=>{
		$('#arithBtn').click(()=>{
			alert('등차수열 클릭');
			$('#content').empty();
			$content.append('<h1 id="title">등차수열</h1>');
			arithmetic();
			$.getScript(meta.session.getPath('j')+'/algo.js',()=>{
				series.arithmetic();
			});
		});
		$('#switchBtn').click(()=>{
			alert('스위치수열 클릭');
			$('#content').empty();
			$content.append('<h1 id="title">스위치수열</h1>');
			switchSeries();
			$('#start').val('1');
			$('#start').attr('readonly',true);
			$('#end').val('100');
			$('#end').attr('readonly',true);
			$.getScript(meta.session.getPath('j')+'/algo.js',()=>{
				series.switchSeries();
			});
		});
		$('#geoBtn').click(()=>{
			alert('계차수열 클릭');
			$('#content').empty();
			$content.append('<h1 id="title">계차수열</h1>');
			geometrics();
			$.getScript(meta.session.getPath('j')+'/algo.js',()=>{
				series.geometrics();
			});
		});
		$('#facBtn').click(()=>{
			alert('팩토리얼 클릭');
			$('#content').empty();
			$content.append('<h1 id="title">팩토리얼</h1>');
			factorial();
			$.getScript(meta.session.getPath('j')+'/algo.js',()=>{
				series.factorial();
			});
		});
		$('#fiboBtn').click(()=>{
			$('#content').empty();
			$content.append('<h1 id="title">피보나치</h1>');
			fibonacci();
			$.getScript(meta.session.getPath('j')+'/algo.js',()=>{
				series.fibonacci();
			});
		});
	};
	var arithmetic=()=>{
		$content.append(meta.component.button({
			type : 'text',
			id : 'start'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'end'
		}));
		$content.append(meta.component.button({
			type : 'button',
			id : 'calculate',
			value : '연산',
			style : 'height:100px;width:100px'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'result',
			style : 'height:100px;width:100px'
		}));
	};
	var switchSeries=()=>{
		$content.append(meta.component.button({
			type : 'text',
			id : 'start'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'end'
		}));
		$content.append(meta.component.button({
			type : 'button',
			id : 'calculate',
			value : '연산',
			style : 'height:100px;width:100px'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'result',
			style : 'height:100px;width:100px'
		}));
	};
	var geometrics=()=>{
		$content.append(meta.component.button({
			type : 'text',
			id : 'n',
			placeholder : '몇항?'
		}));
		$content.append(meta.component.button({
			type : 'button',
			id : 'calculate',
			value : '연산',
			style : 'height:100px;width:100px'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'result',
			style : 'height:100px;width:100px'
		}));
	};
	var factorial=()=>{
		$content.append(meta.component.button({
			type : 'text',
			id : 'n',
			placeholder : '몇항?'
		}));
		$content.append(meta.component.button({
			type : 'button',
			id : 'calculate',
			value : '연산',
			style : 'height:100px;width:100px'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'result',
			style : 'height:100px;width:100px'
		}));
	};
	var fibonacci=()=>{
		$content.append(meta.component.button({
			type : 'text',
			id : 'n',
			placeholder : '몇항?'
		}));
		$content.append(meta.component.button({
			type : 'button',
			id : 'calculate',
			value : '연산',
			style : 'height:100px;width:100px'
		}));
		$content.append(meta.component.button({
			type : 'text',
			id : 'result',
			style : 'height:100px;width:100px'
		}));
	};
	var main=()=>{
		$("#ul").attr("class","nav navbar-nav");
		$("#ul1").attr("class","dropdown-menu");
		$("#ul2").attr("class","dropdown-menu");
		$("#ul3").attr("class","dropdown-menu");
		$("#home").attr("class","navbar-brand");
		
		$wrapper=$('#wrapper');
		var $image=$('<img/>',
			{
				id: 'sigong',
				src: 'http://img1.itenjoy.co.kr/files/attach/images/110/772/002/d0aa9adf8d50aaea20d533ed9ca0200d.jpg'
			}
				);
		$wrapper.append($image);
	};
	return {
		init : init,
		arithmetic : arithmetic,
		switchSeries : switchSeries,
		navbar : navbar,
		controller : controller,
		geometrics : geometrics,
		factorial : factorial,
		fibonacci : fibonacci,
		main : main
		};
})();