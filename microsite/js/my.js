


   $(document).ready(function() {
      window.scroll(0, document.documentElement.scrollHeight) 
      var docHeight = $(document).height(),
      windowHeight = $(window).height(),
      scrollPercent;

      $(window).scroll(function() {
        scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

        $('.scroll-progress').width(scrollPercent + '%');
        });
        });
function myFunction() {
    var person = prompt("Enter amount of donation below", "$1000");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Thank you for your donation of " + person + "!";
    }
}