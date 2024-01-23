const string = document.location.search;
const queries = new URLSearchParams(string);

console.log(queries.get("first-name"));
