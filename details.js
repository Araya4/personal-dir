const leftIcon = document.getElementById("prev");
const rightIcon = document.getElementById("next");

document.addEventListener('DOMContentLoaded', function() {
    // Extract query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const cardId = params.get('card');

    var cardNum = Number(cardId);
    
    // Load content based on cardId
    const contentElement = document.getElementById('myVideo');
    contentElement.src = videoUrl[cardNum];

    rightIcon.href = cardNum===(arrSrc.length-1)?"index.html":`details.html?card=${cardNum+1}`;
    leftIcon.href = cardNum===1?"index.html":`details.html?card=${cardNum-1}`
});
