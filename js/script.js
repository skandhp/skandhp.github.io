(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(200).fadeOut("slow"); 
});

$(document).ready(function(){
	
	
//------------------------------------- Site slider ------------------------------------------------//

$("#testimonial-carousel").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true   
});
  
  
$("#block-slider").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: true,
    navigation:true,
    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
});




//------------------------------------- End site slider------------------------------------------------//





//------------------------------------- Skills percentage setup------------------------------------------------//



$(".percentage").each(function(){
          var  width= $(this).text();
          $(this).css("width", width).empty();
});
		



//------------------------------------- End skills percentage setup------------------------------------------------//




//------------------------------------- Portfolio setup------------------------------------------------//



	
$('.box').magnificPopup({
					  type: 'image',
					fixedContentPos: false,
					fixedBgPos: false,
					mainClass: 'mfp-no-margins mfp-with-zoom',
					image: {
						verticalFit: true
					},
					zoom: {
						enabled: true,
						duration: 300
					}
				});

$('.btreebox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Performance of Balanced Trees</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">It is often assumed that balanced trees like <a href="https://en.wikipedia.org/wiki/AVL_tree">AVL</a> or <a href="https://en.wikipedia.org/wiki/Red%E2%80%93black_tree">Red-Black</a> trees are much faster than the standard Binary Search Tree (BST). As the name suggests, they achieve faster operations by minimizing the height of the tree. But are they always faster than vanilla BST? In my opinion, how fast the operations are depends more on the nature of data you have than the data structure you use. What follows is an account of the tests I ran to verify this hypothesis. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">Note that all the data structures used in these tests were implemented by me, so while they may not be as reliable as java.util.TreeSet, it would be fair to assume that all implementations are equally efficient/inefficient and thus the comparison should still hold. To measure the impact the nature of input data has on the performance of different trees, I tested the following scenarios <br/><br/> </p> <ol type="1"> <li style="list-style:upper-roman"> Insert numbers from 1 to 50,000 in increasing order. Then search for every number in the same order, followed by delete operation for every number in the same order </li > <li style="list-style:upper-roman"> Inserting numbers from 1 to 50,000 in increasing order. Then searching and deleting every number in the random order </li> <li style="list-style:upper-roman"> Inserting, searching and deleting every number from 1 to 50,000 in random order </li> </ol> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix" style="margin-bottom:50px"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Results</h1> <div class="col-md-6" style="padding-left: 0px; !important"> <p style="text-align: justify;text-justify: inter-word;">When all the numbers are inserted in increasing order, the vanilla binary tree predictably performs very badly. This is because the tree becomes very skinny and long. At this point, it is little more than a glorified linked list. On the other hand, thanks to the rotations, AVL and Red-Black trees remain fast even after 50,000 inserts.<br/> An interesting thing to note is how the vanilla BST has faster delete operations than the other two. This is because in balanced trees, some deletes might cause the tree to re-arrange itself, resulting in costly rotate operations. There is no such overhead in the case of vanilla BST. </p> </div> <div class="col-md-6"> <div class="clearfix"> <img src="img/portfolio/tree_ordered.png" alt=""> </div> </div> <hr> </div> <div class="clearfix"> <div class="col-md-6" style="padding-left: 0px; !important"> <div class="clearfix"> <img src="img/portfolio/tree_random.png" alt=""> </div> </div> <div class="col-md-6" > <p style="text-align: justify;text-justify: inter-word;">The situation changes drastically in case of random operations. For insert operations, AVL and Red-Black trees are almost 10 times slower than vanilla BST. When we insert random numbers in a BST, the height of the tree is very close to O(ln N). The slow operations of balanced trees can be explained by the unnecessary rotations done to "balance" the tree. These rotations are constant time but the combined overhead of 50,000 operations adds up to a large value.<br/>As expected, the search and delete operations are equally fast in all the trees as they are roughly of the same height.</p> </div> <hr> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});
				
				$('.chessSurvivalBox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Opening theory and survival</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">There are only 32 possible ways a Chess game can begin. But the permutations explode after that and it becomes next to impossible to keep track of all the "lines" the game can take. To simplify this process, most players study what\'s called the Opening Theory of Chess. After hundreds of years of experimentation, chess players have discovered that certain sequence of moves played in the beginning often lead to a strong position later on in the game. "Opening theory" commonly refers to this consensus, broadly represented by current literature on the openings. </p> <div class="clearfix margBSSmall"> <div class="col-md-4 col-md-offset-1"> <div class="clearfix"> <img src="img/portfolio/ruy_lopez.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Ruy Lopez</p> </div> </div> <div class="col-md-4 col-md-offset-2"> <div class="clearfix"> <img src="img/portfolio/sic.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Sicilian Defence</p> </div> </div> </div> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">Shown above are two of my favorite openings, the Ruy-Lopez and the Sicilian Defence. Like most openings, they share certain common ideas. Controlling the center of the board is a very good way of ensuring a strong position throughout the game. Similarly, developing the minor pieces, the knights and the bishops, as soon as possible helps dominate the center and makes way for the king to castle. Since most players play the game this way (the top rated ones hardly experiment), it stands to reason that the pieces that try to control the center are most likely to be taken. The king and queen pawns, followed by knights and bishops. Rooks and Queens generally develop around the middle game and thus are out of danger for the first 20 moves or so. This is an account of the analysis I did to understand how the subtleties of opening theory effect the average survival probabilities of certain pieces. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">Chess is one of the most well documented games, with records going back to the 1500s. So it wasn\'t difficult at all to find a large dataset. All the games are stored in a PGN file taken from <a href="http://chess-db.com/public/downloads/download.jsp?c=1">here</a>. This dataset has over 275,000 chess games played between players who are GMs or Elo 2500+. We need to first convert the games from standard algebraic notation (eg Be5) to long algebraic notation (eg Bd4Be5) which is easier to work with. We also need to get rid of any extra annotations to make the parsing easier and more efficient. Thankfully,<a href="https://www.cs.kent.ac.uk/people/staff/djb/pgn-extract/">pgn-extract</a> is built for doing exactly that.<br/><br/> Once we have the games in the desired format, simulating them and calculating average survival probabilities is straight forward. We keep a 64x64 character array to act as our chess board and a boolean array of 32 elements to keep track of which pieces are dead/alive. We then iterate through every move of a game and keep track of captures. Note that we need to handle some special moves like castling and en-passant capture. At the end of every game, we update the cumulative "score" of every piece. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Results</h1> <div class="block-single clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">The results can be found in csv format <a href="chess_survival.csv">here</a>. This is what the results look like when plotted on a chess board. The darker the starting square of the piece, the less likely it is to survive.</p> </div> <div class="block-single clearfix margBSSmall" style="text-align:center"> <img src="img/portfolio/chess_graph.jpg" alt=""> </div> <div class="block-single clearfix"> <p style="text-align: justify;text-justify: inter-word;">The findings are largely consistent with the implications of opening theory. Note that both the kings survive 100% of the games since they can never be captured, only check mated. As expected, the D and E file pawns have a rather poor rate of survival. The knights and bishops follow a similar pattern. Queens and Rooks fare much better along with the A,G and H file pawns.</p> </div> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});


				
$('.popup-youtube, .popup-vimeo').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});
				



