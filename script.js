const btn = document.querySelector("#btn");
const par = document.querySelector("#par");

const quote =["“Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again.” —Steve Jobs", 
"“Life is like riding a bicycle. To keep your balance you must keep moving.” —Albert Einstein",
"“What you do speaks so loudly that I cannot hear what you say.” —Ralph Waldo Emerson",
"“I have never let my schooling interfere with my education.” —Mark Twain",
"“If you can't yet do great things, do small things in a great way.” ―Napoleon Hill",
"“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.” ―Jim Rohn",
"“Be sure you put your feet in the right place, then stand firm.” ―Abraham Lincoln",
"“Live out of your imagination, not your history.” —Stephen Covey",
"“Do not wait for the perfect time and place to enter, for you are already onstage.” —Unknown",
"“The greater the difficulty, the more the glory in surmounting it.” ―Epicurus",
"“Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, `I will try again tomorrow.`” —Mary Anne Radmacher",
"“If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you’ll never become that person.” ―Clayton M. Christensen"];

const image = [`./attachment/2.jpeg`, `./attachment/3.jpeg`, `./attachment/4.jpeg`, `./attachment/5.jpeg`, `./attachment/6.jpeg`, `./attachment/7.jpeg`, `./attachment/8.jpeg`, `./attachment/9.jpeg`, `./attachment/10.jpeg`, `./attachment/11.jpeg`, `./attachment/12.jpeg`, `./attachment/13.jpeg`];

btn.addEventListener("click",()=>{
    let randomQuotes = quote[Math.floor(Math.random()*quote.length)];


    let randomImage = `url(${image[Math.floor(Math.random()*image.length)]})`;
    
    let i=0;
    document.body.style.backgroundImage = randomImage;
    

    console.log(randomImage)
    i++
        if( i > image.length){
        i=0;
}


par.textContent = randomQuotes;
    par.style.display = "block";
    btn.style.display = "none";
})

