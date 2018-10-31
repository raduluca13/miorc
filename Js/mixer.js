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
  }