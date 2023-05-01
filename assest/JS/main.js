// =================== SHOW MENU ==================================

//=======MENU SHOW===============
// validate if constant exists

// =================== REMOVE MENU MOBILE ==================================

// =================== SCROLL SECTION ACTIVE LINK ==================================

// =================== CHANGE BACKGROUND HEADER ==================================

// =================== SHOW SCROLL UP ==================================

// =================== ABOUT TABS ==================================
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('tab__active');
            })

            target.classList.add('tab__active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab__active');
            })

            tab.classList.add('tab__active');
        })
    })

// =================== CONTACT FORM ==================================
