// Resume Builder Objects


var bio = {

	"name" : "Jonathan Alexander Brown",
	"role" : "Risk Consultant",
	"contacts" : {

		"email" : "jabrown10@mail.usf.edu",
		"github" : "jbrown15",
		"location" : "New York City"
	},
	"welcomeMessage" : "",
	"skills": [
		"Optimization", "Algorithm Design", "Statistics", "Problem-Solving","Software Development", "Predictive Analytics/Machine Learning", "Quantitative Equity Portfolio Management", "Catastrophe Risk Management", "C/C++/C#,Python,R, and VBA", "MS-SQL","GIS", "VCS:Git", "Full Stack Development(.Net and Django)", "Reinsurance Pricing","Catastrophe Modeling (RMS,AIR, and RQE)"
	],
	"bioPic" : "images/binary.gif"
}





var work = {
	"jobs": [
		{
			"employer": "Transatlantic Reinsurance Company(Headquarters)",
			"title": "Senior Data Analyst",
			"dates": "September 2016 - Present",
			"description": "The Data Analyst role entails but is not limited to: Portfolio Management of the Corporate Global Catastrophe book. Quarterly reporting on and communicating the movement of the corporate porfolio to the Chief Risk Officer and Senior Underwriting management to all branches globally.  Responsible for making sure any purchased Retrocession is appropriately applied and accounted for in the quarterly reporting results for the portfolio. Interfacing with the Capital Markets Department on ILS products we market to investors.  liaison with IT to secure support for technology used in the Global Catastrophe Dept. Deliver analytical insight to Underwriters about their book of business. Innovate or develop tools using advanced analytics(e.g predictive analytics, machine learning, software engineering etc...) that analyst or other stakeholders can leverage."
		},
		{
			"employer": "Tokio Marine Technologies",
			"title": "Lead Risk Analyst Consultant",
			"dates": "February 2015 - September 2016",
			"description": "As an internal consultant to the primary and reinsurance subsidiaries under the Tokio Marine Group, I perform the following tasks:  Assist in the management of portfolio risk,  contract pricing, capital allocation and risk roll up using catastrophe risk assessment models and proprietary re/insurance applications. Validate commercial catastrophe models by testing,  benchmarking, and assess their conceptual soundness. ·Conduct risk analysis using catastrophe risk modeling software (AIR,  EQE,  RMS), including data preparation  and incorporation into catastrophe modeling process, querying databases and preparing reports. Conduct analytical and research studies and apply knowledge of probability and statistics to develop practical solutions to quantify catastrophe risk and enhance the use of catastrophe models.  Serve as a subject matter experts and resource for catastrophe risk modeling and management initiatives with demonstrated ability to convey principles to non-technical audiences."
		},
		{
			"employer": "Guy Carpenter",
			"title": "Catastrophe Risk Analyst",
			"dates": "May 2012 - February 2015",
			"description": "Providing catastrophe risk management and analysis using AIR,RQE/EQE, and RMS catastrophe models.  Providing risk analysis for global clients as well as clients in niche markets in geographic regions such as Florida and Latin America & Caribbean(only for perils where industry models do not exist).  Contributing to R&D predictive analytics projects for global clients.  Contribute innovative ideas to corporate think tank.  Help prepare broker teams for RFPs to win client business over the incumbents."
		},
		{
			"employer": "Kronos FX",
			"title": "Algorithmic Programmer",
			"dates": "May 2011 - April 2012",
			"description": "Providing statistical analysis reports on trading strategies given by money managers and traders.  Developing trading systems in C++ or MQL4 for FX and index financial instruments. Creating tools (alert systems, trading signals, etc ...) to assist traders in managing their trading positions. Assisting with creating marketing presentations for high net worth investors.",
			//"description2": "blah balh blah"
		}
	]
}



var projects = {
	"projects": [
		{
			"title": "i-Robot Random Walk Simulation",
			"dates": "2014",
			"Description": "In this problem set, I coded a simulation to compare how much time a group of Roomba-like robots will take to clean the floor of a room using two different strategies. One of the strategies used was the random walk strategy and the other, a robot does not change direction until it hits a wall.  The two strategies will compared and analyzed by simulating varying number of robots cleaning varying sizes of rooms over 200 trials.",
			"images": [
			"images/iRobot.png",
			"images/figure_1.png"
			],
			"link": "https://github.com/jbrown15/irobot_project"
		},
		{
			"title": "Agglomerative Hierarchical Clustering (visualizations pending)",
			"dates": "2014",
			"Description": "In this problem set, I used Python and pylab to write a agglomerative hierarchical clustering algorithm. I used my algorithm to cluster cities across the United States according to some information available about each.  Annual precipitation, number of days of precipitation in a year, and average temperature for January, April, July, and October were the features used in this data set.  I will experiment with clusters of size 'n' and compare to the same clustering except the features will be scaled to remove feature bias.",
			"images": [
			"images/project.jpg"

			],
			"link": "https://github.com/jbrown15/h_clustering_project"
		},
		{
			"title": "Graph Optimization (visualizations pending)",
			"dates": "2014",
			"Description": "In this problem set you will write a solution to an optimization problem on how to find the shortest route from one building to another on the MIT campus given that you wish to constrain the amount of time you will spend walking outdoors.  In this project, I will  implement a brute force search algorithm and a depth-first search algorith and analyze the time differences.",
			"images": [
			"images/project.jpg"

			],
			"link": "https://github.com/jbrown15/graph_opt_project"
		}
	]

}



