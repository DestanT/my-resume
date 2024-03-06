function sendMail(contactForm) {
  emailjs
    .send('Gmail', 'resume-project-request', {
      project_request: contactForm.projectsummary.value,
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
    })
    .then(
      function (response) {
        console.log('Success', response);
        // Display success message
        document.getElementById('message').innerHTML =
          'Your message has been sent successfully!';
        document.getElementById('message').style.color = 'green';
        // Clear form fields
        contactForm.reset();
      },
      function (error) {
        console.log('Failed', error);
        // Display error message
        document.getElementById('message').innerHTML =
          'Failed to send the message. Please try again later.';
        document.getElementById('message').style.color = 'red';
      }
    );
  return false; // To block from loading a new page
}
