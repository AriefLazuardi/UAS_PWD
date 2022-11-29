$(document).ready(function(){

    $('#matkul').hide();
        $("#but1").click(function(){
            $("#matkul").fadeToggle("slow");
    });

    $('#organisasi').hide();
    $("#but2").click(function(){
          $("#organisasi").fadeToggle("slow");
    });

    $('#kepanitiaan').hide();
    $("#but3").click(function(){
        $("#kepanitiaan").fadeToggle("slow");
      });

    $("form").submit(function(event){
        event.preventDefault();
        alert("Anda Berhasil Mendafatar Kepengurusan HMSI Periode 2022/2023");
      });

      $("#dark-toggle").click(() => {
        $("#dark-toggle").checked ? $("html").addClass("dark") : $("html").removeClass("dark");
});
});

    