/*Filtred portfolio*/
$('.filter li a').on("click", function(e){
	
		e.preventDefault();
		$(this).addClass('active');
		$(this).parent().siblings().find('a').removeClass('active');
		
		
		
        var filters = $(this).attr('data-filter');
        $(this).closest('.works').find('.item').removeClass('disable');

        if (filters !== 'all') {
        
        
        
        
        var selected =  $(this).closest('.works').find('.item');
        
        for(var i = 0; i < selected.length; i++){
        
        if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
				}
        
        }	
            
   }
   

});



//------------------------------------- End portfolio setup------------------------------------------------//




//------------------------------------- Search input------------------------------------------------//


	
	$('.search-form i').on("click", function(){
		$(this).closest('.search-form').find('input[type="text"]').focus();
		if($(this).closest('.search-form').find('input[type="text"]').val()){
			$(this).closest('.search-form').find('input[type="submit"]').trigger('click');
		}
	});

//------------------------------------- End search input------------------------------------------------//






//---------------------------------- Form validation-----------------------------------------//




$('.submit').on("click", function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contact-form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contact-form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
			
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//






//---------------------------------- Toogle switcher-----------------------------------------//


$('.toggle').click(function(e) {
        e.preventDefault();
        var styler = $('.styler');
        console.log(styler.css('left'));
        if (styler.css('left') === '-278px') {
            $('.styler').animate({
                left: '0px'
            });

        } else {
            $('.styler').animate({
                left: '-278px'
            });

        }
    });

//---------------------------------- End toogle switcher-----------------------------------------//


});


})(jQuery);
