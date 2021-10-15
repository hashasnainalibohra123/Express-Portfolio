// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

$(document).ready(function () {
    if($('#dtBasicExample')){
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
    }
    
});