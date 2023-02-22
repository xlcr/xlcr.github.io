function showResume(resume){
	
	let resumeDetails = document.getElementsByClassName("resume-details");
	for(i = 0; i < resumeDetails.length; i++) {
		resumeDetails[i].classList.remove("active"); 
	}
	let timelineBox = document.getElementsByClassName("timeline-slot");
	for(i = 0; i < timelineBox.length; i++) {
		timelineBox[i].classList.remove("active"); 
	}
	
	document.getElementsByClassName(resume)[0].classList.add("active");
	document.getElementsByClassName("card-" + resume)[0].classList.add("active");
	
	document.getElementsByClassName("resume-description")[0].scrollIntoView({behavior: "smooth", block: "start"});

}