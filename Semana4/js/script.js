var QuoteModule = (function(){
	// Jquery taken from http://codepen.io/nlazzari/pen/LGPNWb
	// private array of quote objects:
	// {quote: "...", author: "...""}
	var _quoteList = [
		{q: "Scissors, paper, rock, lizard, Spock." , a: "Sheldon Cooper"}, 
		{q: "Just think of me as a brown Martha Stewart", a: "Raj Koothrappali"}, 
		{q: "If it doesn't affect me, suffer in silence.", a: "Sheldon Cooper"}, 
		{q: "I’m not crazy; my mother had me tested.", a: "Sheldon Cooper"}, 
		{q: "Not some kind of nerd. I'm the king of nerds", a: " Leonard Hofstadter"}, 
		{q: "No, no I’m listening. It just takes me a minute to process so much stupid all at once." , a: "Sheldon Cooper"}, 
		{q: "You turn my software into hardware." , a: "Howard Wolowitz"},
		{q: "Whassup Shel-bot?", a: " Penny"},
		{q: "Have I told you you're like a sexy praying mantis?", a: "Amy Farrah Fowler"},
		{q: "Are you Google? Because you have everything I'm searching for", a: "Howard Wolowitz" },
		{q: "I never said that you’re not good at what you do. It’s just that what you do is not worth doing.", a: "Sheldon Cooper" },
		{q: "I'm a very vengeful person...with access to weaponized smallpox", a: " Bernadette Rostenkowski" },
		{q: "It must be humbling to suck on so many levels.", a: "Sheldon Cooper" },
		//{q: "", a: ""},	

	];

	// private array of background image quote URLs
	// to accompany the quotes

// Para que te fucionen las imagenes localmente: -NS

var _imgList = new Array(); 

_imgList[0] = "img/1.jpeg";
_imgList[1] = "img/2.jpg";
_imgList[2] = "img/3.jpg";
_imgList[3] = "img/4.jpg";
_imgList[4] = "img/5.jpg";
_imgList[5] = "img/6.jpg";
_imgList[6] = "img/7.jpg";
_imgList[7] = "img/8.jpg";
_imgList[8] = "img/9.jpg";
_imgList[9] = "img/10.jpg";
_imgList[10] = "img/11.jpg";
_imgList[11] = "img/12.jpg";
_imgList[12] = "img/13.jpg";

	// var _imgList = [
	// 	"img/1.jpeg",
	// 	"img/2.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/12715831_10156562962815302_3304866296181304395_o.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/10400268_10156562962775302_6359286092376879392_n.jpg?oh=467f8ef863539eacb4bf7843d2ef4d51&oe=572F8534",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xlp1/t31.0-8/12671800_10156562962855302_1769526082856774858_o.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/12744244_10156562962970302_7147349044935209974_n.jpg?oh=dd73e75f94010a5285e6ef1cfde70634&oe=5766B960",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12698573_10156562963100302_5439953424351750313_o.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xlp1/t31.0-8/12694485_10156562963500302_3840509026627896808_o.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xlp1/v/t1.0-9/12718277_10156562963570302_6928263011651876040_n.jpg?oh=3bb1d2e60174b69b7f111203e733c09d&oe=5763F58F",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12729066_10156562963595302_8363733644979394075_n.jpg?oh=777cc79dea5a71278560bda114f394ba&oe=572D4F0E",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12715676_10156562987280302_711813124872681403_n.jpg?oh=4d1dd3750117262c4bbaf322079150b0&oe=5764782F",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpl1/t31.0-8/12716295_10156562987360302_6633781294122927256_o.jpg",
	// 	"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/12716245_10156562987305302_8103260213393158096_o.jpg"
	// ];


	// Returns a random quote
	var getQuote = function() {
		return _quoteList[ Math.floor( Math.random() * _quoteList.length ) ] ;
	};

	// Returns a random background image URL
	var getImg = function() {
		return _imgList[ Math.floor( Math.random() * _imgList.length ) ] ;
	}

	// Random quote
	var rand = getQuote();

	//Quote object initialized to a random quote
	// and background image
	var quote = {
		quote: rand.q,
		author: rand.a,
		img: getImg()
	};


	//Updates the quote object to a new random quote
	quote.randomize = function() {
		var r = getQuote();
		
		this.quote = r.q;
		this.author = r.a;
		this.img = getImg();
	};

	return quote;



	}());

function initPage(q) {
		var quoteString, authorString, imgString;

		quoteString = q.quote;
		authorString = "- " + q.author;
		imgString = 'url(' + q.img + ')';

		$("#quote-content").css('background-image',imgString);
		$("#quote").text(quoteString);
		$("#author").text(authorString);

	}

	function updatePage(q) {

		q.randomize();

		initPage(q);

		$("#new-quote").blur();

	}

 initPage(QuoteModule);