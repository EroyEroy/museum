gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true
	});

	gsap.fromTo('.presentation', { backgroundSize: "150%" }, {
		backgroundSize: "100%",
		scrollTrigger: {
			trigger: '.presentation',
			start: 'top 0%',
			end: 'bottom 0%',
			scrub: 1.5,
		}
	})
}