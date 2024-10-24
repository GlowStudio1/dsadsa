$(document).ready(function() {
    let isSidebarOpen = true;

    $(".header_menu").click(function() {
        if (isSidebarOpen) {
            $(".sidebar").css("width", "60px");
            $(".sidebar_item_name").css("opacity", "0");
        } else {
            $(".sidebar").css("width", "200px");
            $(".sidebar_item_name").css("opacity", "1");
        }
        
        isSidebarOpen = !isSidebarOpen;
    });

    $('.game_select_type').click(function() {
        $('.game_select_type').removeClass('active');
        $(this).addClass('active');
        var selectedType = $(this).data('type');
        $('.game_block_blackjack').hide();
        $('.game_block_blackjack[data-type="' + selectedType + '"]').show();
    });

    $('.chat_head_close').click(function() {
        if($('.chat_wrapper').hasClass('open')) {
            $('.chat_wrapper').removeClass('open').addClass('close');
        } else {
            $('.chat_wrapper').removeClass('close').addClass('open');
        }
    });

    $('.open_chat').click(function() {
        if($('.chat_wrapper').hasClass('open')) {
            $('.chat_wrapper').removeClass('open').addClass('close');
        } else {
            $('.chat_wrapper').removeClass('close').addClass('open');
        }
    });

    $('#scrollLeft').on('click', function() {
        const $wrapper = $('#gamesWrapper');
        $wrapper.animate({
            scrollLeft: '-=' + 150
        }, 350);
    });

    $('#scrollRight').on('click', function() {
        const $wrapper = $('#gamesWrapper');
        $wrapper.animate({
            scrollLeft: '+=' + 150
        }, 350);
    });
});