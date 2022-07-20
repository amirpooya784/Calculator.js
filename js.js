 var powerflag = false;
          function addToCalculator(event) {
               document.getElementById('inputDisplay').value += event.target.value;
               if(powerflag){
                    var numbers =  document.getElementById('inputDisplay').value.split('^');
                    document.getElementById('inputDisplay').value = Math.pow(numbers[0],numbers[1]);
                    powerflag=false;
               }
          }
          function finallize(){
               document.getElementById('inputDisplay').value = eval (document.getElementById('inputDisplay').value);
          }
          function reset(){
               document.getElementById('inputDisplay').value = '';
          }
          function mathCalc(mathFunc){
               if(mathFunc=='pow'){
                    powerflag=true;
                    document.getElementById('inputDisplay').value += '^';
               }else{
               var val =  document.getElementById('inputDisplay').value ;
               document.getElementById('inputDisplay').value = Math[mathFunc](val);
               }
              
          }
