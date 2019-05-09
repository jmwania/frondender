var btt = document.getElementById("back-to-top"),
 body = document.body,
 docElem = document.documentElement,
 offset = 100,
 scrollPos, docHeight;

 // Calculate the document height
 docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
 if (docHeight != 'undefined') {
     offset = docHeight / 4;
 }

 // Add scroll event listener 

 window.addEventListener("scroll", function(event) {
     scrollPos = body.scrollTop || docElem.scrollTop;
     btt.className = (scrollPos > offset) ? "visible"? : ""; 
// Add click event listeners
btt.addEventListener("click", function(event) {
    event.preventDefault();

    
})
 });
/*
* - define variables
* Focus the input
*/

 var targetInput = document.getElementById( "county"), 
    results = document.getElementById( "autocomplete-results"), 
    countyList = ['Mombasa', 'Tata Taveta', 'Nairobi', 'Nakuru', 'Nyeri', 'Siaya', 'Kisumu', 'Kitui', 'Machakos', 'Makueni'], matches = [];

// Focus the input
targetInput.focus();

// Add event listener for the iinput keyup
targetInput.addEventListener( "keyup", function( event ) {
    /*
    * Key codes
    *
    * Enter: 13
    * Arrow up: 38
    * Arrow down: 40
    */
   results.innerHTML ="";
   toggleResults( "hide" );
   if ( this.value.length > 0)
       matches = getMatches( this.value);
});

// define a function for toggling the results list
function toggleResults ( action ) {
        if ( action == "show" ) {
           results.classList.add( "visible" );
        } else if ( action == "hide" ) {
            results.classList.remove("visible");
        }
   }
})
