/*global document,*/

//Start Search Button

var mySearchBtn = document.getElementById("search"),
    mySearchIcon = document.getElementById("search-icon"),
    myChats = document.getElementById("chats"),
    myIconCloseAndOpenChats = document.getElementById("myIconClickToHome"),
    mySideCloseAndOpenChats = document.getElementById("mySideClickToHome"),
    myHomeDates = document.getElementById("home-dates"),
    myToggleBtHomeAndAside = document.getElementById("close-open-aside"),
    mySideNav = document.getElementById("side-Nav"),
    myOpenIcon = document.getElementById("plus"),
    myCloseIcon = document.getElementById("times"),
    myCompose = document.getElementById("compose"),
    mySideClickCompose = document.getElementById("side-click-compose"),
    myIconClickCompose = document.getElementById("icon-click-compose"),
    mybackHome = document.getElementById("backHome"),
    myPlusIcons = document.getElementById("plus-icon"),
    myProfile = document.getElementById("profile"),
    mySideClick = document.getElementById("side-click-profile"),
    myIconClick = document.getElementById("icon-click-profile"),
    myCloseProfile = document.getElementById("close-profile");

mySearchIcon.onclick = function () {

    "use strict";

    mySearchBtn.classList.toggle("search-input-width");

};

//End Search Button

//Start Aside Button

myToggleBtHomeAndAside.onclick = function () {

    'use strict';

    mySideNav.classList.toggle("aside-open");
    myPlusIcons.classList.remove("plus-icon-close");
    myCompose.classList.remove("compose-open");
    myOpenIcon.style.zIndex = "2";
    myCloseIcon.style.zIndex = "1";
    myChats.classList.remove("chats-open");


};


//Start Aside Button

//Start Back Home

mybackHome.onclick = function () {

    'use strict';

    mySideNav.classList.toggle("aside-open");
    document.getElementById("h1").innerHTML = "Home";
    myHomeDates.classList.remove("home-Dates-Close");

};

//End Back Home

//Start Icon Plus 

myOpenIcon.onclick = function () {

    'use strict';

    myPlusIcons.classList.toggle("plus-icon-close");
    myOpenIcon.style.zIndex = "1";
    myCloseIcon.style.zIndex = "2";
    document.getElementById("chats").style.zIndex = "1";
    document.getElementById("plus-icon").style.zIndex = "2";
    mySideNav.classList.remove("aside-open");

};

myCloseIcon.onclick = function () {

    'use strict';

    myPlusIcons.classList.toggle("plus-icon-close");
    myCloseIcon.style.zIndex = "1";
    myOpenIcon.style.zIndex = "2";
    document.getElementById("chats").style.zIndex = "1";
    document.getElementById("plus-icon").style.zIndex = "2";
    mySideNav.classList.remove("aside-open");

};

//End Icon Plus

//Start Date Function

var theDate = new Date();

document.getElementById("day").innerHTML = theDate.toDateString();


function showTime() {
    'use strict';
    var theTime = new Date(),
        theHours = theTime.getHours(),
        theMinutes = theTime.getMinutes(),
        theSeconds = theTime.getSeconds();

    if (theHours < 10) {
        theHours = "0" + theHours;
    }

    if (theMinutes < 10) {
        theMinutes = "0" + theMinutes;
    }

    if (theSeconds < 10) {
        theSeconds = '0' + theSeconds;
    }

    if (theHours < 12) {
        document.getElementById("time").innerHTML = theHours + ":" + theMinutes + ":" + theSeconds + " AM";
    }

    if (theHours > 12) {
        document.getElementById("time").innerHTML = theHours + ":" + theMinutes + ":" + theSeconds + " PM";
    }


}

window.onload = function () {
    'use strict';
    setInterval(showTime, 500);

};




//End Date Function

//Start Profile Function

mySideClick.onclick = function () {
    'use strict';

    myProfile.style.position = "absulote";
    myProfile.style.top = "0";
    myProfile.style.left = "0";
    myProfile.style.opacity = "1";
    myPlusIcons.classList.remove("plus-icon-close");

};

myIconClick.onclick = function () {
    'use strict';

    myProfile.style.position = "absulote";
    myProfile.style.top = "0";
    myProfile.style.left = "0";
    myProfile.style.opacity = "1";
    myPlusIcons.classList.toggle("plus-icon-close");
    myCompose.classList.remove("compose-open");
    myOpenIcon.style.zIndex = "2";
    myCloseIcon.style.zIndex = "1";
    myChats.classList.remove("chats-open");
};

myCloseProfile.onclick = function () {
    'use strict';

    myProfile.style.position = "absulote";
    myProfile.style.top = "400px";
    myProfile.style.left = "400px";
    myProfile.style.opacity = "0";
    myPlusIcons.classList.add("plus-icon-close");
    myCompose.classList.remove("compose-open");
    myHomeDates.classList.add("home-Dates");
    myHomeDates.classList.remove("home-Dates-Close");
    document.getElementById("h1").innerHTML = "Home";
    myOpenIcon.style.zIndex = "1";
    myCloseIcon.style.zIndex = "2";
    mySideNav.classList.remove("aside-open");

};

