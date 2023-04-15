// DOM elements


const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector(".feeds-page");
const loginModel = document.querySelector('.login-model');
const modelX = document.querySelector(".login-model i");
const loginFormBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modelWrapper = document.querySelector(".model-wrapper");
const model = document.querySelector(".model");
const postModelx = document.querySelector(".model-header i");
const modelPostBtn = document.querySelector('model-header button');
const modelFooterPlus = document.querySelector(".model-footer span");
const modelInput = document.querySelector(".model-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

/* *******************************  */

// Main page 

const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
};

middleContent.addEventListener('click' , e => {
    if (e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
});

btnTop.addEventListener("click", () => {
    const inputUserInfo = document.querySelector(".user-info");
    const inputPassword = document.querySelector(".password");

    if (inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = "block";
    } else {
        goToLoginPage();
        loginModel.style.display='block';
    }
});


// login page

modelX.addEventListener('click', () => {
    loginModel.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
    const loginUserInfo = document.querySelector(".login-user-info");
    const loginPassword = document.querySelector(".login-password");

    if (loginUserInfo.value !== "" && loginPassword.value !== ""){
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";
    } else{
        loginModel.style.display = "block";
    }

})


// news feed Page
//  post model

postBtn.addEventListener('click', () => {
    model.style.display = "block";
    modelWrapper.classList.add("model-wrapper-display");

    if(modelInput.value !== '') {
        modelInput.value = '';
        changeOpacity(0.5);
    }
});

const changeOpacity = x => {
    modelPostBtn.style.display = x;
    modelFooterPlus.style.opacity = x;
};

postModelx.addEventListener('click', () => {
    model.style.display = "none";
    modelWrapper.classList.remove('model-wrapper-display');
});

modelInput.addEventListener("keypress", e => {
    if(e.target.value !== ''){
        changeOpacity(1);
    }
});

modelInput.addEventListener("blur" , (e) => {
    if(e.target.value === '') {
        changeOpacity(0.5);
    }
});


// Sidebar 

user.addEventListener('click', () => {
    sidebar.classList.add("sidebar-display");
    sidebarWrapper.classList.add("sidebar-wrapper-display");
});

xBtn.addEventListener('click', () => {
    sidebar.classList.remove("sidebar-display");
    sidebarWrapper.classList.remove("sidebar-wrapper-display");
});




// dark mode

const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");
const lightTexts = document.querySelectorAll(".light-text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).forEach(darkEl1 => {
        darkEl1.classList.toggle('dark-1');
    });
    Array.from(darkElements2).forEach(darkEl2 => {
        darkEl2.classList.toggle('dark-2');
    });
    Array.from(lightTexts).forEach(lightText => {
        lightText.classList.toggle('light');
    });
    Array.from(borders).forEach(border => {
        border.classList.toggle('border-color');
    });
});
