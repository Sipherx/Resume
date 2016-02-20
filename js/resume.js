/* ---------------
Author: Kevin Shi
Version: 1.0
Description: Self-genearting script that will append the items onto the resume template with provided information. Inspired from Udacity's nanodegree resume project.
-----------------*/

//get bio info

var bio = {
	"firstname": "Kevin",
	"lastname": "Shi",
	"title": "Web Developer",
	"me": "A self-taught web developer with a strong interest in programming. Always eager to learn more. Love to use softwares or scripts to get things done in a more efficient way",
	"contacts": {
				 "cell": "626-348-7050", 
				 "email": "kizunese@gmail.com",
				 "city": "Baldwin Park, CA"

	}
};

(function(){

	var displayName = "<h1 class='firstname names'>" + bio["firstname"] + "</h1>";
	var displayLast = "<h1 class='lastname names'>" + bio["lastname"] + "</h1>";
	var displayTitle = "<h3>" + bio["title"] + "</h3>";
	var displayMe = "<p class='aboutme'>" + bio["me"] + "</p>";
	var displayCell = "<li class='list-unstyled'><span class='glyphicon glyphicon-phone contact-icon'></span>" + bio.contacts["cell"] + "</li>";
	var displayMail = "<li class='list-unstyled'><span class='glyphicon glyphicon-envelope contact-icon'></span>" + bio.contacts["email"] + "</li>";
	var displayCity = "<li class='list-unstyled'><span class='glyphicon glyphicon-home contact-icon'></span>" + bio.contacts["city"] + "</li>";

	$("#name").append(displayName);
	$("#name").append(displayLast);
	$("#name").after(displayTitle);
	$("#contact").before(displayMe);
	$(".contact-list").append(displayCell);
	$(".contact-list").append(displayMail);
	$(".contact-list").append(displayCity);
	
}());


//get skill info
var skill = {
	"HTML5": "80%",
	"CSS3": "60%",
	"Javascript": "50%",
	"jQuery": "50%",
	"Photoshop": "70%",
	"Python": "40%"
}

$.each(skill, function(k, v){
	var chart = "<div class='skillbar' data-percent=";
	chart += v;
	chart += "><div class='title '>";
	chart += k;
	chart += "</div><div class='";
	chart += k
	chart += "-color count-bar'></div>";
	$("#skill").append(chart);
})

$(function(){
	$(".skillbar").each(function(){
		$(this).find(".count-bar").animate({
			width:$(this).attr("data-percent")
		},4000);
	});
});

//get language

var lang = {
	"Mandarin": "100",
	"English": "100"
}

$.each(lang, function(k, v){
	$("#language").append("<div class='lang-list'><span>" + k + "</span></div>");
	var lang = "<div class='progress'>";
	lang += "<div class='progress-bar lang-";
	lang += k;
	lang += " role=' progressbar' aria-valuenow=";
	lang += v;
	lang += " aria-valuemin='0' aria-valuemax='100' style='width:";
	lang += v;
	lang += "%'></div></div>";
	$(".lang-list:last").append(lang); 
});

$(".lang-Mandarin").addClass('progress-bar-success').text('Native Speaker');
$(".lang-English").text('Fluent');


//get social
var social = {
	"facebook": "https://www.facebook.com/kevin.shi.92",
	"linkedin": "https://www.linkedin.com/in/kevin-shi-7589535b",
	"instagram": "https://www.instagram.com/kaiwens/"
};

(function(){
	var socials ="";
	for (var i in social){
		socials += "<a href=";
		socials += social[i];
		socials += " target ='_blank' title="
		socials += i;
		socials += ">";
		socials += "<img src='icons/";
		socials += i;
		socials += ".png'";
		socials += " alt='";
		socials += i;
		socials += "' class='social-img'></a>";
	}
	$("#social").append(socials);
}());

//get work info
var work = {
	"jobs": [
				{
				"employer": "RMS Asset Management",
				"title": "Portfolio Accountant",
				"location": "Santa Monica, CA",
				"dates": "2014 - 2015",
				"description": [
								"Managing acounts receivable of a portfolio of 295 residential rental properities solely",
								"Ensuring payment received, reconcile cash flow, reallocate payment, and transfer funds between general ledgers and cash accounts",
								"Monitoring closing, unpaid principal balance, and liquidation of several pools of assets", 
								"Assisted IT to set up ACH payment system, lockbox stop payment system with Wells Fargo",
								"Preparing investor report, distribution, loan remittance reconciliation report monthly",
								"Assisting upper management with various financial analysis, due diligence assignment and other ad hoc"
				]

				},
				{
				"employer": "JBS Group Inc.",
				"title": "Account Manager",
				"location": "Pasadena, CA",
				"dates": "2013",
				"description": [
								"Managing a portfolio of over 200 clients solely", 
								"Producing more than $5,000 in sales revenue weekly", 
								"Buidling long-term relationship with major clients",
								"Monitoring day to day performance of each acount",
								"Maintaining accurate record documentation for internal management"
				]
				}
	]
};

