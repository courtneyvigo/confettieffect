var confettigenerator = null;

var createConfetti = function(whichConfetti) {
   var confetti = "confetti" + whichConfetti;
   var div = document.createElement(confetti);
   var child = document.createElement(confetti+"child");
   div.style.position = "absolute";
   div.style.width = "20px";
   div.style.height = "19px";
   var multiplier = Math.random();
   var topMultiplier = Math.random();
   var leftMultiplier = Math.random();
   var rotation = ((90 * multiplier) - 45) + "deg";
   var left = (768* leftMultiplier) + "px";
   var top = (-20 * topMultiplier) + "px";
   div.style.webkitTransform = "rotate("+rotation+")";
   div.style.top = top;
   div.style.left = left;

   if ((whichConfetti%2) > 0) {
	child.className = "confetti " + "fallsleft";
   } else {
   	child.className = "confetti " + "fallsright";
   }
   document.getElementById("confetti-container").appendChild(div);
   div.appendChild(child);
   setTimeout(function(){
       div.remove();
   }, 30000);
}

var confettiParticle =function (){
    var i = 0;
    	confettigenerator = setInterval(function(){
    		createConfetti(i);
    		i++;
    	}, 500)
        	
}

clearInterval(confettigenerator);
confettiParticle();