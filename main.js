window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://cs-azureresumevisitorcounter-ps.azurewebsites.net/api/HttpTrigger1?code=YrP78k/a0mT5aNOcckm69vVfPaVFojL7cFH4rO0xHq59KCXlAvHfqw==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}