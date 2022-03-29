var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//to display the modal after 2500 ms of opening the page
setTimeout(() => {
  document.getElementsByClassName("modal")[0].style.display = "block";
}, 2500);
