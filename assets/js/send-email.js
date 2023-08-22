function sendMail(contactForm) {
    emailjs.send("Gmail", "resume-project-request", {
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
        .then(
            function (response) {
                console.log("Success", response);
            },
            function (error) {
                console.log("Failed", error);
            }
        );
    return false; // To block from loading a new page
}