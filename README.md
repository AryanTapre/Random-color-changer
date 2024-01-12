**Technology Used:** ![javascript](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/js.png) ![html5](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/html5.png) ![css3](https://res.cloudinary.com/djmev9ppr/image/upload/v1705071655/icons/css3.png)

**Cool Name Be:** *Random Body Color Changer*


---
📝**Requirement:**  
Change background color continously when button clicked and stop on `stop` button clicked 

📒**Description:**
Demonstrating the use of `setInterval()` and `clearInterval()` web API for randomly changing the body color for `200` miliSeconds..

🤖**Technical Discussion:**
 - On `start` button start randomly changing the color
 - Set the `setInterval()` to 200 milisecond to continously changing the color.
 - On `stop` button set `clearInterval()` to stop generating random colors.

```Javascript
startButton.addEventListener('click',function (){
    if(!reference) {
        reference = setInterval(function (){
            document.body.style.backgroundColor = generateRandomRgb();
        },200);
    }
},false);
```

```Javascript
stopButton.addEventListener("click",function (){
    console.log(reference);
    clearInterval(reference);
    reference = null;
},false)
```

>Executing directly:

$~~~~~~$ Run index.html file, default browser with this file loaded will opened.

> Through Vs code while using 'LiveServer' extension

$~~~~~~$ Right click on index.html, click open with live server will server this page at default PORT.
