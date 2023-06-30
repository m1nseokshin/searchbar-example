// burger menu icon 클릭하면 full page menu 나오기
    $(function() {
        $('.button').on('click', function(event){
            event.preventDefault();
            
            $(this).toggleClass('active');
            $('.overlay').toggleClass('visible');
        });
    });