//End Profile Function

//Start Compose

mySideClickCompose.onclick = function () {
    'use strict';

    myCompose.classList.toggle("compose-open");
    mySideNav.classList.remove("aside-open");
    myHomeDates.classList.remove("home-dates");
    myHomeDates.classList.add("home-Dates-Close");
    document.getElementById("h1").innerHTML = "Compose";
    myProfile.style.position = "absulote";
    myProfile.style.top = "400px";
    myProfile.style.left = "400px";
    myProfile.style.opacity = "0";
    myChats.classList.remove("chats-open");
    mySideNav.classList.remove("aside-open");

};

myIconClickCompose.onclick = function () {
    'use strict';

    myCompose.classList.add("compose-open");
    mySideNav.classList.remove("aside-open");
    myHomeDates.classList.remove("home-Dates");
    myHomeDates.classList.add("home-Dates-Close");
    document.getElementById("h1").innerHTML = "Compose";
    myPlusIcons.classList.remove("plus-icon-close");
    myOpenIcon.style.zIndex = "2";
    myCloseIcon.style.zIndex = "1";
    myProfile.style.position = "absulote";
    myProfile.style.top = "400px";
    myProfile.style.left = "400px";
    myProfile.style.opacity = "0";
    myChats.classList.remove("chats-open");
    mySideNav.classList.remove("aside-open");

};

//End Compose

//Start Notification

function activeNotifications() {

    "use strict";

    document.getElementById("disactive-notfs").style.display = "block";
    document.getElementById("active-notfs").style.display = "none";


}

function disNotifications() {

    "use strict";

    document.getElementById("disactive-notfs").style.display = "none";
    document.getElementById("active-notfs").style.display = "block";


}

//End Notification

//Start Chats


myIconCloseAndOpenChats.onclick = function () {

    'use strict';

    myChats.classList.add("chats-open");
    document.getElementById("h1").innerHTML = "Chats";
    myHomeDates.classList.remove("home-Dates");
    myHomeDates.classList.add("home-Dates-Close");
    myPlusIcons.classList.toggle("plus-icon-close");
    myCompose.classList.remove("compose-open");
    myOpenIcon.style.zIndex = "2";
    myCloseIcon.style.zIndex = "1";
    myProfile.style.position = "absulote";
    myProfile.style.top = "400px";
    myProfile.style.left = "400px";
    myProfile.style.opacity = "0";
    document.getElementById("UsersH1").style.color = "#FFF";
    document.getElementById("UsersH1").style.borderBottom = "2px solid rgba(255, 255, 255, .7)";

};

mySideCloseAndOpenChats.onclick = function () {

    'use strict';

    myChats.classList.add("chats-open");
    document.getElementById("h1").innerHTML = "Chats";
    myHomeDates.classList.remove("home-dates");
    myHomeDates.classList.add("home-Dates-Close");
    myPlusIcons.classList.remove("plus-icon-close");
    myCompose.classList.remove("compose-open");
    mySideNav.classList.toggle("aside-open");
    myOpenIcon.style.zIndex = "2";
    myCloseIcon.style.zIndex = "1";
    document.getElementById("UsersH1").style.color = "#FFF";
    document.getElementById("UsersH1").style.borderBottom = "2px solid rgba(255, 255, 255, .7)";

};



function myUsers() {

    "use strict";

    document.getElementById("users").style.display = "block";
    document.getElementById("messages").style.display = "none";
    document.getElementById("groups").style.display = "none";
    document.getElementById("UsersH1").style.color = "#FFF";
    document.getElementById("MessagesH1").style.color = "(255, 255, 255, .7)";
    document.getElementById("GroupsH1").style.color = "(255, 255, 255, .7)";
    document.getElementById("UsersH1").style.borderBottom = "2px solid rgba(255, 255, 255, .7)";
    document.getElementById("MessagesH1").style.borderBottom = "none";
    document.getElementById("GroupsH1").style.border = "none";

}


function myMessages() {

    "use strict";

    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "block";
    document.getElementById("groups").style.display = "none";
    document.getElementById("MessagesH1").style.color = "#FFF";
    document.getElementById("GroupsH1").style.color = "rgba(255, 255, 255, .7)";
    document.getElementById("UsersH1").style.color = "rgba(255, 255, 255, .7)";
    document.getElementById("MessagesH1").style.borderBottom = "2px solid rgba(255, 255, 255, .7)";
    document.getElementById("UsersH1").style.borderBottom = "none";
    document.getElementById("GroupsH1").style.border = "none";

}

function myGroups() {

    "use strict";

    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("groups").style.display = "block";
    document.getElementById("GroupsH1").style.color = "#FFF";
    document.getElementById("MessagesH1").style.color = "rgba(255, 255, 255, .7)";
    document.getElementById("UsersH1").style.color = "rgba(255, 255, 255, .7)";
    document.getElementById("GroupsH1").style.borderBottom = "2px solid rgba(255, 255, 255, .7)";
    document.getElementById("MessagesH1").style.borderBottom = "none";
    document.getElementById("UsersH1").style.borderBottom = "none";

}
