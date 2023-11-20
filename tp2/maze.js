document.addEventListener("DOMContentLoaded", function () {
    var boundary1 = document.getElementById("boundary1");
    
    boundary1.addEventListener("mouseover", function () {
        boundary1.classList.add("youlose");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var boundaries = document.querySelectorAll(".boundary");

    boundaries.forEach(function (boundary) {
        boundary.addEventListener("mouseover", function () {
            boundaries.forEach(function (b) {
                b.classList.add("youlose");
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var endElement = document.getElementById("end");

    endElement.addEventListener("mouseover", function () {
        alert("You win!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("start");
    var boundaries = document.querySelectorAll(".boundary");

    var gameInProgress = false;

    startButton.addEventListener("click", function () {
        boundaries.forEach(function (boundary) {
            boundary.classList.remove("youlose");
        });

        gameInProgress = true;
    });

    boundaries.forEach(function (boundary) {
        boundary.addEventListener("mouseover", function () {
            if (gameInProgress) {
                boundaries.forEach(function (b) {
                    b.classList.add("youlose");
                });
                alert("You lose!");
                gameInProgress = false;
            }
        });
    });
});
