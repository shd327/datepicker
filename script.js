

$(function () {

    $('#sendMessage').on('click', function () {
        var selectedOptionVal = optionSelector()
        // optionSelector()
        var projectName = $('#recipient-name').val()
        // console.log(selectedOptionVal + " " + " hello")
        createTableRows(projectName, selectedOptionVal)
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

function createTableRows(projName, selectOptVal) {
    console.log(projName + " " + selectOptVal)
    var table = $("table tbody")
    // var tableRow = $('<tr>')
    var tableData = $("<tr><td>" + projName + '</td><td>' + selectOptVal + '</td></tr>')
    // tableRow.append(tableData)
    table.append(tableData)


}