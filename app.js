import './app.scss';
import feather from 'feather-icons';

window.goMonth = function ( index ) {
	let tgs = document.querySelectorAll( '.month' );
	tgs[ index ].parentNode.scrollIntoView();
}

window.smoothscroll = function () {
	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if ( currentScroll > 0 ) {
		window.requestAnimationFrame( smoothscroll );
		window.scrollTo( 0, currentScroll - (currentScroll / 5) );
	}
};

document.addEventListener( "DOMContentLoaded", function ( event ) {
	feather.replace();
	let color = document.querySelectorAll('.color');
	color.forEach(function(item){
		if ( item.innerText.match(/흰색/) ) {
			item.classList.add('bg-white');
		} else if ( item.innerText.match(/녹색/) ) {
			item.classList.add('bg-green');
		} else if ( item.innerText.match(/보라색/) ) {
			item.classList.add('bg-purple');
		} else if ( item.innerText.match(/적색/) ) {
			item.classList.add('bg-red');
		} else if ( item.innerText.match(/흑색/) ) {
			item.classList.add('bg-black');
		}
	})
} );
