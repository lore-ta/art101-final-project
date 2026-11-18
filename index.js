$("#awake").click( function(){
  
   $("#wakeUp").show();
   $("#home").hide();


});


$("#yes").click( function(){


   $("#yesResult").show();
   $("#wakeUp").hide();


});


$("#no").click( function(){


   $("#noResult").show();
   $("#wakeUp").hide();


});


$("#fine").click( function(){


   $("#noResult").hide();
   $("#getReady").show();


});


$("#go").click( function(){


   $("#yesResult").hide();
   $("#getReady").show();


});
