

$(function () {

    $('#sendMessage').on('click', function () {
        var selectedOptionVal = optionSelector()
        // optionSelector()
        var projectName = $('#recipient-name').val()
        var datepicker = $('#datepicker').val()
        // console.log(selectedOptionVal + " " + " hello")
        createTableRows(projectName, selectedOptionVal, datepicker)
    })
})
function optionSelector() {

    $('.form-select').change
        (function () {
            selectedOption = $('.form-select option:selected').text()
            // console.log(selectedOption)
        })
    // console.log(selectedOption)
    return selectedOption
}

function createTableRows(projName, selectOptVal, datepick) {
    console.log(projName + " " + selectOptVal)
    var table = $("table tbody")
    // var tableRow = $('<tr>')
    var tableData = $("<tr><td>" + projName + '</td><td>' + selectOptVal + '</td><td>' + datepick + '</td></tr>')
    // tableRow.append(tableData)
    table.append(tableData)


}