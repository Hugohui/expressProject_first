$(function(){

    loadUsersList();

    $('#addUser').on('click',function(){
        
        var data = {
            name:$('#name').val(),
            pwd:$('#pwd').val()
        }

        $.ajax({
            type: "post",
            url: "/users/addUser",
            data: data,
            dataType: "json",
            success: function(data){
                if(data.result == 0){
                    loadUsersList();
                }
            }
        });
    });

    function loadUsersList(){
        $.ajax({
            url:'/users/loadUsersList',
            type:'get',
            dataType:'json',success:function(data){
                var html = '';
                $.each(data,function(index,value){
                    html+='<tr><td>'+value.name+'</td><td>'+value.pwd+'</td></tr>';
                });
                $('#tbody').empty();
                $('#tbody').append(html);
    
            }
        });
    }

});