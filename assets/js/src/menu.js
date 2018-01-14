/**
 *
 * Abrir o item quem apoia do menu
 *
*/
jQuery(document).ready(function($) {
	if ( $( window ).width() > 700 ) {
		return;
	}

	$( 'a[href="#quem-apoia"]' ).on( 'click', function( e ){
		e.preventDefault();
		$( '.navbar-toggle' ).trigger( 'click' );
		$( '#footer-container' ).fadeIn( 800 ).find( '.footer-open' ).trigger( 'click' );
	});
	$( '.close-quem-apoia' ).on( 'click', function( e) {
		e.preventDefault();
		location.reload();
	});
});
