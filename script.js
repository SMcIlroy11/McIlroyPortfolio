/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

console.log("This is working!");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


Name: <input type="text" id="myText" value="Mickey">

<p>Click the button to change the value of the text field.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("myText").value = "Johnny Bravo";
}
</script>
}
}


}


}
</script>