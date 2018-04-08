// Step 1.
var btnNice = $('<button type="button"></Button');
btnNice.text("Welcome!");
btnNice.click(function () {
    alert('Welcome to this page! Stay a while and enjoy!')
});
btnNice.prependTo('body');

// step 2.
var btnSub = $('#outPut');
var inputText = $('#inputText');
btnSub.click(function () {
    alert(inputText.val());
});

// step 3.
var ranNum1 = Math.floor(Math.random() * 256);
var ranNum2 = Math.floor(Math.random() * 256);
var ranNum3 = Math.floor(Math.random() * 256);
var divColor = $('#chngColor')
divColor.css({
    'width': '5em',
    'height': '5em',
    'background-color': 'grey'
});
divColor.mouseover(function () {
    divColor.css('background-color', 'rgb(' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3 + ')');
});
divColor.mouseleave(function () {
    divColor.css('background-color', 'grey');
})

// Step 4.
var p = $('#ranColor');
p.click(function () {
    p.css('color', 'rgb(' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3 + ')');
});

// Step 5.
var btnSpan = $('#name');
var span = $('<span></span>');
span.text('George Nguyen ');
var divName = $('#myName');
btnSpan.click(function () {
    span.appendTo(divName);
});

// Step 6.
var btnFriends = $('#friends');
var ulFriends = $('ul');

btnFriends.click(function () {
    var friends = ['Heather', 'Josh C.', 'Stoney', 'Kierston', 'Zellie', 'Emily', 'Josh W.', 'Garrett', 'Daniel', 'Anna', 'Kim'];
    for (var i = 0; i < friends.length; i++) {
        var li = $('<li>' + friends[i] + '</li>');
        li.appendTo('ul')
    };
});