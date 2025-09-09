/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
The browser has a lot of global objects!
We dont need to define them!
-We want to extend the backpack class  and object type with a new property
called "dateAcquired" so I know when I got the backpack
and I can do some math so I can figure out how old that backpack is
-We first add a new parameter to the  class constructor
ex: dateAcquired
-Then we set up a new property :
ex: this.dateAcquired = dateAcquired;
-Finally we go to script.js and we add a new value:
ex: "December 5, 2018, 15:00:00 PST"
-this is a human readble string(text);
-We can output it in the browser using the same methods
ex: console.log("Date acquired: ", everydayPack.dateAcquired);
in console we see: Date acquired: December 5, 2018, 15:00:00 PST
-Now I want to convert this text string into something meaningfull
so I can compare that date with the current date so I can figure out 
how many days have gone between them and figure out the age of my backpack
-To do that I need the Date object
-The Date object can take pretty much any string that describes date and time
and convert it into something meaningfull .
What it does is it's converts it into milliseconds that have passed
since the 1 January 1970 UTC
And then it applies methods on top of that to convert that
huge number of milliseconds into something meanigfull for us humans.
That's done using one of the "Instance methods" that come with the
Date object.
-To get the date right now in console: 
const rightNow = new Date();
rightNow
//Tue Sep 09 2025 18:38:17 GMT+0200 (Central European Summer Time)
I want to convert it into a shorter string with the method called:
"toDateString"-returns the "date" portion of the Date as human-readble string
like: "Thu Apr 12 2018"
-In the console type: 
rightnow.toDateString()
//'Tue Sep 09 2025'
I can take any date and convert it to anything else
  In the Backpack class there is a new method:
 backpackAge() {
    let now = new Date(); 
    //This gives the current date and time right now
    let acquired = new Date(this.dateAcquired);
    //Then acquired = new Date(passing in the date aquired string)
    so I am taking the string in the property and I am putting it inside the new date.
    Now the Date object will give me that same output except that
    the output will be for the date I passed to it, that string of text,
     which in our case is: "December 5, 2018, 15:00:00 PST"
    
    let elapsed = now - acquired; // elapsed time in milliseconds

     Now I have 2 new objects and these are in  milliseconds
     The difference is in milliseconds represents the milliseconds
     since the 1st of January 1970 UTC for these two different dates:
     the current date and the date I aquired the backpack
     These are now single large numbers and I can do regular Math on them;
    In the elapsed I say take the now Date and subtract the acquired Date

    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
Finally on  daysSinceAcquired I use the Math.floor method to do some math
on it and just take away all the decimals 
-Take the elapsed value which are all those milliseconds  and divide 
by 1000  to turn it into seconds
then divide by 3600 to turn it into hours 
and then divide it by 24 to turn it into days

    return daysSinceAcquired;
    This will return the number of days value since I have got this backpack

  }
This method is calculating how many days have been since I have bought
the backpack.

Then I need to use that method in the script.js 
console.log("Days since aquired", everydayPack.backpackAge());
To run it as a method add parentheses after the method
in the console the output is: 
//Days since aquired: 2469

So I have taken a string of text, 
used the Date object  to turn it into a meaningfull  date
then I have done some math on that Date to figure out how many days ago
that was and returned  that back so I can see it in the browser

*/

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Days since aquired", everydayPack.backpackAge());
