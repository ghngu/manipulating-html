var btn = document.createElement('button');
var btnText = document.createTextNode('Click me!');
btn.className = 'Nice!';
btn.appendChild(btnText);
document.body.appendChild(btn);
var btn2 = document.getElementById('submit');
var inputText = document.getElementById('inputText');

// step 1.
btn.addEventListener('click', function () {
    alert('nice!');
});

// step 2.
btn2.addEventListener('click', function () {
    alert(inputText.value);
});

// step 3.
var div = document.getElementById('changeColor');
div.style.height = "5em";
div.style.width = "5em";

div.addEventListener('mouseover', function () {

    div.style.backgroundColor = 'rgb(' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3 + ')';
})
div.addEventListener('mouseleave', function () {

    div.style.backgroundColor = "white";
})

// step 4.
var p = document.createElement('p');
var pText = document.createTextNode('This is just some text!');
p.appendChild(pText);
document.body.appendChild(p);

var ranNum1 = Math.floor(Math.random() * 256);
var ranNum2 = Math.floor(Math.random() * 256);
var ranNum3 = Math.floor(Math.random() * 256);

p.addEventListener('click', function () {
    p.style.color = 'rgb(' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3 + ')';
})

// step 5.
var btnSpan = document.getElementById('span');

btnSpan.addEventListener('click', function () {
    var span = document.createElement('span');
    var name = document.createTextNode('George Nguyen. ');
    var spanName = document.getElementById('spanName');
    span.appendChild(name);
    spanName.appendChild(span);
})

// step 6.
var btnFriends = document.getElementById('listFriends');
var ulFriends = document.getElementById('friends');

btnFriends.addEventListener('click', function () {
    var friends = ['Heather', 'Josh C.', 'Stoney', 'Kierston', 'Zellie', 'Emily', 'Josh W.', 'Garrett', 'Daniel', 'Anna', 'Kim'];
    for (var i = 0; i < friends.length; i++) {
        var li = document.createElement('li');
        var friendsI = document.createTextNode(friends[i]);
        li.appendChild(friendsI);
        ulFriends.appendChild(li);
    };
});