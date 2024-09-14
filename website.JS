/*Arrows*/

function scrolldown(){
    let left = document.querySelector(".contents")
    left.scrollBy(0, -500)
}
function scrollup(){
    let right = document.querySelector(".contents")
    right.scrollBy(0, 500)
}

/*Top bar links*/

function scrolldiv(element) {
    var elem = document.getElementById(element);
    elem.scrollIntoView();
}

/*Copy text*/

function copyContent() {
    // Code to copy content
    const contentToCopy = document.getElementById('myText').textContent;
    navigator.clipboard.writeText(contentToCopy);
  }
  
document.getElementById('copyButton').onclick = copyContent;
