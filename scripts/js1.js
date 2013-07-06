(function(){
  $(function(){
    var
      logo   = $('.logo figure'),
      slides = $('.slide div');
    logo.click(function(){
      var curslide = $(this).index();
      slides.animate({
        opacity : '0'
      },100,function(){
        slides.css({
          display : 'none'
        });
        slides.eq(curslide).css({
          display : 'block'
        });
        slides.eq(curslide).animate({
          opacity : '1'
        });
      });
    });
  });
})();