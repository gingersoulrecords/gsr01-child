	jQuery(document).ready(function(){
		
	   
	//remove empty paragraphs
	jQuery('p:empty, br').remove();
	    
	 jQuery('.soulscroller').appendTo('body');   

	
	
	}); 
	
	jQuery(window).load(function(){
					
/*
		jQuery(window).scroll(function() {
				var scrollDistance = jQuery(window).scrollTop();
	
				jQuery('.fl-row').each(function(i) {
						if (jQuery(this).position().top <= scrollDistance) {
								jQuery('.fl-row.active').removeClass('active');
								jQuery('.fl-row').eq(i).addClass('active');
						}
				});
		}).scroll();	
*/
		window.scrollAdd = 0;
		
		
		
		//when you click on the up button
		jQuery('.soulscroller-up').click(function(){

			console.log(window.scrollAdd);
			
			//first, get the scroll distance of the window.
			window.scrollDistance = jQuery(window).scrollTop();
			
			if(window.isSoulScrolling == 'soulscrolling'){
				window.scrollAdd = window.scrollAdd+1;
			}
			
			//console.log('scrolldistance= '+window.scrollDistance);

  				          
            	jQuery('.fl-row').filter(function(){
	            	return jQuery(this).outerHeight() > 0;
            	}).each(function(i) {
	            	    //console.log(i + ': '+jQuery(this).position().top);
	            	    
	            	    //
						if (jQuery(this).position().top >= window.scrollDistance + window.offsetByElementHeight) {
							//if it's not the first row,
							if(i-1-window.scrollAdd > 0){
								//dest is the row above it
								window.activePrevRowDest = jQuery('.fl-row').filter(function(){
	            	return jQuery(this).outerHeight() > 0;
            	}).eq(i-1-window.scrollAdd).position().top;
							}else{
								window.activePrevRowDest = 0;
							}
						return false;
						}
				});
				
				//then scroll to the position of the previous row. As this is animating, we'll set the activerow to the destination row.
				TweenMax.to( window, .33, {
					
					scrollTo: {
						y: window.activePrevRowDest,
						offsetY: window.offsetByElementHeight,
						autoKill:false,
					},
					onStart:function(){
						window.isSoulScrolling = 'soulscrolling';
					},
					onComplete:function(){
						window.isSoulScrolling = 'not-soulscrolling';
						window.scrollAdd = 0;
					},
					ease:Power4.easeOut
				} );
	

    			
		});//end up
		
		//three rapid clicks is adding to scrolladd while the scroll position changes, causing an extra jump. temp solution - speed up the animations. long term - store a scroll distance and determine if it's being rapidly clicked before the animation ends - in which case, throttle scrolladd.
		
		
		//when you click on the down button
		jQuery('.soulscroller-down').click(function(){

		

			console.log(window.scrollAdd);
			
			//first, get the scroll distance of the window.
			window.scrollDistance = jQuery(window).scrollTop();
			
			
			   if(window.scrollDistance + jQuery(window).height() == jQuery(document).height()) {
			 	  return false;
			   }

			
			if(window.isSoulScrolling == 'soulscrolling'){
				window.scrollAdd = window.scrollAdd+1;
			}
			
			console.log('scrolldistance= '+window.scrollDistance);

  				          
            	jQuery('.fl-row').filter(function(){
	            	return jQuery(this).outerHeight() > 0;
            	}).each(function(i) {
	            	    console.log(i + ': '+jQuery(this).position().top);
	            	    
	            	    //
						if (jQuery(this).position().top > window.scrollDistance + window.offsetByElementHeight) {

							//if it's not the last row,
							if(i+window.scrollAdd < jQuery('.fl-row').length){
								//dest is the row below it
								window.activePrevRowDest = jQuery('.fl-row').filter(function(){
	            	return jQuery(this).outerHeight() > 0;
            	}).eq(i+window.scrollAdd).position().top;
								return false;
							}else{
								window.activePrevRowDest = 0;
								return false;

							}
						}
				});
				
				//then scroll to the position of the previous row. As this is animating, we'll set the activerow to the destination row.
				TweenMax.to( window, .33, {
					
					scrollTo: {
						y: window.activePrevRowDest,
						offsetY: window.offsetByElementHeight,
						autoKill:false,
					},
					onStart:function(){
						window.isSoulScrolling = 'soulscrolling';
					},
					onComplete:function(){
						window.isSoulScrolling = 'not-soulscrolling';
						window.scrollAdd = 0;
					},
					ease:Power4.easeOut
				} );
	

    			
		});//end down
	
	});
	
	
	
	
	
	
