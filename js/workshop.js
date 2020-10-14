(function() {
    let workshopList = document.querySelector('#workshop-list');

    function fetchWorkshops() {
        return axios.get('https://workshops-server.herokuapp.com/workshops') 
                    .then(response => response.data)
                    .catch(console.log('Error Occur'));
    };

    function addWorkshop( workshop ) {
        workshopList.innerHTML += `
        <li class="col">
                    <div class="card my-3">
                        <img src=${workshop.imageUrl} 
                        alt="Angular Img" class="img-fluid">
                        <h2 class="text-center">${workshop.name}</h2>
                        <div>
                            <small><span class="date">${workshop.startDate}</span></small> - 
                            <small><span class="date">2${workshop.endDate}</span></small>
                        </div>
                        <div>
                            <small>${workshop.time}</small>
                        </div>
                        <div class="my-3">
                            <span>${workshop.location.address}</span>,
                            <span>${workshop.location.city}</span>,
                            <span>${workshop.location.state}</span>
                        </div>
                        <div>${workshop.description}</div>
                    </div>
                </li>`
    };

    function addWorkshops( workshops ) {
        workshops.forEach ( workshop => addWorkshop ( workshop ));
    }

    function init() {
        fetchWorkshops().then(worshops => addWorkshops(worshops));
    }

    init();
})();