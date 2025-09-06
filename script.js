function sendMessage(event) {

  event.preventDefault();

  const name = document.getElementById('name').value;

  alert("Thank you " + name + "! Your message has been sent.");

}