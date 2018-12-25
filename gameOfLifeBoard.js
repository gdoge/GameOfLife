class GameBoard {
    constructor(boardId, state) {
        this.boardId = boardId;
        this.state = state;
    }

    makeBoard(X, Y) {
        var board = document.getElementById(this.boardId);
        var tbl = document.createElement('table');
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';
    
        for (let i = 0; i < Y; i++) {
            var tr = tbl.insertRow();
            for (let j = 0; j < X; j++) {
                this.createTableCell(j + '|' + i, tr, '');
            }
        }
    
        tbl.id = "lifeTable";
        board.appendChild(tbl);
    }
    
    createTableCell(id, tr, state) {
        var td = tr.insertCell();
        td.id = id;
        var div = document.createElement('div');
        div.setAttribute('class', 'imageContent');
        div.innerHTML = state;
        td.appendChild(div);
        td.onclick = function () {
            //ToDo get instance of td
            setCell(this);
        }; 
    }

    setCell(tableCell) {
        console.log(tableCell)
        if (state == simulationState.setting) {
            if(tableCell.firstChild.innerHTML == ""){
                tableCell.getElementsByClassName("imageContent")[0].innerHTML = "X";
            }else{
                tableCell.firstChild.innerHTML = "";
            }
        }
    }

}