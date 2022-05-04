var title = document.title;
var alttitle = "Hala Buradayım :) - Ibrahim Kapusuz";

  window.onblur = function () { 
    document.title = alttitle; 
  };
  window.onfocus = function () { 
    document.title = title; 
  };  
