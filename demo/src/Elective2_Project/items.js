export async function displayItems() {
    const response = await fetch('https://67d53331d2c7857431efa638.mockapi.io/SampleData/:endpoint');
    const data = await response.json();

    console.log(data);
}