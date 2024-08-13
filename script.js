// Set the date we're counting down to
const launchDate = new Date("2024-12-31T23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = launchDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".content").innerHTML = "<h1>We are live!</h1><p>Check back later to explore our site.</p>";
    }
}, 1000);
