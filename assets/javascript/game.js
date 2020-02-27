        
        
        //VARIABLES 
            //The player will click on the jewel = assign click event listerner to the jewels 
            // The total score initially is 0 = creating totalScore variable and initialize it as 0
            //Creating 2 variables including win and lose, initialize them with zero
            //The assigned number is random = creating an assigned number variable containing an array from 19-120 and make it random
            //Each jewels will be assigned a hidden number to it = create 4 variables which contain number array from 1 to 20

        //FUNCTION + CONDITION 
            //Creating a function to add jewel score (Addition function)
            //Creating a function with conditions to determine if the player win by compare the total score to assigned number
            //Link the total score, assigned # , wins and lose from JS to HTML


        //If you're using jquery, always start and end with  $(document).ready(function(){ ALL THE CODE }
            $(document).ready(function(){

                var totalScore =0;
                var assignedNumber = Math.floor(Math.random()*101)+19;
                var jewelBlue = Math.floor(Math.random()*19)+1;
                var jewelPink = Math.floor(Math.random()*19)+1;
                var jewelPurple = Math.floor(Math.random()*19)+1;
                var jewelRound = Math.floor(Math.random()*19)+1;
                console.log("blue:",jewelBlue);
                console.log("pink:",jewelPink);
                console.log("purple:",jewelPurple);
                console.log("round:",jewelRound);
    
                //Create Win and Lose Variables and link them to HTML
                var win = 0;
                $("#userWin").html("Wins:" + win);
                var lose = 0;
                $("#userLose").html("Lose:" + lose);
            
                //Assigned click event to jewelBlue through the id, adding function and console.log the new total score
                $("#blue").on("click",function(){

                    totalScore= totalScore + jewelBlue
                    console.log("New Total:"+totalScore);

                    $("#totalScore").text(totalScore);
                        if (assignedNumber == totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber < totalScore) {
                            userLose();
                        };
                });

                //Assigned click event to jewelPink through the id, adding function and console.log the new total score
                $("#pink").on("click",function(){
                    totalScore= totalScore + jewelPink
                    console.log("New total:"+totalScore);

                    $("#totalScore").text(totalScore);
                        if (assignedNumber == totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber < totalScore) {
                            userLose();
                        };
                });

                //Assigned click event to jewelPurple through the id, adding function and console.log the new total score
                $("#purple").on("click",function(){
                    totalScore= totalScore + jewelPurple;
                    console.log("New Total:"+totalScore);

                    $("#totalScore").text(totalScore);
                        if (assignedNumber == totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber < totalScore) {
                            userLose();
                        };
                });


                //Assigned click event to jewelRound through the id, adding function and console.log the new total score
                $("#round").on("click",function(){
                    totalScore= totalScore + jewelRound;
                    console.log("New Total:"+totalScore);    

                    $("#totalScore").text(totalScore);
                        if (assignedNumber == totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber < totalScore) {
                            userLose();
                        };
                });

                //Link the JS assignedNumber to the assigned Number <div>
                $("#assignedNumber").text(assignedNumber);
                $("#totalScore").text(totalScore);


                //Creating 3 functions including win, lose and reset after user complete the game. 
                
                
                function resetGame (){

                    totalScore =0;
                    $("#totalScore").text(totalScore);

                    assignedNumber = Math.floor(Math.random()*101)+19;
                    console.log(assignedNumber);
                    $("#assignedNumber").text(assignedNumber);
                    
                    jewelBlue = Math.floor(Math.random()*19)+1;
                    console.log(jewelBlue);

                    jewelPink = Math.floor(Math.random()*19)+1;
                    console.log(jewelPink);

                    jewelPurple = Math.floor(Math.random()*19)+1;
                    console.log(jewelPurple);

                    jewelRound = Math.floor(Math.random()*19)+1;
                    console.log(jewelRound);
                
                };

                function userWin (){
                    alert("Congrats! You Win");
                    win++;
                    $("#userWin").text("Wins:"+" "+win);
                    resetGame();

                };

                function userLose (){
                    alert("Opps! Try Again!");
                    lose++;
                    $("#userLose").text("Lose:"+ " " +lose);
                    resetGame();
                };
    
              
            });




            
            
                
               

          

