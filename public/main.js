$(document).ready(function () {
    
        $("#btnSubmit").click(function (event) {
    
            //stop submit the form, we will post it manually.
            event.preventDefault();
    
            // Get form
            var form = $('#fileUploadForm')[0];
    
            // Create an FormData object
            var data = new FormData(form);
    
            // disabled the submit button
            $("#btnSubmit").prop("disabled", true);
    
            $.ajax({
                type: "POST",
                method: 'POST',
                enctype: 'multipart/form-data',
                url: "/get-file-size",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (data) {
    
                    $("#btnSubmit").prop("disabled", false);
                    if(data['success']){
                        alert(data["size"]);
                    }
    
                },
                error: function (e) {
    
                    alert("Oops! Something went wrong.");
                    $("#btnSubmit").prop("disabled", false);
    
                }
            });
    
        });
    
    });