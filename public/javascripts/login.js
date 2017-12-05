$(function(){
    $('#login').on('click',function(){

        var data = {
            name:$('#name').val(),
            pwd:$('#pwd').val()
        }

        $.ajax({
            type: "post",
            url: "/login/oklogin",
            data: data,
            dataType: "json",
            success: function(data){
                if(data.result == 0){
                    window.location.href = '/';
                }
            }
        });
    });
});