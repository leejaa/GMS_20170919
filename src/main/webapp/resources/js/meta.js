/**
 * 
 */

/**
 * 
 */
var meta=meta || {};

var $$=function(){return meta.session.getPath('x');};
var js=function(){return meta.session.getPath('j');};
var css=function(){return meta.session.getPath('c');};
var img=function(){return meta.session.getPath('i');};

meta.common=(function(){
	var init=function(x){
		meta.session.init(x);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();




meta.login=(function(){
	var $wrapper,ctx,img,js,css,ui;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		ui='<div class="container"><h2>로그인</h2><form id="login_box" name="login_box"><div class="form-group"><label for="id">ID</label><input type="text" class="form-control" id="member_id" placeholder="아이디를 입력하세요" name="member_id"></div><div class="form-group"><label for="pw">Password:</label><input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요" name="password"></div><div class="checkbox"><label><input type="checkbox" name="remember">아이디저장</label></div><input type="hidden" name="action" value="login"/><input type="hidden" name="page" value="main"/>'
			+'</form></div>';
		//$wrapper.html(ui);
		loginView();
	};
	var loginView=function(){
		var $wrapper=$('#wrapper');
		$wrapper.append(ui);
		$('#login_box').append(meta.component.button(
				{
					type : 'button',
					id : 'login_button',
					value : '로그인',
					style : 'height:100px;width:100px'
				}
		));
		$('#login_box').append(meta.component.button(
				{
					type : 'button',
					id : 'login_button',
					value : '취소',
					style : 'height:100px;width:100px'
				}
		));
		
	};
	return {
		init : init,
		loginView : loginView
	};
})();

meta.component=
		{
		button : function(json){
			return $('<input/>',json);
		}
	};

meta.session=
	{
		init : function(ctx){
			sessionStorage.setItem('x',ctx);
			sessionStorage.setItem('j',ctx+"/resources/js");
			sessionStorage.setItem('c',ctx+"/resources/css");
			sessionStorage.setItem('i',ctx+"/resources/img");
		},
		getPath : function(x){
			return sessionStorage.getItem(x);
		}
	}

meta.index=(function(){
	var $wrapper,$$,js,css,img;
	var init=function(x){
		meta.session.init(x);
		$.getScript(meta.session.getPath('j')+'/template.js',()=>{
			indexUI.init();
		});
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		
	};
	var setContentView=function(){
		
		
	};
	return {
		init : init
		};
})();





