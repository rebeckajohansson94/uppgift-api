document.addEventListener('DOMContentLoaded', () => {
    addEventListeners(); 
});

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch data: ' + response.status);
        }
        return response.json();
    })
    .then(users =>{
        document.querySelector('.user-cards').innerHTML = "";

        users.forEach(user => {
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
            document.querySelector('.user-cards').innerHTML += userContent;
            
        });
        
    })

    .catch(e =>{
        alert('Error' + e);
    });
}

getUsers();

