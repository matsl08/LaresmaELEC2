



const Coffee = () => {

    function displayData () {

   
        async function fetchData() {
    
            try {
                let response = await fetch('./coffee_menu.json');
                let data = await response.json();
                
            }
            catch (error){
                console.log(error);
            }
        }
        
        fetchData();
}
    return (
        <>
        <div>
            <h1>Hello World!</h1>
        {displayData()}
        </div>
        </>
    )

}


export default Coffee