
async function fetchData() {
    
    try {
        let response = await fetch('./coffee_menu.json');
    let data = await response.json();

    console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

fetchData();