$.each(work, function(k, v){
	$.each(v, function(j, job){
		$("#experience").append("<div class='work-list'></div>");
		$(".work-list:last").append("<div class='title1'></div>");
		$(".work-list:last").append("<div class='title2'></div>");
		$(".title1:last").append("<span class='work-employer'>" + job.employer + "</span>");
		$(".title1:last").append("<span class='work-location'>" + job.location + "</span><br>");
		$(".title2:last").append("<span class='work-title'>" + job.title + "</span>");
		$(".title2:last").append("<span class='work-date'>" + job.dates + "</span>");
		$(".work-list:last").append("<ul class='job-desc'></ul");
			$.each(job.description, function(i,task){
				$(".job-desc:last").append("<li>" + task + "</li>");
			})
	});
});

$.each(work.jobs, function(k,v){
	$(".job-desc").append(v);
});

//get education
var education = {
	"schools": [
				{
				"name": "University Of Southern California",
				"location": "Los Angeles, CA",
				"date": "May 2012",
				"major": "BS in Business Administration-Finance",
				"honor": "Graduated Cum Laude, Dean's list all semesters"	
				}
				]
};

$.each(education, function(school, details){
	$.each(details, function(k, v){
		$("#education").append("<div class='school-list'></div>");
		$(".school-list:last").append("<div class='line1'></div>");
		$(".school-list:last").append("<div class='line2'></div>")
		$(".line1:last").append("<span class='school-name'>" + v.name + "</span>");
		$(".line1:last").append("<span class='school-location'>" + v.location + "</span><br>");
		$(".line2:last").append("<span class='school-major'>" + v.major + "</span>");
		$(".line2:last").append("<span class='school-date'>" + v.date + "</span>");
		$(".school-list:last").append("<ul class='school-honor'><li>" + v.honor + "</li></ul>");
	})
})

//get interest

var interest = "Reading, Photography, Music, Travelling, Psychology, Soccer, Snowboarding, Investment, Coding";
$("#interest").append("<p>" + interest + "</p>");


//get project

var proj = {
	"projects": [
			{
			"title": "Resume",
			"image": "img/resume.png",
			"link": "#",
			"detail": "Built from scratch using bootstrap. Inspired from Udacity's resume project. Mainly used jQuery to append JSON objects onto the page. Any user without coding knowledge is able to create this resume by just filling in the information in the JS file. However, there are some limitations to the auto-generating features that will be considered to include in the next version."
			},
			{
			"title": "Quote of the day",
			"image": "img/quote.png",
			"link": "http://codepen.io/kains/full/OMGRRJ/",
			"detail": "Random quote machine project from freecodecamp. Used forismatic's API to generate random quotes. User is able to tweet the entire quote with a click on the Twitter logo. Responsively designed so mobile users can also use it"
			},
			{
			"title": "Weather App",
			"image": "img/weather.png",
			"link": "http://codepen.io/kains/full/MKRZGv/",
			"detail": "A responsive small weather app that obtains user's latitude and longitude using Geolocation. Then it passes these values to Openweathermap API and request for temperature, location, and weather condition. Weather icons set by <em>Erik Flowers </em>is implemented and it will change accordingly depending on the weather condition. User can switch between imperial and metric unit by clicking on Celsius or Fahrenheit."
			},
			{
			"title": "Stock Quote",
			"image": "img/stock.png",
			"link": "http://codepen.io/kains/full/qbJmzL/",
			"detail": "Using Ajax to request stock price from Google Finance API. User is able to add desired stock quote through the form. Each stock list can be deleted by clicking on it"
			},
			{
			"title": "Python",
			"image": "img/python.png",
			"link": "https://github.com/Sipherx/Automate-the-Boring-Stuff-with-Python-2015-.git",
			"detail": "Completed most of the exercises in the book <em>Automate the Boring Stuff with Python</em>. Uploaded to GitHub to share the solutions. Also included some of the follow along exercises if someone couldn't run their codes properly"
			}

	]
};

(function(){
	var port = "";
	for (var i in proj.projects){
	port += "<div class='proj-container'><div class='proj-item'>";
	port += "<div class='pic-container proj-col'><img alt=";
	port += proj.projects[i]["title"];
	port += " src=";
	port += proj.projects[i]["image"];
	port += "></div><div class='desc-container proj-col'><div class='proj-title'><h3>";
	port += "<a href='";
	port += proj.projects[i]["link"];
	port += "' target='_blank' title='";
	port += proj.projects[i]["title"];
	port += "'>";
	port += proj.projects[i]["title"];
	port += "</a></h3></div><p class='proj-desc'>";
	port += proj.projects[i]["detail"];
	port += "</p></div></div></div>";
	$("#project").append(port);
	port ="";
   };
}())




