(function(){
   $(function(){
      var $text1 = $('#first'),
          $text2 = $('#sec'),
          $text3 = $('#third'),
          $text  = $('.slider p'),
          $btn1 =$('.btn1'),
          $btn2 =$('.btn2'),
          $btn3 =$('.btn3');
     
          $btn2.click(function(){
            $text.animate({
              top : '-=200px'
              },500,function(){
                $text2.animate({
                  top : '0'
              });
              
          });
        });
         $btn1.click(function(){
            $text.animate({
              top : '-=200px'
              },500,function(){
                $text1.animate({
                  top : '0'
              });
              
          });
        });
         $btn3.click(function(){
            $text.animate({
              top : '-=200px'
              },500,function(){
                $text3.animate({
                  top : '0'
              });
              
          });
        });
   });
})();