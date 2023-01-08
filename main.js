function log() {
    playername1=document.getElementById("player1").value
    playername2=document.getElementById("player2").value
    localStorage.setItem("player1",playername1)
    localStorage.setItem("player2",playername2)
    window.location="math.html"
 }
  
 