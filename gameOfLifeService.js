class GameOfLifeService {
    
    constructor(){

    }

    getStateBasedOnNeighbours(stateOfCell, numberOfNeighbours) {

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

    setCell(tableCell) {
        if (state == simulationState.setting) {
            if(tableCell.firstChild.innerHTML == ""){
                tableCell.getElementsByClassName("imageContent")[0].innerHTML = "X";
            }else{
                tableCell.firstChild.innerHTML = "";
            }
        }
    }
    
    getNumberOfNeighbours(tableCell) {
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
    
}