$(document).ready(function(){ 
  $("input[type='text']").keydown(function(event){
     if (!((event.keyCode == 190) || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46)) {
        //not a number key or period so prevent
        event.preventDefault();
    }
  });
  
  $("button[type='button']").on("click", function(){
    var txtboxval = $("input[type='text']").val();
    if(txtboxval == "" || txtboxval > 100){
      alert("Enter only number & number should be less than 100.");
      $("input[type='text']").val("");
    }else{
      if(txtboxval > 50){
        txtboxval = txtboxval-50;
        var val = 180/50;
        var fval = val*txtboxval;
        fval = fval + 180;
        $(".slice").css({"clip":"rect(auto, auto, auto, auto)"});
        $(".slice").append("<div class='bar'></div>");
        $(".fill").css({"transform":"rotate(180deg)"});
        $(".bar").css({"transform":"rotate("+fval+"deg)"});
        $(".no").text($("input[type='text']").val()+"%");
      }else{
        var val = 180/50;
        var fval = val*txtboxval;
        fval = fval;
        $(".slice").find(".bar").remove();
        $(".slice").css({"clip":"rect(0em, 1em, 1em, 0.5em)"});
        $(".fill").css({"transform":"rotate("+fval+"deg)"});
        $(".no").text($("input[type='text']").val()+"%");
      }
    }
  });
  
});