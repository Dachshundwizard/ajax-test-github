$(document).ready(function(){
    $('button').click(function(){
        var username = $('input').val();

        $.ajax({
            url:`https://api.github.com/users/${username}`,
            data:'json',
            success:function(response){
                console.log(response);
                $('body').append(`<h1>${username}</h1><h2>${response.id}</h2><img src='${response.avatar_url}'>`);

            }
        })
        $('input').val("");
    })
})
