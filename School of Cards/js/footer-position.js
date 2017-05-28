$( document ).ready(function() {
    function changeFooterPosition() {
        $screenHeight = $(window).height();
        $bodyHeight = $('body').height();
        $headerHeight = $('header.header-started').height();

        if( $screenHeight > ($bodyHeight + $headerHeight) ) {
            $('footer.footer-started').css({ position: 'absolute', bottom: 0, width: '100%' });
            $('body').css({ backgroundColor: '#f3f3f3' });
        }
    }

    changeFooterPosition();
});