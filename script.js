/*---=====menu hide & show=====---*/
const iconDiv = document.querySelector('.menu-icon');
iconDiv.onclick = function toggleMenu() {
    const navbarSelect = document.querySelector('.nav-div');
    let menuIcon = document.querySelector('.menu-icon');    
    if(navbarSelect.style.display === 'flex'){
        navbarSelect.style.display = "none";
        menuIcon.innerHTML = "&#9776;";//menu icon
    }

    else{
        navbarSelect.style.display = "flex";
        menuIcon.innerHTML = "&#10006;";//close icon
    }
};
/*---=====menu hide & show end=====---*/

/*---=====fetch IP address=====---*/
    const apiUrl = 'https://api.ipify.org?format=json';
    const showIp = document.querySelector('.form-control');
    const btn = document.querySelector('.btn');
    const ipAddress = async () =>{
        let response = await fetch(apiUrl);
        let result = await response.json();
        showIp.placeholder = ("IP: " + result.ip)
    }
btn.addEventListener("click", ipAddress);
/*---=====fetch IP address end=====---*/












// const apiUrl = 'https://api.ipify.org?format=json';
// const inputSelect = document.querySelector('.form-control');
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         inputSelect.placeholder = ("IP: " + data.ip);
//     })

//     .catch(error => {
//         inputSelect.placeholder = ("Error: " + error.message);
//         console.error("Error IP fetch:", error);
//     }
//     );
// /*---=====fetch IP address end=====---*/

// /*---=====current date & time=====---
// const currentDate = new Date();
// const dateShow = document.querySelector('.time');
// const timeShow = currentDate.toLocaleTimeString();
// dateShow.innerHTML = currentDate.toLocaleString('en-IN');

// */
// const dateTime = document.querySelector('.date-time');
// const option = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: true
// };

// function updateTime(){
//     const currentDate = new Date();
//     const englishDate = currentDate.toLocaleString('en-GB', option);
//     dateTime.innerHTML = englishDate;
// }

// updateTime();

// setInterval(updateTime, 1000);