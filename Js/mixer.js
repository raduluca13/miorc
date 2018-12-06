window.addEventListener("click", windowOnClick);

function windowOnClick(event) {
    console.log(event.target.className);
    if (event.target.classList.contains("grid_cell") ) {
        if (event.target.classList.contains("active_cell") ) {
             event.target.classList.remove("active_cell");
            }
        else{
            event.target.classList.add("active_cell");
        }
    }
    if(event.target.classList.contains("fa-plus-square")){
        let mainContainer = document.getElementsByClassName("container")[0];
        let mixerTable = document.createElement("div");
        var childsNumber = document.getElementById("mixer_container").childElementCount;
        mixerTable.classList.add("mixer_table_part");
        for(i = 0 ; i <8 ; i++){
            let gridColumn = document.createElement("div");
            gridColumn.classList.add("grid_column");
            for(j = 0 ; j<16 ; j++){
                let gridCell = document.createElement("div");
                gridCell.classList.add("grid_cell");
                gridColumn.appendChild(gridCell);
            }
            mixerTable.appendChild(gridColumn);
        }
        mainContainer.insertBefore(mixerTable,mainContainer.childNodes[childsNumber]);
    }
  }

