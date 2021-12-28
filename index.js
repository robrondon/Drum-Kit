// Detecting Button Press

const drums = document.querySelectorAll( '.drum' );

for ( let i = 0; i < drums.length; i++ ){
  
  drums[i].addEventListener( 'click', function () {
    const button = this.innerHTML;
    makeSound( button );
    buttonAnimation( button );

  })
}

// Detecting Keyboard Press

  document.addEventListener( 'keydown', function ( e ) {
    makeSound( e.key ); 
    buttonAnimation( e.key );
})

const makeSound = function ( key ) {
  switch ( key ) {
      case 'w':
        const crash = new Audio( './sounds/crash.mp3' );
        crash.play();        
        break;
      case 'a':
        const kick = new Audio( './sounds/kick-bass.mp3' )
        kick.play();
        break;
      case 's':
        const tom1 = new Audio( './sounds/tom-1.mp3' )
        tom1.play();
        break;
      case 'd':
        const tom2 = new Audio( './sounds/tom-2.mp3' )
        tom2.play();
        break;
      case 'j':
        const tom3 = new Audio( './sounds/tom-3.mp3' )
        tom3.play();
        break;
      case 'k':
        const tom4 = new Audio( './sounds/tom-4.mp3' )
        tom4.play();
        break;
      case 'l':
        const snare = new Audio( './sounds/snare.mp3' )
        snare.play();
        break;
      default:
        console.log( key );
        break;
    }
}

const buttonAnimation = function ( key ) {
  let activeButton = document.querySelector( `.${key}` );
  activeButton.classList.add( 'pressed' )

  setTimeout( function () {
    activeButton.classList.remove( 'pressed' );
  }, 100 );
}