var education = {
	"schools": [
		{
			"name": "University of South Florida",
			"city": "Tampa, FL, US",
			"degree": "Bachelors",
			"major" : ["Mathematics(concentration in Comp. Sci and Physics)"],
			"dates": 2011,
			"url": "http://example.com"
		},
		{
			"name": "Florida Institute of Technology",
			"city": "Melbourne, FL, US",
			"degree": "Masters",
			"major": ["Applied Mathematics: Operations Research (emphasis in Finance)"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "University of Washington",
			"city": "(remote)Seattle, WA, US",
			"degree": "Masters",
			"major": ["Applied Mathematics: Quantitative Finance and Risk Management"],
			"dates": 2017,
			"url": "http://example.com"
		}
	],

	"certificates": [
		{
			"title": "Data Science",
			"school": "University of Washington",
			"dates": 2013
		}

	]

}


var professional = {
	"designation":
		{
			"organization": "Casualty Actuarial Society",
			"exams": ["Exam P", "Exam FM"],
			"exam1": "Exam P (Probability)",
			"exam2": "Exam FM (Financial Mathematics)"
		},
	"organization":
		{
			"organization": "University of Washington Data Science Dept",
			"role": "Advisory Board Member"

		}

}


//********************************************** BIO SECTION ***********************************************
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var mobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
	$("#topContacts").append(mobile);

	var email = HTMLemail.replace("%data%",bio.contacts["email"]);
	$("#topContacts").append(email);

	var github = HTMLgithub.replace("%data%",bio.contacts["github"]);
	$("#topContacts").append(github);

	var loc = HTMLlocation.replace("%data%",bio.contacts["location"]);
	$("#topContacts").append(loc);



	//bio picture
	var biopic =  HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(biopic);

	//welcome message
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

    //Skills
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
//internationlize button
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

function displayWork() {
//****************************************** Work Experience ****************************
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates)
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
	$(".work-entry:last").append(formattedDescription);


}

//*************************************** Projects *************************************



for (proj in projects.projects){
	$("#projects").append(HTMLprojectStart);

	//var projectStart =  HTMLprojectStart.replace("%data%",projects.projects[proj]);
	var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
	projectTitle = projectTitle.replace("#",projects.projects[proj].link);
	$(".project-entry:last").append(projectTitle);
	var projectDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
	$(".project-entry:last").append(projectDates);
	var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].Description);
	$(".project-entry:last").append(projectDescription);

	var projectImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images[0]);
	$(".project-entry:last").append(projectImage);

	if (projects.projects[proj].images[1]){
	var projectImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images[1]);
	$(".project-entry:last").append(projectImage);
	}

}


//*************************************** Education ************************************


for (school in education.schools){
	$("#education").append(HTMLschoolStart);

	var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(schoolName);
	var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(schoolDegree);
	var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(schoolDates);
	var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	$(".education-entry:last").append(schoolLocation);
	var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(schoolMajor);

}


	//$(".education-entry:last").append(HTMLonlineClasses);

for (certs in education.certificates){
	$(".education-entry:last").append(HTMLonlineClasses);


	var onlineTitle = HTMLonlineTitle.replace("%data%", education.certificates[certs].title);
	var onlineSchool = HTMLonlineSchool.replace("%data%", education.certificates[certs].school);

	var formattedTitleSchool = onlineTitle + onlineSchool;
	$(".education-entry:last").append(formattedTitleSchool);

	var onlineDates = HTMLonlineDates.replace("%data%", education.certificates[certs].dates);
	$(".education-entry:last").append(onlineDates);

}

	//$("#professional").append(HTMLprofDesignations);


	$("#professional").append(HTMLprof);

	var formatOrg = HTMLorgName.replace("%data%", professional.designation["organization"]);
	$(".professional-entry:last").append(formatOrg);

	var formattedExamp = HTMLExam1.replace("%data%", professional.designation["exam1"]);
	$(".professional-entry:last").append(formattedExamp);

	var formattedExamfm = HTMLExam2.replace("%data%", professional.designation["exam2"]);
	$(".professional-entry:last").append(formattedExamfm);

	var formatOrg = HTMLorganName.replace("%data%", professional.organization["organization"]);
	$(".professional-entry:last").append(formatOrg);

	var formatOrg = HTMLorgRole.replace("%data%", professional.organization["role"]);
	$(".professional-entry:last").append(formatOrg);

	//var formattedtype = HTMLtype.replace("%data%", "Exams");
	//$(".professional-entry:last").append(formattedtype);

	//var formattedExam = HTMLExam.replace("%data%", professional.designation["exams"]);
	//$(".professional-entry:last").append(formattedExam);





//	$('#main').append(internationalizeButton);
//	$("#mapDiv").append(googleMap);


	//$("#header").prepend(formattedName);

	//var mobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
	$("#footerContacts").append(mobile);
	var email = HTMLemail.replace("%data%",bio.contacts["email"]);
	$("#footerContacts").append(email);
	var github = HTMLgithub.replace("%data%",bio.contacts["github"]);
	$("#footerContacts").append(github);


}





displayWork();



//you want to see a map? heres a map
