$(document).ready(function(){
	var track_height = parseInt($('.outer_lane_line').height()) - 10;
	var track_width = parseInt($('.outer_lane_line').width()) - 10;
	var inner_track_height = parseInt($('.inner_lane_line').height());
	var inner_track_width = parseInt($('.inner_lane_line').width());
	var track_girth = ((track_width - inner_track_width) / 2)
	
	$(document).on('keyup', function(e){
		var x = $('.player_1').css("top")
		var y = $('.player_1').css("left")
		if (e.keyCode == 39){
				$('.player_1').animate({left: "+=30"},10)
		} else if (e.keyCode == 40){
				$('.player_1').animate({top: "+=30"},10)
		} else if (e.keyCode == 37){
				$('.player_1').animate({left: "-=30"},10)
		} else if (e.keyCode == 38){
				$('.player_1').animate({top: "-=30"},10)
		}
		check_for_boundaries(x,y,1)
		pick_up_access_token(x,y,1)
		check_for_winner(x,y,1)
	})

	$(document).on('keyup', function(e){
		var x = $('.player_2').css("top")
		var y = $('.player_2').css("left")
		if (e.keyCode == 83){
				$('.player_2').animate({left: "+=30px"},10)
		} else if (e.keyCode == 90){
				$('.player_2').animate({top: "+=30px"},10)
		} else if (e.keyCode == 65){
				$('.player_2').animate({left: "-=30px"},10)
		} else if (e.keyCode == 87){
				$('.player_2').animate({top: "-=30px"},10)
		}
		check_for_boundaries(x,y,2)
		pick_up_access_token(x,y,2)
		check_for_winner(x,y,2)
	})

	function check_for_boundaries(x,y,num){
		var x = x.replace(/px/,'')
		var y = y.replace(/px/,'')
		if 	((x < 0 || x > track_height) ||
				(y < 0 || y > track_width)){
			go_back_to_beginning(num)
		}
		if (x > track_girth && x < (track_height-track_girth)){
			if (y > track_girth && y < track_width-track_girth){
				go_back_to_beginning(num)
			}
		}
	}

	function check_for_winner(x,y,num){
		var x = x.replace(/px/,'')
		var y = y.replace(/px/,'')
		if (y < track_girth && x < 320){
			if ($('.player_'+num).hasClass('player_token')){
				$('.winner_text').text('Player '+ num + ' is the Winner!')
			}
		}
	}

	function pick_up_access_token(x,y,num){
		var x = x.replace(/px/,'')
		var y = y.replace(/px/,'')
		if (y > 400 && x > 400){
			$('.player_'+num).addClass("player_token")
		}
	}

	function go_back_to_beginning(num){
		$('.player_'+num).removeClass('player_token')
		$('.player_'+num).stop().animate({
			top: "300px",
			left: "20px"
		})
	}
})