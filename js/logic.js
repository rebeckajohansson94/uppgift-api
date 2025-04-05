/* Fetching API from JSONplaceholder */

async function getUsers(){
    try{
        const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!fetchResponse.ok){
            throw new Error('Could not fetch data: ' + fetchResponse.status);
        }
        const dataResponse = await fetchResponse.json();
        const userCardsContainer = document.querySelector('.usercards-container')
        userCardsContainer.innerHTML = "";

        dataResponse.forEach(user => {
            let userContent = `
                <div class="user-card">
                    <img class="user-img" src="../img/user-img.jpeg" alt="picture of user-icon"/>
                    <h3>${user.name}</h3>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>  
                    <button class="btn-show">Show more info</button>        
                
                <div class="more-info">
                    <p><strong>City:</strong> ${user.address.city}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <button class="btn-close">Close</button>  
                </div>
                </div>
                `;
            userCardsContainer.innerHTML += userContent;
            
        });
        addEventListeners();  // Eventlistener function is called here due to the need of rendering all the user-card data beforehand.
        
    }
    catch(e){
        alert('Error fetching user data: ' + e.message);
    };
}

getUsers();


/* Current year for the copyright notice in the footer */

document.getElementById("year").innerHTML = new Date().getFullYear();

