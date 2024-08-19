export function getJsonObject(jsonPath) {
    //Get the json data
    const jsonData = require(jsonPath);
    //Return the json as an object
    return JSON.parse(jsonData);
}
