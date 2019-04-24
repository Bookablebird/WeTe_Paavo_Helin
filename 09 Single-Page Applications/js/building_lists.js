
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + ", " + books[i].year;
	list.appendChild(item);
}

var table = document.createElement('table');
var row = document.createElement('tr');
var cell = document.createElement('th');

for (var i=0; i < books.length; i++) {
	row = document.createElement("tr");
	table.appendChild(row);
	//console.log(books);


	cell = document.createElement('td');
	cell.innerHTML = books[i].title;
	row.appendChild(cell);

	cell = document.createElement('td');
	cell.innerHTML = books[i].year;
	row.appendChild(cell);

}
var heading = document.createElement('h1');



document.body.appendChild(heading);
document.body.appendChild(list);
document.body.appendChild(table);

var nodes = document.querySelectorAll("tr");


nodes[0].addEventListener("click",  function() {
	heading.innerHTML = books[0].title + ", " + books[0].year});
nodes[1].addEventListener("click",  function() {
	heading.innerHTML = books[1].title + ", " + books[1].year});
nodes[2].addEventListener("click",  function() {
	heading.innerHTML = books[2].title + ", " + books[2].year});
nodes[3].addEventListener("click",  function() {
	heading.innerHTML = books[3].title + ", " + books[3].year});
nodes[4].addEventListener("click",  function() {
	heading.innerHTML = books[4].title + ", " + books[4].year});

