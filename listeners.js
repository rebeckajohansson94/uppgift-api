/* function addEventListeners() {
    const showBtn = document.querySelectorAll('.btn-show');
    const closeBtn = document.querySelectorAll('.btn-close');
    const moreInfo = document.querySelectorAll('.more-info');

    showBtn.forEach((button, index) => {
        button.addEventListener('click', function() {
            moreInfo[index].style.display = 'block';
            button.style.display = 'none';            
            closeBtn[index].style.display = 'block'; 
        });
    });


    closeBtn.forEach((button, index) => {
        button.addEventListener('click', function() {
            moreInfo[index].style.display = 'none';
            showBtn[index].style.display = 'block';  
            button.style.display = 'none';           
        });
    });
} */


 /*    function addEventListeners() {
        const userCardsContainer = document.querySelector('.user-cards');
    
        // Lyssna på hela .user-cards-container istället för individuella knappar
        userCardsContainer.addEventListener('click', function(event) {
            const target = event.target;

            
    
            // Om det är en "Visa mer" knapp
            if (target.classList.contains('btn-show')) {
                const userCard = target.closest('.user-card');
                const moreInfo = userCard.querySelector('.more-info');
                const closeBtn = userCard.querySelector('.btn-close');
    
                moreInfo.style.display = 'block';
                target.style.display = 'none';
                closeBtn.style.display = 'block';
            }
    
            // Om det är en "Stäng" knapp
            if (target.classList.contains('btn-close')) {
                const userCard = target.closest('.user-card');
                const moreInfo = userCard.querySelector('.more-info');
                const showBtn = userCard.querySelector('.btn-show');
    
                moreInfo.style.display = 'none';
                target.style.display = 'none';
                showBtn.style.display = 'block';
            }
        });
    }  */


        function addEventListeners() {
            const userCardsContainer = document.querySelector('.user-cards');
            
            userCardsContainer.addEventListener('click', function(event) {
                const target = event.target;
        
                const userCard = target.closest('.user-card');
                const moreInfo = userCard.querySelector('.more-info');
                const showBtn = userCard.querySelector('.btn-show');
                const closeBtn = userCard.querySelector('.btn-close');
        
                if (target.classList.contains('btn-show')) {
                    moreInfo.style.display = 'block';
                    showBtn.style.display = 'none';
                    closeBtn.style.display = 'block';
                }
        
                if (target.classList.contains('btn-close')) {
                    moreInfo.style.display = 'none';
                    closeBtn.style.display = 'none';
                    showBtn.style.display = 'block';
                }
            });
        }