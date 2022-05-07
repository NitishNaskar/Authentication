{
    let createComment=function(){
        let newComment=$('#create-comment');
        newComment.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/uesr/commect',
                data: $('#create-comment').serialize(),
                success: function(data){
                    console.log(data);
                },error: function(err){
                    console.log(err.responseText);
                }
            });
        });
    }

    createComment();
}