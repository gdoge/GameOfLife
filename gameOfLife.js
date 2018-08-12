const boardSizeX = 40;
const boardSizeY = 40;
const simulationState = Object.freeze({ "stopped": 1, "setting": 2, "running": 3 })
let state = simulationState.stopped;
let interval;

function makeBoard(X, Y) {
    var board = document.getElementById("board");
    tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < Y; i++) {
        var tr = tbl.insertRow();
        for (let j = 0; j < X; j++) {
            createTableCell(j + '|' + i, tr, '');
        }
    }

    tbl.id = "lifeTable";
    board.appendChild(tbl);
}

function createTableCell(id, tr, state) {
    var td = tr.insertCell();
    td.id = id;
    div = document.createElement('div');
    div.setAttribute('class', 'imageContent');
    div.innerHTML = state;
    td.appendChild(div);
    td.onclick = function () {
        setCell(this);
    }; 
}

function tick() {
    state = simulationState.running;
    oldBoard = document.getElementById("lifeTable");
    tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (var i = 0; i < oldBoard.rows.length; i++) {
        var tr = tbl.insertRow();
        
        for (var j = 0; j < oldBoard.rows[i].cells.length; j++) {

/*             var tableCell = oldBoard.rows[i].cells[j]
            tableCell.firstChild.innerHTML = setStateOfCell(tableCell.firstChild.innerHTML, getNumberOfNeighbours(tableCell)); */
            var tableCell = oldBoard.rows[i].cells[j]
            tableCell = createTableCell(j + '|' + i, tr, setStateOfCell(tableCell.firstChild.innerHTML, getNumberOfNeighbours(tableCell)));
        }
    }

    board = document.getElementById("board");
    board.innerHTML = '';
    tbl.id = "lifeTable";
    board.appendChild(tbl);
}

function setStateOfCell(stateOfCell, numberOfNeighbours) {

    if (stateOfCell != "") {
        if (numberOfNeighbours < 2) {
            return "";
        } else if (numberOfNeighbours < 4) {
            return "X"
        } else if (numberOfNeighbours > 3) {
            return "";
        }
    } else {
        if (numberOfNeighbours == 3) {
            return "X";
        } else {
            return "";
        }
    }
}

function setField() {
    state = simulationState.setting;
    clearInterval(interval);
}

function stopSimulation() {
    state = simulationState.stopped;
    clearInterval(interval);
}

function runSimulation() {
    state = simulationState.running
    interval = setInterval(tick, 200);
}

function setCell(tableCell) {
    if (state == simulationState.setting) {
        if(tableCell.firstChild.innerHTML == ""){
            tableCell.getElementsByClassName("imageContent")[0].innerHTML = "X";
        }else{
            tableCell.firstChild.innerHTML = "";
        }
    }
}

function getNumberOfNeighbours(tableCell) {
    coordinates = tableCell.id.split("|");
    neighbourCounter = 0;
    bottomLeft = { x: coordinates[0] - 1, y: coordinates[1] - 1 }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tableElement = document.getElementById((bottomLeft.x + j) + "|" + (bottomLeft.y + i))
            if (tableElement != null && tableElement.firstChild.innerHTML == "X") {
                neighbourCounter++;
            }
        }
    }

    if (tableCell.firstChild.innerHTML == "X") {
        neighbourCounter--;
    }

    return neighbourCounter;
}



makeBoard(boardSizeX, boardSizeY);
