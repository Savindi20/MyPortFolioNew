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
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contacMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        //check field has value
        if(contactName.value === '' || 
            contactEmail.value === '' || 
            contactSubject.value === '' || 
            contacMessage.value === '' 
        ){
            // show msg
            errorMessage.textContent = 'write all the input fields'
        }else{
            // serviceID -templateID -#from -publicey
            emailjs.sendForm(
                'service_8sz780b',
                'template_w9ahpib',
                '#contact-form',
                'vEHtuNnTx0daZ9eqU'
            ).then(() => {
                //show message and add colour, window + dot to open emojy
                errorMessage.classList.add('color-first') 
                errorMessage.textContent = 'message send ✔ '

                //remove msg after 5 second
                setTimeout(() => {
                    errorMessage.textContent = '';
                },5000);
            }, (error) => {
                alert('OOPs! SOMETHIN WENT WRONG...', error);
                }
            );

            //clear input fields
            contactName.value = '' ;
            contactEmail.value = '' ;
            contactSubject.value = '' ;
            contacMessage.value = '' ;
        }
    };

    contactForm.addEventListener('submit', sendEmail);

