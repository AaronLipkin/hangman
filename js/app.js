$(() => {
	let word;
	let letters;
	let correct = 0;
	let winCon = 0;
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
	for(element of alphabet) {
			$('.letter-buttons').append($('<button class=\"input-letter\">' + element + '</button>'))
		}
	$('#play').on('click', () => {
		let $input = $('.input').val()
		$('.start').css('display','none')
		$('.game').css('display','block')
		
		word = $input.toUpperCase()
		letters = word.split('')
		for(letter of letters) {
			if(alphabet.indexOf(letter) === -1) {
				$(".word").append($("<div>").addClass("letter space").text(letter))
			}
			else {
				$(".word").append($("<div>").addClass("letter").text(letter))
				winCon++;
			}
		}
	});

	$('.input-letter').one('click', (e) => {
		let $clickedLetter = $(e.currentTarget)
		$clickedLetter.css('text-decoration','line-through')
		let filepath = ['man','','.png']
		if(letters.indexOf($clickedLetter.text()) === -1) {
			let currentSource = $('.man').attr('src')
			filepath[1] = String(parseInt(currentSource.split('')[3]) + 1)
			let newImage = filepath.join('')
			$('.man').attr('src', newImage)
			if(newImage === 'man6.png') {
				$('.win-lose').text('You Lose!')
				$('.game-over').css('display','block')
			}
		}
		else {
			for (element of $('.word').children()) {
				if($clickedLetter.text() == $(element).text()) {
					$(element).css('color','black');
					correct++;
				}
			}
		}
		if(correct === winCon) {
			$('.win-lose').text('You Win!')
			$('.game-over').css('display','block')
		}
	});
});