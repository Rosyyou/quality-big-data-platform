function pic_auto() {
	
		//var pic_btn = $(".tab_num_li");
		var pic_li = $(".pic_li");
		var countImg = pic_li.children("a").length;
		//alert(countImg);
		var i = $(".tt").index();
		if (i < (countImg - 1)) {
			$(".pic_li").children().eq(i + 1).show().siblings().hide();
			$(".tab_num_li :eq(" + (i + 1) + ")").addClass("tt").siblings() .removeClass("tt");
		} else {
			$(".pic_li").children().eq(0).show().siblings().hide();
			$(".tab_num_li :eq(0)").addClass("tt").siblings().removeClass("tt");
		}
	};

$(function() {
	$(".accordion").Haccordion();
	 
	pic_auto();
	picAO = setInterval("pic_auto()", 2000);
	/*tab_picture_num_btn*/
	$(".tab_num_li").click(function() {
		//清除自动
		clearInterval(picAO);

		var index = $(this).index();
		$(".pic_li").children().eq(index).show().siblings().hide();
		$(this).addClass("tt").siblings().removeClass("tt");

		$(".newsPicture").mouseover(function() {
			clearInterval(picAO);
			picAO = setInterval(pic_auto, 2000);
		});
		return false;
	});

	//控制信息超出内容
	$("#noticeContent .list li a").each(function() {

		var title = $(this).text(), titleLength = title.length;

		if (titleLength > 14) { 
			title = title.substring(0, 14) + "..";
		}
		$(this).text(title);
	});
	
	//控制信息超出内容
	$(".list li a").each(function() {

		var title = $(this).text(), titleLength = title.length;

		if (titleLength > 16) { 
			title = title.substring(0, 16) + "..";
		}
		$(this).text(title);
	});
	
	//p元素问题
	var spctxt = $("#about #spc").text();
	$("#about #spc").text(spctxt.substring(0, 180)+"...");
	
	//友情链接触发跳转页面
	$(".friendLink_select select").change(function() {
		window.open($(this).val(), "_blank");
	});
	
	$(".hf").mouseover(function(){
		$(".hf .bar .close").show();
		
	}).mouseout(function(){
		$(".hf .bar .close").hide();
		
	});
	
	$(".hf .bar .close").mouseover(function(){
		//alert();
		$(this).css("backgroundImage","url(rs/client/close1_focus.png)");
		
	}).mouseout(function(){
		$(this).css("backgroundImage","url(rs/client/close1.png)");
		
	}).click(function(){
		$(".hf").hide();
	});

});
