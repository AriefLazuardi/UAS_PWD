$(document).ready(function () {
  $("#matkul").hide();
  $("#but1").click(function () {
    $("#matkul").fadeToggle("slow");
  });

  $("#organisasi").hide();
  $("#but2").click(function () {
    $("#organisasi").fadeToggle("slow");
  });

  $("#kepanitiaan").hide();
  $("#but3").click(function () {
    $("#kepanitiaan").fadeToggle("slow");
  });

  $("form").submit(function (event) {
    event.preventDefault();
    alert("Anda Berhasil Mendafatar Kepengurusan HMSI Periode 2022/2023");
  });

  const html = document.querySelector("html");
  const toggle = document.getElementById("dark-toggle");

  toggle.addEventListener("click", () => {
    toggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
  });
});
