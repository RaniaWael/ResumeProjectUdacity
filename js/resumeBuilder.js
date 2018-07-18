/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Rania Wael",
  "role": "Computer Engineer",
  "contacts": {
    "mobile": "01003577883",
    "email": "rania.waelsameh.rw@gmail.com",
    "github": "RaniaWael",
    "location": "Ard El Golf, Cairo, Egypt"
  },
  "skills": ["Hardworker", "Team player"],
  "profilePic": "./images/profile_pic2.jpg",
  "welcomeMSG":"Seeking a full-time job in the scope of computer engineering which can help in adding services that ease the life of people through new technologies."
};

var experience = {
  "experiences": [
    {
      "position": "Trainee",
      "employer":"German University in Cairo",
      "years":"June, 2016 - August, 2016",
      "location":"5th Settlement, Cairo, Egypt"
    },
    {
      "position": "Junior Teaching Assistant",
      "employer":"German University in Cairo",
      "years":"February, 2018 - May, 2018",
      "location":"5th Settlement, Cairo, Egypt"
    },
    {
      "position": "Assistant",
      "employer":"IGCSE",
      "years":"October, 2012 - September, 2015",
      "location":"Cairo, Egypt"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Manara Language School IGCSE",
      "location": "Nasr City, Cairo, Egypt",
      "degree": "IGCSE Certificate",
      "dates": "September, 2010 - June, 2013"
    },{
      "name": "German University in Cairo",
      "location": "5th Settlement, Cairo, Egypt",
      "degree": "Bachelor Degree",
      "dates": "October, 2013 - June, 2018"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "PC-Based Oscilloscope and Logic Analyzer - Bachelor Project",
      "desc": "Hardware debugging equipment like logic analysers and oscilloscopes are essential in any hardware lab. However, they are expensive. In this project, we have designed PC-based multi-channel logic analyser and an oscilloscope using microcontrollers like Arduino Mega. A PC desktop application is implemented in C# to display and trace wave forms and timing diagrams."
    },
    {
      "title": "Self-Driving Toy Car",
      "desc": "The aim of this project was to get used to the Raspberry Pi and learn more about hardware and control systems. The concern was algorithms for lane finding, localization and sensor fusion."
    }
  ]
};

// In the header section
bio.displayHeader = function() {
  var name = HTMLheaderName.replace("%data%", bio.name);
  var role = HTMLheaderRole.replace("%data%", bio.role);
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  var github = HTMLgithub.replace("%data%", bio.contacts.github);
  var loc = HTMLlocation.replace("%data%", bio.contacts.location);
  var pic = HTMLbioPic.replace("%data%", bio.profilePic);
  var wel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG);

  $("#header").append(name);
  $("#header").append(role);
  $("#header").append(pic);
  $("#header").append(mobile);
  $("#header").append(email);
  $("#header").append(github);
  $("#header").append(loc);
  $("#header").append(wel);

  if(bio.skills != null){
    var skills = HTMLskills.replace("%data%", bio.skills);
    $("#header").append(HTMLskillsStart);
    $("#header").append(skills);
  }
  else {
    console.log("No skills here!");
  }
};

// In the workExperience section
experience.displayWork = function() {
  for (job in experience.experiences){
    var start = HTMLworkStart;
    var expE = HTMLworkEmployer.replace("%data%", experience.experiences[job].employer);
    var expP = HTMLworkTitle.replace("%data%", experience.experiences[job].position);
    var expD = HTMLworkDates.replace("%data%", experience.experiences[job].years);
    var expL = HTMLworkLocation.replace("%data%", experience.experiences[job].location);
    $("#workExperience").append(start);
    $(".work-entry:last").append(expE);
    $(".work-entry:last").append(expP);
    $(".work-entry:last").append(expD);
    $(".work-entry:last").append(expL);

  }
};

// In the education section
education.displayEdu = function() {
  for (e in education.schools){
    var start = HTMLschoolStart;
    var eduE = HTMLschoolName.replace("%data%", education.schools[e].name);
    var eduP = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
    var eduD = HTMLschoolDates.replace("%data%", education.schools[e].dates);
    var eduL = HTMLschoolLocation.replace("%data%", education.schools[e].location);
    $("#education").append(start);
    $(".education-entry:last").append(eduE);
    $(".education-entry:last").append(eduP);
    $(".education-entry:last").append(eduD);
    $(".education-entry:last").append(eduL);
  }
};

// In the projects section
projects.display = function() {
  for (p in projects.projects){
    var start = HTMLprojectStart;
    var title = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
    var desc = HTMLprojectDescription.replace("%data%", projects.projects[p].desc);
    $("#projects").append(start);
    $(".project-entry:last").append(title);
    $(".project-entry:last").append(desc);
  }
};

// Helper methods
var inName = function(name) {
  var names = name.split(" ");
  return names[0] + " " + names[1].toUpperCase();
};

// Displaying
bio.displayHeader();
experience.displayWork();
education.displayEdu();
projects.display();

$("#mapDiv").append(googleMap);

//console.log(inName("Rania Wael"));
