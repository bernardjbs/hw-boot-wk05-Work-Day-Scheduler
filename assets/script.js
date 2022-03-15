let tbodyPLannerEl = $("#tbody-planner");

let workingHour = new Date("December 17, 1995 09:00");


const today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM YYYY"))


function populateTable() {

    for (i=0; i<9; i++) {       
        workingHour.setHours(workingHour.getHours()+ 1);
        str= workingHour.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        console.log("working hour: " + str);
        let plannerRow = $("<tr class='planner-row'><td class='col-md-2'>" + str +"</td><td class='col-md-12'><input id='input-schedule'/></td><td><button type='button' class='btn btn-danger'><i class='far fa-trash-alt'></i></button></td></tr>")
        tbodyPLannerEl.append(plannerRow);
    }
    console.log("the time is: " + workingHour);
}

populateTable();
