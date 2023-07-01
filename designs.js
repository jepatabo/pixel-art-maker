// Select color input
colour = document.getElementById('colorPicker');
// Select size input
height = document.getElementById('inputHeight');
width = document.getElementById('inputWidth');
//constant table
const $table = $('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
makeGrid(height, width)

$('#sizePicker').submit(function (eve) {
    //stop or cancel the default action of eve
    eve.preventDefault();
    //get the value of the height from inputHeight textbox.
    height = document.getElementById('inputHeight').value;
    //get the value of the width from inputWidth textbox.
    width = document.getElementById('inputWidth').value;
    //remove table row.
    $('tr').remove();
    //call the Grid function passing the width and height parameters.
    makeGrid(height, width);

})
function makeGrid(height, width) {
    // Your code goes here!
    // use for loop to create the height: set a = 1, a is less than or euqal to the height and increase a by 1.
    for (var a = 1; a <= height; a++) {
        //append it to the table using tr
        $table.append(`<tr id=table${a}></tr>`)
        // use for loop to create the width: set a = 1, a is less than or euqal to the width and increase a by 1.
        for (var b = 1; b <= width; b++) {
            //append it to the table using td
            $('#table' + a).append('<td></td>')
        }
    }

    $('td').click(function makeDraw(eve) {
        // save colorpicker value inside the draw variable.
        var draw = document.getElementById('colorPicker').value;
        $(eve.target).css('background-color', draw);
});
}