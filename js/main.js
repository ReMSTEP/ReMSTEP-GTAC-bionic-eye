$(document).ready(function(){
    /*
     * details toggle click handler
     */
    $('.detail .toggle').on('click', function(){
        $(this).toggleClass('open').parent().toggleClass('open');
    });
    /*
     * show all details
     */
    $('.toggle.all').on('click', function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open').text('Expand all details');
           $('.detail .toggle').removeClass('open').parent().removeClass('open');
        } else {
            $(this).addClass('open').text('Collapse all details');
            $('.detail .toggle').addClass('open').parent().addClass('open');
        }
    });
});