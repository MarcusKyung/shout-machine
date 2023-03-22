window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    const messageInput = document.getElementById("messageInput").value;
    document.querySelector("span#messageOutput").innerText = messageInput.toUpperCase();
    
    //InlineCSS Styling Method
    // document.querySelector("span#messageOutput").innerText = messageInput;
    // document.querySelector("span#messageOutput").style.textTransform = "uppercase";
    // document.querySelector("span#messageOutput").style.color = "red";
    event.preventDefault();
  };
};