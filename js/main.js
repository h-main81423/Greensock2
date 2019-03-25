(() => {

	let badge = document.querySelector('img');

	function aniImage() {
		TweenMax.to(badge, 1.7, { scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Elastic.easeInOut });
	}

	function aniFooter() {
		TweenMax.to('h3', 0.7, { scaleX: 2, scaleY: 2, ease:Elastic.easeOut});
	}
	
	aniImage();

})();
