const boardSizeX = 40;
const boardSizeY = 20;
let gameBoard = [];

function makeBoard(X, Y) {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < X; i++) {
        console.log("1");
        var tr = tbl.insertRow();
        for (let j = 0; j < Y; j++) {
            var td = tr.insertCell();
            td.appendChild(document.createTextNode('Cell'));
            document.getElementById("board").appendChild = '<td> O </td>'
        }
        document.getElementById("board").appendChild = '</tr>'
    }
    body.appendChild(tbl);
}

function initializeBoard() {
}
makeBoard(boardSizeX, boardSizeY);
console.log("TEST");