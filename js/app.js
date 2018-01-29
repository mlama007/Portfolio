//Carousel//
$(document).ready(function(){

    // Activate Carousel
    $(".myCarousel").carousel({interval: 3000});
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $(".myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $(".myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $(".myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $(".myCarousel").carousel(3);
    });
    $(".item5").click(function(){
        $(".myCarousel").carousel(4);
    });
    $(".item6").click(function(){
        $(".myCarousel").carousel(5);
    });
    $(".item7").click(function(){
        $(".myCarousel").carousel(6);
    });
    $(".item8").click(function(){
        $(".myCarousel").carousel(7);
    });
    $(".item9").click(function(){
        $(".myCarousel").carousel(8);
    });
    $(".item10").click(function(){
        $(".myCarousel").carousel(9);
    });
    $(".item11").click(function(){
        $(".myCarousel").carousel(10);
    });
    $(".item12").click(function(){
        $(".myCarousel").carousel(11);
    });
    $(".item13").click(function(){
        $(".myCarousel").carousel(12);
    });
    $(".item14").click(function(){
        $(".myCarousel").carousel(13);
    });
    $(".item15").click(function(){
        $(".myCarousel").carousel(14);
    });
    $(".item16").click(function(){
        $(".myCarousel").carousel(15);
    });
    $(".item17").click(function(){
        $(".myCarousel").carousel(16);
    });
    $(".item18").click(function(){
        $(".myCarousel").carousel(17);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $(".myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $(".myCarousel").carousel("next");
    });
    

    /*scroll*/
    $("#aboutme").click(function() {
        $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
    });

    $(".projectsroll").click(function() {
        $('html,body').animate({
            scrollTop: $(".projectSection").offset().top},
            'slow');
    });

    $("#contactme").click(function() {
        $('html,body').animate({
            scrollTop: $(".Contact").offset().top},
            'slow');
    });

});

//Projects
var projects = {
	"firstProjects": [
		{
			"title": "Broadway",
			"link": "https://github.com/mlama007/1Broadway",
			"image": ["images/1/broadway.png"]
		},
		{
			"title": "Innovation Cloud",
			"link": "https://github.com/mlama007/2InnovationCloud",
			"image": ["images/1/innov.png"]
		},
		// {
		// 	"title": "Move",
		// 	"link": "https://github.com/mlama007/3Move",
		// 	"image": ["images/1/move.png"]
		// },
		{
			"title": "Shutterbug",
			"link": "https://mlama007.github.io/4Shutterbug/",
			"image": ["images/1/shutt.png"]
		},
		{
			"title": "Red Eye Photography",
			"link": "https://mlama007.github.io/5RedEyePhotography/",
			"image": ["images/1/red.png"]
		},
		{
			"title": "Bestbite",
			"link": "https://mlama007.github.io/6Bestbite/",
			"image": ["images/1/bestb.png"]
		},
		{
			"title": "Junction",
			"link": "https://mlama007.github.io/7Junction/",
			"image": ["images/1/Junc.png"]
		},
		{
			"title": "Adoptly",
			"link": "https://mlama007.github.io/8Adoptly/",
			"image": ["images/1/Adoptly.png"]
		},
		{
			"title": "Headlines",
			"link": "https://mlama007.github.io/9Headlines/",
			"image": ["images/1/head.png"]
		},
		{
			"title": "Excursion",
			"link": "https://mlama007.github.io/10Excursion/",
			"image": ["images/1/excursion.png"]
		},
		// {
		// 	"title": "Pocketbook",
		// 	"link": "https://mlama007.github.io/11Pocketbook/",
		// 	"image": ["images/1/pocket.png"]
		// },
		{
			"title": "Bolt Network",
			"link": "https://mlama007.github.io/12BoltNetwork/",
			"image": ["images/1/bolt.png"]
		},
		{
			"title": "Bass",
			"link": "https://mlama007.github.io/13Bass/",
			"image": ["images/1/bass.png"]
		},
		// {
		// 	"title": "Armando Perez",
		// 	"link": "https://mlama007.github.io/14ArmandoPerez/",
		// 	"image": ["images/1/Armand.png"]
		// },
		{
			"title": "Newsroom",
			"link": "https://mlama007.github.io/15Newsroom/",
			"image": ["images/1/news.png"]
		},
		{
			"title": "Code Brainery",
			"link": "https://mlama007.github.io/Codebrainery/",
			"image": ["images/1/codebrainery.png"]
		},
		{
			"title": "Sassy Parallax Banner",
			"link": "https://mlama007.github.io/SassyParallaxBanner/",
			"image": ["images/1/para.png"]
		},
		{
			"title": "Refactor",
			"link": "https://mlama007.github.io/Refactor/",
			"image": ["images/1/refactor.png"]
		},
		{
			"title": "Skillfair",
			"link": "https://mlama007.github.io/Skillfair/",
			"image": ["images/1/skil.png"]
		},
		{
			"title": "Space Gallery",
			"link": "https://mlama007.github.io/SpaceGallery/",
			"image": ["images/1/space.png"]
		},
		{
			"title": "Tundra Gallery",
			"link": "images/1/tundra.png",
			"image": ["images/1/tundra.png"]
		}
	],
	"secondProjects": [
		{
			"title": "Zelda Game",
			"link": "https://mlama007.github.io/ZeldaGame/",
			"image": ["images/2/link.png"]
		},
		{
			"title": "Maze Escape",
			"link": "https://mlama007.github.io/MazeEscape/",
			"image": ["images/2/maze.png"]
		},
		{
			"title": "Rock / Paper / Scissors",
			"link": "https://mlama007.github.io/RockPaperScissors/",
			"image": ["images/2/rock.png"]
		},
		{
			"title": "Armando Perez",
			"link": "https://mlama007.github.io/5-ArmandoPerez/#",
			"image": ["images/2/JQ/armand.png"]
		},
		{
			"title": "Birdman",
			"link": "https://mlama007.github.io/7-Birdman/#",
			"image": ["images/2/JQ/bird.png"]
		},
		{
			"title": "Bonsai",
			"link": "https://mlama007.github.io/1-Bonsai/",
			"image": ["images/2/JQ/Bons.png"]
		},
		{
			"title": "Feedster",
			"link": "https://mlama007.github.io/8-Feedster/",
			"image": ["images/2/JQ/feed.png"]
		},
		{
			"title": "Forecast",
			"link": "https://mlama007.github.io/4-Forecast/",
			"image": ["images/2/JQ/fore.png"]
		},
		{
			"title": "Gameboard",
			"link": "https://mlama007.github.io/9-Gameboard/#",
			"image": ["images/2/JQ/game.png"]
		},
		{
			"title": "Move Gear",
			"link": "https://mlama007.github.io/14-MOVEGear/",
			"image": ["images/2/JQ/gear.png"]
		},
		{
			"title": "Speak Easy",
			"link": "https://mlama007.github.io/11-SpeakEasy/",
			"image": ["images/2/JQ/list.png"]
		},
		{
			"title": "Madison Square Market",
			"link": "https://mlama007.github.io/13-MadisonSquareMarket/",
			"image": ["images/2/JQ/madi.png"]
		},
		{
			"title": "Milford School",
			"link": "https://mlama007.github.io/12-MilfordSchool/#",
			"image": ["images/2/JQ/milf.png"]
		},
		{
			"title": "Move",
			"link": "https://mlama007.github.io/10-Move/",
			"image": ["images/2/JQ/move.png"]
		},
		{
			"title": "Pocketbook",
			"link": "https://mlama007.github.io/2-Pocketbook/",
			"image": ["images/2/JQ/pock.png"]
		},
		{
			"title": "Threadly",
			"link": "https://mlama007.github.io/3-Threadly/",
			"image": ["images/2/JQ/thread.png"]			
		}
	],
	"thirdProjects": [
		{
			"title": "Suggestion Box",
			"link": "https://mlama007.github.io/SuggestionBox/#/suggestions",
			"image": ["images/3/sugg.png"]
		},
		{
			"title": "Books",
			"link": "https://mlama007.github.io/1Books/",
			"image": ["images/3/book.png"]
		},
		{
			"title": "Bolt Network",
			"link": "https://mlama007.github.io/2BoltNetwork1/",
			"image": ["images/3/bolt.png"]
		},
		{
			"title": "Pizza Planet",
			"link": "https://mlama007.github.io/3PizzaPlanet/",
			"image": ["images/3/pizz.png"]
		},
		{
			"title": "Move Log",
			"link": "https://mlama007.github.io/4MoveLog/",
			"image": ["images/3/move.png"]
		},
		{
			"title": "Install App",
			"link": "https://mlama007.github.io/5InstallApp/",
			"image": ["images/3/inst.png"]
		},
		// {
		// 	"title": "Gameboard",
		// 	"link": "https://mlama007.github.io/6Gameboard/",
		// 	"image": ["images/3/game.png"]
		// },
		// {
		// 	"title": "Feedster",
		// 	"link": "https://mlama007.github.io/7Feedster/",
		// 	"image": ["images/3/feed.png"]
		// },
		{
			"title": "Service",
			"link": "https://mlama007.github.io/8Service/",
			"image": ["images/3/serv.png"]
		},
		{
			"title": "Outbox",
			"link": "https://mlama007.github.io/12Outbox2/",
			"image": ["images/3/outb.png"]
		},
		{
			"title": "Top 10",
			"link": "https://mlama007.github.io/10Top10/",
			"image": ["images/3/top.png"]
		},
		{
			"title": "Routing",
			"link": "https://mlama007.github.io/11Routing/",
			"image": ["images/3/rout.png"]
		},
		{
			"title": "Calendar",
			"link": "https://mlama007.github.io/13Calendar/",
			"image": ["images/3/cale.png"]
		},
		{
			"title": "Reader",
			"link": "https://mlama007.github.io/14Reader/",
			"image": ["images/3/read.png"]
		},
		{
			"title": "Near Me",
			"link": "https://mlama007.github.io/17NearMe/",
			"image": ["images/3/near.png"]
		},
		{
			"title": "Blue Label Pools",
			"link": "http://bluelabelpools.com/",
			"image": ["images/3/blue.png"]
		},
		{
			"title": "Neighborhood Map",
			"link": "https://mlama007.github.io/NeighborhoodMap/",
			"image": ["images/3/neig.png"]
		},
		{
			"title": "Arcade Game",
			"link": "https://mlama007.github.io/ArcadeGame/",
			"image": ["images/3/arca.png"]
		},
		{
			"title": "Memory Game",
			"link": "https://mlama007.github.io/MemoryGame/",
			"image": ["images/3/match.png"]
		},
		{
			"title": "To do List",
			"link": "https://mlama007.github.io/TODO-app/",
			"image": ["images/3/todo.png"]
		},
		{
			"title": "Pixel Art Maker",
			"link": "https://mlama007.github.io/PixelArtMaker/",
			"image": ["images/3/pixe.png"]
		},
		{
			"title": "The Brighton Times",
			"link": "https://mlama007.github.io/HomeTownApp/",
			"image": ["images/3/brig.png"]
		}
	]
};
projects.display = function () {
	projects.firstProjects.forEach(function(firstProject){ 
        $("#first").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#first li:last").append(formattedprojectTitle);	
	});
	projects.secondProjects.forEach(function(firstProject){ 
        $("#second").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#second li:last").append(formattedprojectTitle);	
	});
	projects.thirdProjects.forEach(function(firstProject){ 
        $("#third").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#third li:last").append(formattedprojectTitle);	
	});
};
projects.display();

//BIO
var bio = {
    "name": "Maria Lamardo",
    "contacts": {
        "email": "marialamardo@outlook.com",
		"github": "https://github.com/mlama007",
		"linkedin": "https://www.linkedin.com/in/maria-lamardo-801138143/",
		"location": "Durham, North Carolina",
		//"twitter": "@mlama007",
		//"blog": "https://www.mymili.com/index.html",
		//"mobile": "1111",
	},
	"summary": "I am a Board Certified Assistant Behavior Analyst; I have been in the Applied Behavior Analysis field for 8 years. My interests include crocheting and outdoor activities. <p> I am a self-taught developer. My drive to be a self-taught developer shows my appetite for knowledge. I received a scholarship with Google to complete a Mobile Web Specialist nanodegree program. I have also completed a Font-End Web Developer nanodegree with Udacity along with a wide range of courses in CodeCademy and other sites.</p>",
    "skills": [
		"HTML5",
		"CSS3",
		"SCSS",
		"JavaScript",
		"JQuery",
		"AngularJS",
		"Responsive Design",
		"Command Line",
		"Git",				
		"Knockout",
		"Use of APIs",
		"Python",
		"SQL",
		"Bootstrap",		
		"Deploy a Website",				
		"Service Workers"
	]	
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	$("#header").append(HTMLskillsStart);	
	bio.skills.forEach(function(skill){
		var formattedskills = HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedskills);
	});

	var formattedSummary = HTMLsummary.replace("%data%",bio.summary);
	$("#summary").append(formattedSummary);
	
	//topContacts
	var replaceChars2={ "%data%":bio.contacts.email, "%data%":bio.contacts.email};
    var formattedEmail = HTMLemail.replace(/%data%|%data%/g,function(match) {return replaceChars2[match];})
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedEmail, formattedGithub, formattedLocation);
	
	//footerContacts
	var replaceChars3={ "%data%":bio.contacts.email, "%data%":bio.contacts.email};
    var formattedEmail2 = HTMLemail2.replace(/%data%|%data%/g,function(match) {return replaceChars2[match];})
	var formattedGithub2 = HTMLgithub2.replace("%data%",bio.contacts.github);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#footerContacts").append(formattedEmail2, formattedGithub2, formattedLinkedin);
	//footer icons
	var formattediconsEmail = HTMLiconsEmail.replace("%data%", bio.contacts.email);
	var formattediconsLinkedIn = HTMLiconsLinkedIn.replace("%data%", bio.contacts.linkedin);
	var formattediconsGitHub = HTMLiconsGitHub.replace("%data%", bio.contacts.github);
	$("#icons").append(formattediconsEmail, formattediconsLinkedIn, formattediconsGitHub);
	
	// var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	// var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
	//$("#footerContacts").append(formattedBlog);
	//$("#footerContacts").append(formattedMobile);
	//$("#footerContacts").append(formattedTwitter);
};
bio.display();

