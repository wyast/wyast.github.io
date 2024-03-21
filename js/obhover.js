document.addEventListener('DOMContentLoaded', function() {  
    var ObHover = document.querySelectorAll('.obhover');  
    
    ObHover.forEach(function(el) {  
      el.addEventListener('mouseenter', function() {  
        var linksContainer = this.querySelector('.links-container');  
        linksContainer.style.opacity = '1';  
        linksContainer.style.visibility = 'visible';  
        linksContainer.style.pointerEvents = 'auto';  
      });  
    
      el.addEventListener('mouseleave', function() {  
        var linksContainer = this.querySelector('.links-container');  
        linksContainer.style.opacity = '0';  
        linksContainer.style.visibility = 'hidden';  
        linksContainer.style.pointerEvents = 'none';  
      });  
    });  
  });