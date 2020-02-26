        
        
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
                var assignedNumber = Math.floor(Math.random()*120)+19;
                var jewelBlue = Math.floor(Math.random()*19)+1;
                var jewelPink = Math.floor(Math.random()*19)+1;
                var jewelPurple = Math.floor(Math.random()*19)+1;
                var jewelRound = Math.floor(Math.random()*19)+1;

                //Create Win and Lose Variables and link them to HTML
                var win = 0;
                $("#userWin").html("Wins:" + win);
                var lose = 0;
                $("#userLose").html("Lose:" + lose);
            
                //Assigned click event to jewels through the id
                $("#blue").on("click",function(){
                    totalScore= totalScore + jewelBlue
                    $("#totalScore").text(jewelBlue);
                        if (assignedNumber === totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber !== totalScore) {
                            userLose();
                        };
                });

                $("#pink").on("click",function(){
                    totalScore= totalScore + jewelPink
                    $("#totalScore").text(jewelPink);
                        if (assignedNumber === totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber !== totalScore) {
                            userLose();
                        };
                });

                $("#purple").on("click",function(){
                    totalScore= totalScore + jewelPurple
                    $("#totalScore").text(jewelPurple);
                        if (assignedNumber === totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber !== totalScore) {
                            userLose();
                        };
                });

                $("#round").on("click",function(){
                    totalScore= totalScore + jewelRound
                    $("#totalScore").text(jewelRound);
                        if (assignedNumber === totalScore) {
                            userWin();
                        }
    
                        else if (assignedNumber !== totalScore) {
                            userLose();
                        };
                });

                //Link the JS assignedNumber to the assigned Number <div>
                $("#assignedNumber").append(assignedNumber);
                $("#totalScore").append(totalScore);

                function resetGame (){
                    var totalScore =0;
                    var assignedNumber = Math.floor(Math.random()*120)+19;
                    var jewelBlue = Math.floor(Math.random()*19)+1;
                    var jewelPink = Math.floor(Math.random()*19)+1;
                    var jewelPurple = Math.floor(Math.random()*19)+1;
                    var jewelRound = Math.floor(Math.random()*19)+1;
                    var win = 0;
                    $("#userWin").html("Wins:" + win);
                    var lose = 0;
                    $("#userLose").html("Lose:" + lose);
                }

                function userWin (){
                    win++;
                    resetGame();
                };

                function userLose (){
                    lose++;
                    resetGame();
                }
    
              
            });




            
            
                
               

          

