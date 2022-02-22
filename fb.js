$(document).ready(function(){
    $("#submitt").validate({
        rules:{
            name1:{
                required:true,
                minlength:4,
            },
            name3:{
                required:true,
                minlength:4,
            }
        },
        messages:{
            name1:{
                required:"first name is compulsary",
                minlength:"fuck off"
            }
        }
    })

})