// Stores the horror game titles that will be displayed on the recommendations page.
let recommendedGames = ["SOMA", "Outlast", "Visage", "The Evil Within", "Signalis", "Alan Wake 2"];

// Creates the function that will build and display the game recommendations.
function displayRecommendations() {
    console.log("displayRecommendations function started.");
    // Begins the HTML string with an unordered list tag.
    let recommendationList = "<ul>";
    // Loops through each game in the recommendedGames array.
    for (let i = 0; i < recommendedGames.length; i++) {
        console.log("Adding recommendation:", recommendedGames[i]);
        // Adds the current game to the HTML string as a list item.
        recommendationList += "<li>" + recommendedGames[i] + "</li>";
    }
    // Closes the unordered list after all games have been added.
    recommendationList += "</ul>";
    // Inserts the completed list into the HTML element with the id "list".
    document.getElementById("list").innerHTML = recommendationList;
    console.log("Recommendations list inserted into the page.");

}

// Runs the recommendations function after the webpage has finished loading.
window.onload = function() {
    displayRecommendations();
}