$(document).ready(function() {

    $(window).scroll(function(){
        var bo = $(document).scrollTop();
        if ( bo > 200 ) { $("#top").css("display", "block"); } else { $("#top").css("display", "none"); };
    })

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
    $(".order").submit(function() {
        ajax(this);
	});
	
	$('.po-toggle').click(function(){
		$($(this).attr("data-toggle")).animate({
			opacity: "toggle"
		}, 500, "linear");
	});
	
	$(".popover").mouseleave(function(){
		$(this).animate({
			opacity: "toggle"
		}, 300, "linear");
	});
	

});

function ajax(ob)
{
	if( ((n=$(ob).find('.inputName').val()) == null || n == "") || ((p=$(ob).find('.inputPhone').val()) == null || p == "") )
		return false;
	
    var processor;
	processor = "./mail.php";
	
    $.ajax({
        type: "POST",
        url: processor,
        data: $(ob).serialize()
    }).done(function() {
        $(ob).find("[type='text']").val("");
        window.location.hostname = "Трансформация.бел";
        alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");

        $(ob).trigger("reset");
    });
    return false;
}

(function( $ ){
	
	//// ---> Проверка на существование элемента на странице
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	}
	
	//	Phone Mask
	$(function() {
		
    if(!is_mobile()){
    
      if($('.inputPhone').exists()){
        
        $('.inputPhone').each(function(){
          $(this).mask("+375 (99) 999-99-99");
        });
        $('.inputPhone')
          .addClass('rfield')/*
          .removeAttr('required')*/
          .removeAttr('pattern')
          .removeAttr('title');
      }
		
      if($('.order').exists()){
        
        var form = $('.order'),
          btn = form.find('.btn_submit');
        
        form.find('.rfield').addClass('empty_field');
      
        setInterval(function(){
        
          if($('.inputPhone').exists()){
            var pmc = $('.inputPhone');
            if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
              pmc.addClass('empty_field');
            } else {
                pmc.removeClass('empty_field');
            }
          }
          
          var sizeEmpty = form.find('.empty_field').size();
          
          if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
              return false
            } else {
              btn.addClass('disabled')
            }
          } else {
            btn.removeClass('disabled')
          }
          
        },200);

        btn.click(function(){
          if($(this).hasClass('disabled')){
            return false
          } else {
            form.submit();
          }
        });	  
        
      }
    }

	});

})( jQuery );

// create social networking pop-ups
(function() {
	// link selector and pop-up window size
	var Config = {
		Link: "a.share",
		Width: 500,
		Height: 500
	};

	// add handler links
	var slink = document.querySelectorAll(Config.Link);
	for (var a = 0; a < slink.length; a++) {
		slink[a].onclick = PopupHandler;
	}

	// create popup
	function PopupHandler(e) {
		/*var temp;
		for(var p in e) {
			temp += p + "; ";
		}
		alert(temp);
		alert(e.currentTarget);*/
			
		e = (e ? e : window.event);
		
		/*var t = (e.target ? e.target : e.srcElement);*/
		var t = e.currentTarget;
		
		// popup position
		var
			px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);

		/*alert(t.href);*/
		// open popup
		var popup = window.open(t.href, "social", 
			"width="+Config.Width+",height="+Config.Height+
			",left="+px+",top="+py+
			",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		if (popup) {
			popup.focus();
			if (e.preventDefault) e.preventDefault();
			e.returnValue = false;
		}

		return !!popup;
	}

}());