
$(document).ready(function () {

    //$(".maxmin").hide();
    $(".minmaxdate").hide();
    $(".options").hide();

    
     $("#postmetaform").validate();
          

     $("#itype").on("change", function() {

        if ( $(this).val() == "text" || $(this).val() == "password" || $(this).val() == "email") {

            $(".maxmin").show();
        } else {
            $(".maxmin").hide();
        }

        if ( $(this).val() == "date") {

            $(".minmaxdate").show();
        } else {
            $(".minmaxdate").hide();
        }

        if ( $(this).val() == "radio" || $(this).val() == "checkbox") {

            $(".options").show();
        } else {
            $(".options").hide();
        }

    });


    document.getElementById('submitfields').addEventListener('click', SubmitData);

    function SubmitData() {

        if ($("#input_label").val() != null && $("#input_label").val() != '') {
           
            AddToTable();
            RenderForm();
            Clearform();
           
        }
    }

    function Clearform() {
        
        $('#postmetaform')[0].reset();
       
        $(".minmaxdate").hide();
        $(".options").hide();

        
    }


    function AddToTable() {
        
        if ($("#gridTable tbody").length == 0) {
            
            $("#gridTable").append("<tbody></tbody>");
        }
    
        $("#gridTable tbody").append("<tr>" +

            "<td>" + $("#input_label").val() + "</td>" +
            "<td>" + $("#itype").val() + "</td>" +
            "<td>" + $("#min_length").val() + "</td>" +
            "<td>" + $("#max_length").val() + "</td>" +
            "<td>" + $("#input_mindate").val() + "</td>" +
            "<td>" + $("#input_maxdate").val() + "</td>" +
            "<td>" + $("#options").val() + "</td>" +
            "<td>" + $("#input_bg_color").val() + "</td>" +
            "<td>" + $("#input_text_color").val() + "</td>" +
            
            "</tr>");
    }

    function RenderForm() {

        if ($("#renderform tbody").length == 0) {
            $("#renderform").append("<tbody></tbody>");
        }
        if($("#max_length").val() !="" &&  $("#max_length").val() != "") {

            var maxlength = "maxlength='"+ $("#max_length").val() +"'  data-minlength='"+ $("#min_length").val() +"'";
        } else {
            var maxlength = "";
        }
        if($("#input_mindate").val() !="" &&  $("#input_maxdate").val() != "") {

            var minmaxdate = "min='"+ $("#input_mindate").val() +"' max='"+ $("#input_maxdate").val() +"'";
        } else {
            var minmaxdate = "";
        }

        if($("#options").val() !="" &&  $("#options").val() != "") {

            var str = $("#options").val(); 

            var allLabels = str.split(","); 

            var htmlString = "";
           
            $.each(allLabels, function(index, value) {

             htmlString += '<input type="'+ $("#itype").val() +'" name="'+ $("#itype").val() +'"><label>' + value + '</label>';
            
            });

            $("#renderform tbody").append("<tr>" +
            "<td class='labelrender' style='color:"+ $("#input_text_color").val() +"'>" + $("#input_label").val() + " : </td>" +
            
            "<td class='inputrender'>"+htmlString+"</td>" +
        "</tr>");
             
        } 
        
        
        else {
        $("#renderform tbody").append("<tr>" +
            "<td class='labelrender' style='color:"+ $("#input_text_color").val() +";background-color:"+ $("#input_bg_color").val() +"'>" + $("#input_label").val() + " : </td>" +
            
            "<td class='inputrender'><input type=" + $("#itype").val() + " name="+ $("#input_label").val() +" id="+ $("#input_label").val() +" "+maxlength+" "+minmaxdate+"></td>" +
        "</tr>");
        
        }
    }

});