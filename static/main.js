;$(function(){         //自动加载
	'use strict';

	var sidebar = $('#sidebar'),    //选择侧栏
		mask = $('.mask'),
		sidebar_trigger = $('#sidebar_trigger');

	function showSideBar()
	{
		mask.fadeIn();
		sidebar.css('right',0);
	}

	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width())
	}

	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
})