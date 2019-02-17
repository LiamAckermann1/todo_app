function markdone() {
    var row = $(this).closest("tr");
    row.toggleClass("completed");
}
