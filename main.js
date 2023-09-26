var points=0;

function decrease(){
    points=points-5;
    document.getElementById("score").textContent=points;
    }

function increase(){
    points=points+5;
    document.getElementById("score").textContent=points;
}