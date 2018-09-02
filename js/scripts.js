	jQuery.fn.reverse = [].reverse;

	jQuery(document).ready(function(){
		
	   
		//remove empty paragraphs
		jQuery('p:empty, br').remove();

		 
		 jQuery('.soulscroller').appendTo('body');   







	});
		 
	
	jQuery(window).load(function(){
					

	var scrollSelector = jQuery('.fl-row').filter(function(){
		return jQuery(this).outerHeight() != 0;
	});
	
	console.log(scrollSelector);

	window.scrollSections = [];
	window.reverseScrollSections = [];

	scrollSelector.each(function(i){
		
		//cache this and assign vars
		$this = jQuery(this);		
        offsetTop = $this.offset().top;
        node = $this[0].dataset.node;
        height = $this.outerHeight();
	        
		//populate array	        
	    window.scrollSections[i] = {
	        offsetTop: Math.round(offsetTop),
	        node: node,
	        height: height
	    };
	})
	
	scrollSelector.reverse().each(function(i){
		
		//cache this and assign vars
		$this = jQuery(this);		
        offsetTop = $this.offset().top;
        node = $this[0].dataset.node;
        height = $this.outerHeight();
	        
		//populate array	        
	    window.reverseScrollSections[i] = {
	        offsetTop: Math.round(offsetTop),
	        node: node,
	        height: height
	    };
	})
	
	
	console.log(window.reverseScrollSections);

	var scrollTween = function scrollTweenFunction(theIndex){
				TweenMax.to( window, .5, {
					
					scrollTo: {
						y: window.scrollSections[theIndex].offsetTop,
						offsetY: window.offsetByElementHeight,
						autoKill:false,
					},
					ease:Power4.easeOut
					
				});
	} 
	
	var reverseScrollTween = function reverseScrollTweenFunction(theIndex){
				TweenMax.to( window, .5, {
					
					scrollTo: {
						y: window.reverseScrollSections[theIndex].offsetTop,
						offsetY: window.offsetByElementHeight,
						autoKill:false,
					},
					ease:Power4.easeOut
					
				});
	} 
	
	window.onCanvasHeight = jQuery('.oncanvas .ss-container').outerHeight();
	
	
	jQuery('.soulscroller-down').click(function(e){
		
		e.preventDefault();
		
		
		
		//get the current scroll position		
		var windowScrollTop = Math.round(jQuery(window).scrollTop());
		//console.log(windowScrollTop);
		
		//loop through scrollSections and find the next section index
		jQuery(window.scrollSections).each(function(i){
			
/*
			console.log(this.offsetTop);
			console.log(windowScrollTop);
*/
			
			//if the scroll position matches a section, scroll the window to the following section (note the i+1)
			if(this.offsetTop == windowScrollTop || this.offsetTop == (windowScrollTop+window.onCanvasHeight)){
				console.log('match, scrolling to next section, index = '+(i+1));
				console.log('offsetTop ='+this.offsetTop);
				console.log('window scroll ='+windowScrollTop);
				
				scrollTween(i+1);
	
				return false;

				
			//if the scroll position is less than a section, scroll the window to that section.	
			}else if(this.offsetTop > windowScrollTop ){
				console.log('no match, scrolling to next section down, index = '+i);
				console.log('offsetTop ='+this.offsetTop);
				console.log('window scroll ='+windowScrollTop);
				
				scrollTween(i);

				return false;


			}
		});
		
	});
	
	jQuery('.soulscroller-up').click(function(e){
		
		e.preventDefault();
		
		//get the current scroll position
		var windowScrollTop = Math.round(jQuery(window).scrollTop());
		//console.log(windowScrollTop);
		
		if(windowScrollTop == 0){
			return false;
		}
		
		//loop through scrollSections and find the next section index
		jQuery(window.reverseScrollSections).each(function(i){
			
/*
			console.log(this.offsetTop);
			console.log(windowScrollTop);
*/
			
			//if the scroll position matches a section, scroll the window to the previous section (note the i-1)
			if(this.offsetTop == windowScrollTop || this.offsetTop == (windowScrollTop+window.onCanvasHeight)){
				console.log('match, scrolling to previous section, index = '+i);
				console.log('offsetTop ='+this.offsetTop);
				console.log('window scroll ='+windowScrollTop);
				
				reverseScrollTween(i+1);
	
				return false;

				
			//if the scroll position is more than a section, scroll the window to that section.	
			}else if(this.offsetTop < windowScrollTop ){
				console.log('no match, scrolling to next section up, index = '+i);
				console.log('offsetTop ='+this.offsetTop);
				console.log('window scroll ='+windowScrollTop);
				
				reverseScrollTween(i);

				return false;


			}
		});
		
	});







		
		

	
	});
	

	
	
	
	
	
	
