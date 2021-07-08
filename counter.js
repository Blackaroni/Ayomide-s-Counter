var data = 0;
    let max = 50;
    let min = 0;
  
 
  document.getElementById("counting").innerText = data;
    
 
  function increment() {
      document.getElementById("counting").innerText = (data >= max) ? data: ++data;
  }
  
  function decrement() {
      document.getElementById("counting").innerText = (data <= min) ? data: --data;
  }
  