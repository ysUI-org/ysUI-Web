/*!
  * ysUI Web v0.01 (https://ysui.org)
  * Copyright 2022-2024 The ysUI Authors (https://github.com/orgs/ysUI-org/people)
  * Licensed under MIT (https://github.com/ysUI-org/ysUI-Web/blob/main/LICENSE)
  */


// Import ysUI Actions (Buttons and Links)
    var actionsData;
        $.getJSON("/data/actions.json", function (json) {
          actionsData = json;
        
    
    function iterateActions(data) {
        for (var i = 0, l = data.actions.length; i < l; i++) {
            var elements = data.actions[i];
            
    
         
      $(elements.elem).each(function() {
      var href = $(this).attr('href');
      var onclick = $(this).attr('onclick');
      var id = $(this).attr('id');
      var importClass = $(this).attr('class');
      var style = $(this).attr('style');
      var target = $(this).attr('target');
      if (importClass != undefined) {
        var classes = elements.class + " " + importClass;
      } else {
        var classes = elements.class;
      };
     
      $(this).replaceWith(function() {
        return $(elements.newelem, {
          class: classes,
          href: href,
          onclick: onclick,
          id: id,
          style: style,
          target: target,
          html: $(this).html()
        });
      });
    });
          
      }
  }
    
    iterateActions(actionsData);
    });


// Import ysUI Icons
  var iconsData;
      $.getJSON("/data/icons.json", function (json) {
        iconsData = json;
  function iterateIcons(data) {
      for (var i = 0, l = data.icons.length; i < l; i++) {
          var elements = data.icons[i];
          $(elements.elem).replaceWith(elements.repl); 
    }
};
  iterateIcons(iconsData);
  });

