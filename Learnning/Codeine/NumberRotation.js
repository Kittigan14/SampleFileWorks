function RotationNumbers(Values) {

  let ValueStr = Values.toString();
  let CollectNumbers  = [];

  for ( let index = 0 ; index < ValueStr.length; index++ ) {

      let Rotation = parseInt( ValueStr.slice( index ) + ValueStr.slice( 0 , index ) );

      CollectNumbers.push( Rotation );
  }

  return console.log( CollectNumbers )
}

RotationNumbers( 123 );
RotationNumbers( 98765 );

// EX : 1 2 3

// value.slice( 0 )         --> 1 2 3

// value.slice( i++ )       --> 1 2 3
//                          --> 1 2
//                          --> 1 

// value.slice( 0 , i++ )   --> 1
//                          --> 1 2
//                          --> 1 2 3


// value.slice( i++ ) + value.slice( 0 , i++ )
//   1 >     --> 1 2 3    
//   2 >     --> 2 3        > slice( 1 ) + slice( 0 , 1 )
//   3 >     --> 2 3 1      > push
//   4 >     --> 3 1        > slice( 2 ) + slice( 0 , 2 )
//   5 >     --> 3 1 2      > push
