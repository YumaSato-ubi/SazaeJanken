  window.onload = function(){
    var WinorLose = document.getElementById('WinorLose');
     var yourHand = document.getElementById('yourHand');
     var img = document.getElementById('img');
     var gu = document.getElementById('gu');
     var tyoki = document.getElementById('tyoki');
     var pa = document.getElementById('pa-');

     img.style.visibility = "hidden";
     WinorLose.style.visibility = "hidden";
     yourHand.style.visibility = "hidden";
 
     function handList(){
       const num = 3;
       const hand = Math.floor(Math.random() * num);
       if (hand < 1){
         img.src = "jyanken_gu.jpg";
       } else if (hand < 2 ){
         img.src = "jyanken_tyoki.jpg";
       } else if (hand < 3) {
         img.src = "jyanken_pa-.jpg";
       }
       return hand;
     }
     gu.addEventListener('click', () => {
       yourHand.src = "jyanken_gu.jpg";
       img.style.visibility = "visible"
       yourHand.style.visibility = "visible"
       hand = handList();
       if (hand < 1){
         WinorLose.style.color = "black"
         WinorLose.textContent = 'あいこ！';
         WinorLose.style.visibility = "visible"
       } else if (hand < 2 ){
         WinorLose.style.color = "red"
         WinorLose.textContent = '勝ち！！';
         WinorLose.style.visibility = "visible"
       } else if (hand < 3) {
         WinorLose.style.color = "blue"
         WinorLose.textContent = '負けー';
         WinorLose.style.visibility = "visible"
       }
     });
     tyoki.addEventListener('click', () => {
       yourHand.src = "jyanken_tyoki.jpg";
       img.style.visibility = "visible"
       yourHand.style.visibility = "visible"
       hand = handList();
       if (hand < 1){
         WinorLose.style.color = "blue"
         WinorLose.textContent = '負けー';
         WinorLose.style.visibility = "visible"
       } else if (hand < 2 ){
         WinorLose.style.color = "black"
         WinorLose.textContent = 'あいこ！';
         WinorLose.style.visibility = "visible"
       } else if (hand < 3) {
         WinorLose.style.color = "red"
         WinorLose.textContent = '勝ち！！';
         WinorLose.style.visibility = "visible"
       }
     });
     pa.addEventListener('click', () => {
       yourHand.src = "jyanken_pa-.jpg";
       img.style.visibility = "visible"
       yourHand.style.visibility = "visible"
       hand = handList();
       if (hand < 1){
         WinorLose.style.color = "red"
         WinorLose.textContent = '勝ち！！';
         WinorLose.style.visibility = "visible"
       } else if (hand < 2 ){
         WinorLose.style.color = "blue"
         WinorLose.textContent = '負けー';
         WinorLose.style.visibility = "visible"
       } else if (hand < 3) {
         WinorLose.style.color = "black"
         WinorLose.textContent = 'あいこ！';
         WinorLose.style.visibility = "visible"
       }
     });
     console.log(gu);   
  };