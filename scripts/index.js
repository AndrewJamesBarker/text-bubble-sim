// bubbles

var bubble1 = document.getElementById("bubble1");
var bubble2 = document.getElementById("bubble2");
var bubble3 = document.getElementById("bubble3");
var bubble4 = document.getElementById("bubble4");

// bubble1.style.display = "none";
// bubble2.style.display = "none";
// bubble3.style.display = "none";
// bubble4.style.display = "none";


// Message boxes

var message1Box = document.getElementById("message1Box");
var message2Box = document.getElementById("message2Box");
var message3Box = document.getElementById("message3Box");
var message4Box = document.getElementById("message4Box");

// messages

var message1Text = "I’m anxious about a presentation, and I’m worried about messing it up.";
var message2Text = "Pre-presentation nervousness is common. Let's work on managing anxiety with positive self-talk or visualization techniques.";
var message3Text = "How does that work? Can you give me some examples?";
var message4Text = "Visualization sets the stage for success, and positive self-talk helps to boost confidence. I can send some examples for you to try.";

// Print message char by char

function writeMessage(string, messageBox) {
  var i = 0, intervalId;
  intervalId = window.setInterval(function() {
      try {
        if (messageBox.innerHTML === null) {
          messageBox.innerHTML = " ";
        } else {
          messageBox.innerHTML += string.charAt(i++);
          if (i > string.length) 
              window.clearInterval(intervalId);
        }
      } catch (err) {
        console.log(err);
      }
  }, 100); 
}


writeMessage(message1Text, message1Box);

setTimeout(function(){
  bubble2.style.display = "block";
  writeMessage(message2Text, message2Box);
},8000);

setTimeout(function(){
  bubble3.style.display = "block";
  writeMessage(message3Text, message3Box);
},21000)

setTimeout(function(){
  bubble4.style.display = "block";
  writeMessage(message4Text, message4Box);
},27000)


console.log(message1Text);