// Select size input
var height, width;
let heightInput = $("#input_height");
let widthInput = $("#input_width");
let submitButton = $("input[type=submit]");
let table = $("#pixel_canvas");

// Select color input
let colorInput = $("#colorPicker");
let color = colorInput.val();

//updating color value when uesr change it 
colorInput.change(function () {
	color = colorInput.val();
});

// When input fields is submitted by the user, call makeGrid()
submitButton.click(function (e) {
	
	// prevet the browser from submitting the form as it is the deault event
	e.preventDefault();
	
	// Get the height user entered
	height = heightInput.val();
	
	// Get the width user entered
	width = widthInput.val();
	makeGrid();
});

//apllying the color selcted by the user to the td when clicked
table.on(" click ", "td", function () {
	$(this).css("background-color", color);
});

function makeGrid() {

	// deleting old grid
	table.empty();
	let tbody = $("<tbody></tbody>");
	for (let rows = 1; rows <= height; rows++) {
		let row = $("<tr></tr>");
		for (let columns = 1; columns <= width; columns++) {
			$("<td></td>").appendTo(row);
		}

		// apply sizing
		tbody.append(row);
		table.append(tbody);
	}
}
