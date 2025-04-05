/* Eventlistener-function for showing and hiding more info per usercard. It's called within the async function in logic.js */

function addEventListeners() {
    const userCards = document.querySelectorAll('.user-card');

    userCards.forEach(userCard => {
        const showBtn = userCard.querySelector('.btn-show');
        const closeBtn = userCard.querySelector('.btn-close');
        const moreInfo = userCard.querySelector('.more-info');

        showBtn.addEventListener('click', function() {
            moreInfo.style.display = 'block';
            showBtn.style.display = 'none';
            closeBtn.style.display = 'block';
        });

        closeBtn.addEventListener('click', function() {
            moreInfo.style.display = 'none';
            closeBtn.style.display = 'none';
            showBtn.style.display = 'block';
        });
    });
};