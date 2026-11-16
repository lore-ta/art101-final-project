let messagesA = [

]; 

let information = {
    scene1: "It's another rainy day at UCSC, you wake up earlier than your alarm and can’t fall back asleep even though you're tired. You only got 3 hours of sleep because you were up all night studying for your midterm today. Are you ready for the day?"
};

$("#awake").click(function () {
    let message = information.scene1;
    $("#answer").html(message);
});
