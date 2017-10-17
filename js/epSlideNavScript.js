var playerHeight = '235px';
var playerWidth = '100%';

function vid(objSrc, objAlt, objTitle, objHeight, objWidth) {
	this.vidSrc = objSrc;
	this.vidHeight = objHeight;
	this.vidWidth = objWidth;
}

var ep1 = new vid("https://lb.watchanimesub.net/video_watch/zanimes/Miss%20Kobayashis%20Dragon%20Maid%20S01E01.mp4?st=4eWxhVglGd9iulIMMweFuA&e=1508243114", playerHeight, playerWidth);

var ep2 = new vid("https://lb.watchanimesub.net/video_watch/zfix/Miss%20Kobayass%20Dragon%20Maid%20Episode%2002.mp4?st=7xbxNDCMsrIeCm6mPEjI8g&e=1508248275", playerHeight, playerWidth);

var ep3 = new vid("https://lb.watchanimesub.net/video_watch/zfix/Miss%20Kobayashis%20Dragon%20Maid%20Episode%2003.mp4?st=0VlKpmMLvtwWDUOoRTNfvg&e=1508250058", playerHeight, playerWidth);

var ep4 = new vid("https://lb.watchanimesub.net/video_watch/zanimes/Kobayashi-san%20Chi%20no%20Maid%20Dragon%20%28Dub%29%20Episode%20004.mp4?st=TgbrmoeWIxyyC-Bo_t7u1Q&e=1508250131", playerHeight, playerWidth);

var ep5 = new vid("https://lb.watchanimesub.net/video_watch/zanimes/Miss%20Kobayashis%20Dragon%20Maid%20Episode%205.mp4?st=B5OQM87R3zIcatb3bcP3-w&e=1508248804", playerHeight, playerWidth);

var vidArray = new Array(ep1, ep2, ep3, ep4, ep5);

function init() {
	document.epSlides.src = vidArray[0].imgSrc;
	document.epSlides.alt = vidArray[0].imgAlt;
	document.epSlides.title = vidArray[0].imgTitle;
	document.epSlides.height = vidArray[0].imgHeight;
	document.epSlides.width = vidArray[0].imgWidth;
}

var index = 0;
var vidCt = vidArray.length - 1;

function chgSlide(direction) {
	if (document.videos) {
		index = index + direction;
		if (index > vidCt) {
			index = 0;
		}
		if (index < 0) {
			index = vidCt;
		}
		document.epSlides.src = vidArray[index].imgSrc;
		document.epSlides.alt = vidArray[index].imgAlt;
		document.epSlides.title = vidArray[index].imgTitle;
		document.epSlides.height = vidArray[index].imgHeight;
		document.epSlides.width = vidArray[index].imgWidth;
	} 
}