// Initialize wallpaper to always match screen size and width
const clockBackground = document.querySelector('html');
clockBackground.style.background = `url(https://source.unsplash.com/VieM9BdZKFo/${screen.width}x${screen.height})`


// Initialize second hand
const secondHand = () =>{
  const secondHand = document.querySelector('.hand.second-hand');
  const time = new Date();
  const seconds = time.getSeconds();
  const secondDegrees = seconds/60*360+90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`
}

// Initialize minute hand
const minuteHand = () =>{
  const minuteHand = document.querySelector('.hand.minute-hand');
  const time = new Date();
  const minutes = time.getMinutes();
  const minuteDegrees = minutes/60*360+90;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
}

// Initialize hour hand
const hourHand = () =>{
  const hourHand = document.querySelector('.hand.hour-hand');
  const time = new Date();
  const hour = time.getHours();
  const hourDegrees = hour/24*360+90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

// Activate second, minute and hour hand for these functions
setInterval(secondHand, 1000);
setInterval(minuteHand, 1000);
setInterval(hourHand, 1000);