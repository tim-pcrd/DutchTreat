﻿
$(document).ready(function() {
    console.log("Hello Pluralsight");


    var theForm = $("#theForm");
    theForm.hide();

    //var button = $("#buyButton");
    //button.on("click",
    //    () => {
    //        console.log("Buying item");
    //    });

    var productInfo = $(".product-props li");
    productInfo.on("click",
        function() {
            console.log("You clicked on " + $(this).text());
        });


    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click",
        function() {
            $popupForm.fadeToggle(1000);
        });

});


