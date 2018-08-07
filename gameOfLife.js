const boardSizeX = 40;
const boardSizeY = 20;
let gameBoard = [];
let liveCells = [];

function makeBoard(X, Y) {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < Y; i++) {
        var tr = tbl.insertRow();
        for (let j = 0; j < X; j++) {
            var td = tr.insertCell();
            td.id = j + '|' + i;
            td.appendChild(document.createTextNode('O'));
        }
        document.getElementById("board").appendChild = '</tr>'
    }
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++)
                tbl.rows[i].cells[j].onclick = function () {
                    setCell(this);
                };
        }
    }
    body.appendChild(tbl);
}

function initializeBoard() {
}

function setCell(tableCell) {
    let count = getNumberOfNeighbours(tableCell);
    tableCell.innerHTML = count;
    liveCells.push(tableCell.id);
    console.log(liveCells);
}

function getNumberOfNeighbours(tableCell) {
    coordinates = tableCell.id.split("|");
    neighbourCounter = 0;
    bottomLeft = { x: coordinates[0] - 1, y: coordinates[1] - 1 }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tableElement = document.getElementById((bottomLeft.x + j) + "|" + (bottomLeft.y + i))
            if (tableElement != null && tableElement.innerHTML != "O") {
                neighbourCounter++;
                console.log((bottomLeft.x + j) + "|" + (bottomLeft.y + i));
            }
        }
    }

    if(tableCell.innerHTML != "O") {
        neighbourCounter --;
    }

    console.log(neighbourCounter);

    return neighbourCounter;
}

makeBoard(boardSizeX, boardSizeY);