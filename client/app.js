$(document).ready(function (){
    $('.first-button').on('click', function (){
        $.get('http://localhost:3000/crunch', function(data) {
            console.log(data.url);
        $('.display').append(`<img src = "${data.url}"/>`);
        });
    });
});
