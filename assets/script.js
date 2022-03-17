// Moment JS.
const today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"))

// JQuery DOM elements.

let tbodyPLannerEl = $("#tbody-planner");
let now = new Date();

let currentHour = new Date();

// Comparing the current working hour to the current time at 1s interval
setInterval(checkTableHours, 1000);

// Populate the schedule table
populateTable();
checkTableHours();

// Function to go through the table and check if the hour is in the past, present or future  
function checkTableHours() {
    let tableEl = document.getElementById("table-schedule");

    for (var i = 0, row; row = tableEl.rows[i]; i++) {
        let DynamicInputEl = tableEl.querySelector("#input-schedule"+i);
        // console.log("x: " + DynamicInputEl.value);
        // Iterate through rows
        // Access rows by "row" variable
        for (var j = 0, col; col = row.cells[j]; j++) {

            // Iterate through columns
            // Access columns by "col" variable
            let schHrStr = col.innerText;

            if (moment(schHrStr, "HH").isValid()) {
                schHrStr = moment(schHrStr, "HH").format("DD-MMM-YYYY HH:mm");
                // console.log("schHr: " + schHrStr);

                let schHr = new Date( Date.parse(schHrStr) );
                if (schHr.getHours() < now.getHours()) {
                   DynamicInputEl.classList.add("past");
                    // console.log("Add class: Past");
                }
                else if (schHr.getHours() > now.getHours()) {
                    // console.log("Add class: Future")
                    DynamicInputEl.classList.add("future");
                }
                else {
                    // console.log("Add class: Present");
                    DynamicInputEl.classList.add("present");
                }
            }
        }
    }
}

// Function to populate the schedule table(using bootstrap).
function populateTable() {
    const startingHour = new Date();
    startingHour.setHours(14, 0, 0)
    for (i = 0; i < 9; i++) {
        startingHour.setHours(startingHour.getHours() + 1);
        str = moment(startingHour).format("HH:mm");
        // str = startingHour.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        //console.log("working hour: " + str);
        let plannerRow = $("<tr class='planner-row'><td class='col-md-2'>" + str + "</td><td class='col-md-12' id='input-cell'><input type='text' value='hello"+ i +"' id='input-schedule"+ i +"'/></td><td><button type='button' class='btn btn-danger'><i class='far fa-trash-alt'></i></button></td></tr>")
        tbodyPLannerEl.append(plannerRow);
    }

    // todo: Check when hour changes then change input bg colour

}

