var btn = document.getElementById('btn');
var score = 10;
var h1 = document.createElement('h1');


	$('#btn').click(function(){
	$('#btn').fadeOut('slow');
	$('#btn4').fadeOut('slow');

	setInterval(
	 	function(){
	 		score--;
	// 		if(score == -1){
	// 		clearInterval(score);
	// 			alert(score + "秒たってしまった。おしまい");
	// 			$('#btn3').fadeIn('slow');
	// 			$('#btn3').text('最初から');
	// 			$('#btn2').fadeOut('slow');
	// 			$('#btn').fadeOut('slow');
	// 			$('#btn3').click(function(){
	// 				location.reload();
	// 			});
	 		
	 	},1000);
	$('#btn2').html('<button>１０秒立った！ここで止める！</button>');
	$('#btn2').click(function(){
		if(score == 0){
		clearInterval(score);
			alert(score + "秒ちょうどです！　クリア！　おめでとう！");
		$('#btn3').fadeIn('slow');
			$('#btn3').text('最初から');
				$('#btn2').fadeOut('slow');
				$('#btn').fadeOut('slow');
				$('#btn3').click(function(){
					location.reload();
				});
		}else{
			alert(`現在は${score}秒です。　ゲームオーバー`);
			$('#btn3').fadeIn('slow');
			 clearInterval(score);

				$('#btn3').text('最初から');
				$('#btn2').fadeOut('slow');
				$('#btn').fadeOut('slow');
				$('#btn3').click(function(){
					location.reload();
				});
		}
	});
});

document.body.appendChild(h1);
$('#btn4').html('<button>激ムズボタンクリック0.50秒で止めろｗスタート！</button>');
var score2 = 10;
$('#btn4').click(function(){
	$('#btn').fadeOut('slow');
	$('#btn2').fadeOut('slow');
	$('#btn4').fadeOut('slow');
	setInterval(
		function(){
	score2--;
	},1000);
	$('#btn5').html('<button>0.50秒になった！</button>');
	$('#btn3').text('最初から');
				$('#btn3').click(function(){
					location.reload();
				});
});
$('#btn5').click(function(){
	if(score2 == 0.50){
		alert(`よくやった！クリアだ！`);
	}else{
		alert(`${score2}秒です。違います。残念`);
		$('#btn5').fadeOut('slow');
		$('#btn3').fadeIn('slow');
				$('#btn3').text('最初から');
				$('#btn3').click(function(){
					location.reload();
				});
	}
});
