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
	
	$('.facbox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Application of Factoradics</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">The idea for this came while I was reading <a href="https://www.nayuki.io/page/next-lexicographical-permutation-algorithm">this</a>. The article described an O(n) algorithm to generate the next lexicographical permutation of a given set. I wondered if it was possible to extend this idea and generate the N-th lexicographical permutation of a set, given all its elements. As it so happens, this is a very well studied problem and uses the <a href="https://en.wikipedia.org/wiki/Factorial_number_system">factoradic number system</a>. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <div class="col-md-12 margBSSmall" style="padding-left: 0px"> <p style="text-align: justify;text-justify: inter-word;" class="margBSSmall">One way of doing this is to generate all possible permutations of the set, and then pick out the N-th element. This will work but is clearly too slow. A faster way is to use factoradics. In the factoradic system, the last digit is always 0 and is in base 0!. The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!. More generally, the nth-to-last digit in always 0, 1, 2, ..., or n and is in base n!. Let\'s denote that a number is written in factoradic base by suffixing the number with _!. So,<br/> 2110_! = 2 x 3! + 1 x 2! + 1 x 1! + 0 x 0!<br/> = 2 x 6 + 1 x 2 + 1 x 1 + 0 x 1<br/> = 12 + 2 + 1 + 0<br/> = 15<br/><br/> There\'s a close connection between factoradic numbers and permutations of distinct values. Let\'s consider permutations of four elements - A, B, C, and D - and the order in which they\'re generated. Here\'s a table of these permutations: </p> <table class="table margBSSmall" style="text-align:center;text-transform:uppercase"> <tbody> <tr> <td>0000_! abcd</td> <td>1000_! bacd</td> <td>2000_! cabd</td> <td>3000_! dabc</td> </tr> <tr> <td>0010_! abdc</td> <td>1010_! badc</td> <td>2010_! cadb </td> <td>3010_! dacb</td> </tr> <tr> <td>0100_! acbd</td> <td>1100_! bcad</td> <td>2100_! cbad</td> <td>3100_! dbac</td> </tr> <tr> <td>0110_! acdb</td> <td>1110_! bcda</td> <td>2110_! cbda</td> <td>3110_! dbca</td> </tr> <tr> <td>0200_! adbc</td> <td>1200_! bdac</td> <td>2200_! cdab</td> <td>3200_! dcab</td> </tr> <tr> <td>0210_! adcb</td> <td>1210_! bdca</td> <td>2210_! cdba</td> <td>3210_! dcba</td> </tr> </tbody> </table> <p style="text-align: justify;text-justify: inter-word;"> We can see that the first letter changes every six permutations, and this coincides with the times at which the first digit of the factoradic representation changes. Similarly connections exist for other letters and digits too. This connection is due to <a href="https://en.wikipedia.org/wiki/Lehmer_code">Lehmer Codes</a>. There is a one-to-one coorespodance between factoradic numbers and lehmer codes. For brevity\'s sake, I\'ll omit how to convert permuations to lehmer codes and vice versa, that explaination can be found <a href="https://en.wikipedia.org/wiki/Lehmer_code">here</a>. So, our final algorithm is as follows <br/><br/> </p> <ol type="1"> <li style="list-style:upper-roman"> Convert N to factoradic base, say N_! </li> <li style="list-style:upper-roman"> Convert N_! to lehmer code </li> <li style="list-style:upper-roman"> Generate the permuation using this lehmer code </li> </ol> <p style="text-align: justify;text-justify: inter-word;"><br/> This algorithm can also be used in the reverse direction, that is, to tell the lexicographical position of a permuation given the set. With slight modification to the above algorithm, I was also able to generate N-th permuation of n elements, taken k at a time. </p> </div> </div> </div> </div> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});
	
	
	$('.sudokubox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Sudoku Solver</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">Generating pre-solved <a href="https://en.wikipedia.org/wiki/Sudoku">Sudoku</a> grids is easy, thanks to a <a href="https://en.wikipedia.org/wiki/Sudoku_solving_algorithms#Blank_Sudoku_grids">very elegant polynomial time algorithm</a>. Solving an incomplete grid however, is much more difficult. This is an account of the approach I used to write an efficient sudoku solver. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <div class="col-md-8" style="padding-left: 0px"> <p style="text-align: justify;text-justify: inter-word;">This is a classic backtracking problem. We assign a value to every empty square based on the rules of sudoku. If there are more than one possible values, we chose one randomly. We repeat this process recursively till we either solve the puzzle, or come at a position where there are no valid choices left. The later means that one of the choices we made along the way was wrong. So we backtrack and try a different sequence of moves till we eventually solve the puzzle. This approach is pretty fast for most standard puzzles and solves them in under a second. There are other advanced algorithms like the <a href="https://www.ocf.berkeley.edu/~jchu/publicportal/sudoku/sudoku.paper.html">Dancing Links</a> which treat sudoku as an exact cover problem. But for a normal 9x9 board, standard backtracking is fast enough. </p> </div> <div class="col-md-4"> <div class="clearfix"> <img src="img/portfolio/sudoku_recur.jpg" alt=""> </div> <div class="clearfix"> <p style="text-align:center">Red numbers are known. Blue numbers are generated during backtracking</p> </div> </div> </div> </div> </div> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});
				
				$('.chessSurvivalBox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Opening theory and survival</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">There are only 20 possible ways a Chess game can begin. But the permutations explode after that and it becomes next to impossible to keep track of all the "lines" the game can take. To simplify this process, most players study what\'s called the Opening Theory of Chess. After hundreds of years of experimentation, chess players have discovered that certain sequence of moves played in the beginning often lead to a strong position later on in the game. "Opening theory" commonly refers to this consensus, broadly represented by current literature on the openings. </p> <div class="clearfix margBSSmall"> <div class="col-md-4 col-md-offset-1"> <div class="clearfix"> <img src="img/portfolio/ruy_lopez.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Ruy Lopez</p> </div> </div> <div class="col-md-4 col-md-offset-2"> <div class="clearfix"> <img src="img/portfolio/sic.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Sicilian Defence</p> </div> </div> </div> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">More often than not, the opening heavily influences how the middle and end games turn out. I used to struggle with endgames involving Knights and Bishops and generally fared better in ones that involved Rooks. I wanted to identify the openings that played to my strengths and were more likely to lead to rook endgames. <br/><br/>Shown above are two of my favorite openings, the Ruy-Lopez and the Sicilian Defence. Like most openings, they share certain common ideas. Controlling the center of the board is a very good way of ensuring a strong position throughout the game. Similarly, developing the minor pieces, the knights and the bishops, as soon as possible helps dominate the center and makes way for the king to castle. Since most players play the game this way (the top rated ones hardly experiment), it stands to reason that the pieces that try to control the center are most likely to be taken. The king and queen pawns, followed by knights and bishops. Rooks and Queens generally develop around the middle game and thus are out of danger for the first 20 moves or so. Theoretically speaking therefore, rooks are more likely to survive in almost all openings. This is an account of the analysis I did to verify this prediction and understand how the subtleties of opening theory affect the average survival probabilities of certain pieces. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">Chess is one of the most well documented games, with records going back to the 1500s. So it wasn\'t difficult at all to find a large dataset. All the games are stored in a PGN file like the ones available <a href="http://www.pgnmentor.com/files.html#openings">here</a>. The dataset I worked with had over 275,000 chess games played between players who are GMs or Elo 2500+. We need to first convert the games from standard algebraic notation (eg Be5) to long algebraic notation (eg Bd4Be5) which is easier to work with. We also need to get rid of any extra annotations to make the parsing easier and more efficient. Thankfully,<a href="https://www.cs.kent.ac.uk/people/staff/djb/pgn-extract/">pgn-extract</a> is built for doing exactly that.<br/><br/> Once we have the games in the desired format, simulating them and calculating average survival probabilities is straight forward. We keep a 64x64 character array to act as our chess board and a boolean array of 32 elements to keep track of which pieces are dead/alive. We then iterate through every move of a game and keep track of captures. Note that we need to handle some special moves like castling and en-passant capture. At the end of every game, we update the cumulative "score" of every piece. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Results</h1> <div class="block-single clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">The cumulative results of most e4 openings can be found in csv format <a href="chess_survival.csv">here</a>. This is what the results look like when plotted on a chess board. The darker the starting square of the piece, the less likely it is to survive.</p> </div> <div class="block-single clearfix margBSSmall" style="text-align:center"> <img src="img/portfolio/chess_graph.jpg" alt=""> </div> <div class="block-single clearfix"> <p style="text-align: justify;text-justify: inter-word;">The findings are largely consistent with the implications of opening theory. Note that both the kings survive 100% of the games since they can never be captured, only check mated. As expected, the D and E file pawns have a rather poor rate of survival. The knights and bishops follow a similar pattern. Queens and Rooks fare much better along with the A,G and H file pawns.</p> </div> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});

$('.dimbox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Android based 3D dimensioning system</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">3D dimensioning systems find many applications in the freight industry by companies like FedEx who use them to quickly measure and sort their shipments by size. But the level of complexity involved in such cameras coupled with the overall cost puts them out of reach of smaller companies. Solving this problem was the premise for my final year thesis at College of Engineering Pune. Along with two classmates, I developed an android based dimensioning system that worked using <a href="http://www.cns.nyu.edu/~david/courses/perception/lecturenotes/depth/depth-size.html">Depth by disparity</a> and <a href="http://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html">3D reprojection</a>. </p> <div class="clearfix margBSSmall"> <div class="col-md-4 col-md-offset-1"> <div class="clearfix"> <img src="img/portfolio/dim_droid.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Hardware Setup</p> </div> </div> <div class="col-md-4 col-md-offset-2"> <div class="clearfix"> <img src="img/portfolio/dim_working.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Our system at work</p> </div> </div> </div> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">Our system used an average android smart phone mounted on a slider to take stereo images of an object. Our android app then analyzed these images and calculated the dimensions of the object. After over a year of refining both the hardware setup and the image processing algorithms, we were able to achieve an average error of &lt; 2%. Our work was well recieved and we won the S.V.C.Aiya Memorial Award for it. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">Our system made extensive use of depth maps such as the one shown below. The lighter the object, the closer it is to the camera. We tried many algorithms to generate this map, from simple ones like Sum of Absolute Differences to advanced ones like graph cut. We finally settled on Semi Global Block Matching as it provided the best combination of speed and accuracy. </p> </div> <div class="clearfix margBSSmall"> <div class="col-md-8 col-md-offset-2"> <div class="clearfix" style="text-align:center"> <img src="img/portfolio/depth_map.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Depth Map</p> </div> </div> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">We extracted the object of interest from this depth map using object detection and segmentation algorithms. To get a more accurate measurement, we combined this result with the output of a edge detection filter to get a better outline of the object. </p> </div> <div class="clearfix margBSSmall"> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/dm1.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Depth Map</p> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/dm2.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>After Segmentation</p> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/dm3.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Edge Detection</p> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/dm4.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Final Result</p> </div> </div> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">After we had the relative distances, the next step was to use stereo calibration to compute the intrinsic rotation, translation and disparity to depth mapping matrices of the camera. Note that this value is different for every camera. These matrices allowed us to map the relative distances from the depth map into real world measurements in meters. For stereo calibration, we clicked 16 stereo pairs of a chessboard pattern and processed them using OpenCV (skipping a ton of math that can be found <a href="http://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html">here</a>). </p> </div> <div class="clearfix margBSSmall"> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/cb1.jpg" alt=""> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/cb2.jpg" alt=""> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/cb3.jpg" alt=""> </div> </div> <div class="col-md-3"> <div class="clearfix"> <img src="img/portfolio/cb4.jpg" alt=""> </div> </div> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Results</h1> <div class="block-single clearfix margBSSmall"> <ol> <li style="list-style:upper-roman"> The average errors observed were as follows <ul style="padding-left:20px"> <li style="list-style:disc">E<sub>D</sub> (Error in distance) = 0.8213 %</li> <li style="list-style:disc">E<sub>W</sub> (Error in width)= 1.5461 %</li> <li style="list-style:disc">E<sub>H</sub> (Error in height)= 1.6931 %</li> </ul> </li> <li style="list-style:upper-roman"> The minimum distance at which the object can be accurately measured was found to be 44 cm from the camera. This is because the object does not fit the camera frame entirely if brought any closer. </li> <li style="list-style:upper-roman"> The maximum distance was found to be 250cm from the camera. This is due to the fact that if the object is placed any further, it is not segmented properly due to its low disparity value and lack of prominent edge detection. </li> </ol> </div> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});
				
				
	$('.crawlerbox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Recursive Web crawler</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">This was an interesting project. I had to extract some data points from a website. The problem was that this information was spread over multiple pages on that website. Thankfully, those pages linked to each other. I wrote a java based crawler that parsed through these pages and recursively navigated around the website, and then stored that data in a database. In the course of implementing this, I learnt a lot about <a href="http://www.robotstxt.org/">robots.txt</a> and how websites generally deal with crawlers. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">The first step was to find a headless browser I can use with Java. A headless browser is basically a fully functioning browser without a GUI. I chose <a href="https://jsoup.org/">JSoup</a> because it provides a rather powerful and intuitive abstraction layer to parse through the HTML DOM. The basic flow was as follows <br><br> <ol type="1"> <li style="list-style:upper-roman"> Get the page with the given URL</li > <li style="list-style:upper-roman"> Parse through the page data to extract relevant information</li> <li style="list-style:upper-roman"> Extract the links from this page and add them to the queue. </li> <li style="list-style:upper-roman"> Repeat this process for every link in the queue </li> </ol> <br>Ofcourse we need to respect the website\'s robot.txt guidelines. Another thing we must consider, is throttling the rate at which we request for new webpages. We can\'t recursively crawl through the website forever, so we also need to set a maximum depth after which the recursion will end. It\'s like a depth first search in a graph, but with a limit set on how deep you can go. Next step was to extract relevant data points from the webpages and hook up an ORM (I used <a href="http://hibernate.org/">Hibernate</a>) to store them in a database (<a href="http://www.mysql.com/">MySQL</a> in this case). Integrating <a href="http://itextpdf.com/">iText</a> for exporting the data in PDF format was also interesting. Another interesting modification was making this crawler multi threaded and reconciling the rate at which new threads were spawned with the overall throttling of GET requests. </p> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
        type: 'inline',
		closeOnBgClick:true
	}
	]
		
      
				});		


$('.knightsbox').magnificPopup({
	items : [
	{	src : '<!--Container--> <div class="container" style="margin-bottom: 80px !important;margin-top:80px !important"> <div class="row "> <div class="col-md-12"> <!--Portfolio single--> <section id="portfolio" class="bgWhite ofsInBottom "> <!--Portfolio --> <div class="portfolio"> <!--Content--> <div class="content"> <!--Block content--> <div class="block-content "> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 40px;letter-spacing: 5px;line-height: 50px;">Recursion in Chess</h1> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Motivation</h1> <p class="margBSSmall" style="text-align: justify;text-justify: inter-word;">Knight\'s tour and the N Queens problem are really good ways of exploring recursion. Because these problems are often defined for NxN chess boards (instead of the usual 8x8 board), brute force solutions won\'t work for N > 10. This forces us to find ways to optimize the algorithm and prune the search tree as much as possible. I will talk about the knights tour problem here for two reasons. One, it is easier to explain. Two, it leads to some truly beautiful variations. You can read more about N-Queens problem <a href="https://developers.google.com/optimization/puzzles/queens">here</a> and <a href="https://en.wikipedia.org/wiki/Eight_queens_puzzle">here</a>. </p> <hr> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Methodology</h1> <p style="text-align: justify;text-justify: inter-word;">A knight\'s tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once. Note that the knight can start and end his tour on the same (or different) square(s). A more detailed explaination can be found <a href="https://en.wikipedia.org/wiki/Knight%27s_tour">here</a>. </p> </div> <div class="clearfix margBSSmall"> <div class="col-md-8 col-md-offset-2"> <div class="clearfix" style="text-align:center"> <img src="img/portfolio/knight_tour.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>One of over 26 trillion possible solutions</p> </div> </div> </div> </div> <div class="block-single clearfix"> <div class="col-md-8" style="padding-left: 0px; !important"> <p style="text-align: justify;text-justify: inter-word;">At every stage, the knight has a maximum of 8 possible moves. We represent these moves with two arrays,<br/><br/> xMove[8] = { -2, -2, 2, 2, -1, -1, 1, 1} and yMove[8] = { -1, 1, -1, 1, -2, 2, -2, 2} <br/><br/> At every stage, we loop through each of these moves. For every legal move, we recursively solve for the next move. If at any stage, we run out of legal moves before visiting all the squares, we backtrack and try a different sequence of moves. This is standard brute force without any optimizations. </p> </div> <div class="col-md-4"> <div class="clearfix"> <img src="img/portfolio/knight_possible.jpg" alt=""> </div> </div> <hr> </div> <div class="block-single clearfix"> <div class="clearfix"> <h1 class="large-title margBSSmall" style="font-size: 30px;letter-spacing: 3px;line-height: 40px;">Optimizations and Variations</h1> <div class="block-single clearfix margBSSmall"> <div class="col-md-4"> <div class="clearfix"> <img src="img/portfolio/knight_circle.jpg" alt=""> </div> </div> <div class="col-md-8" style="padding-left: 0px; !important"> <p style="text-align: justify;text-justify: inter-word;">One way to optimize is to pre-compute the legal moves for positions where the knight has a limited number of moves (corners etc). Another  optimization has to to with the order in which we check for legal moves. If you plot these vectors, they are haphazardly placed. In other words, they are not ordered in either a clockwise or an anti-clockwise manner. However, if we use this instead : <br/><br/> xMove[8] = { 2, 1, -1, -2, -2, -1, 1, 2 } and yMove[8] = { 1, 2, 2, 1, -1, -2, -2, -1 } <br/><br/> If you plot these vectors, they are neatly arranged in an anticlockwise circle. This causes the recursion to run much quickly for larger values of N </p> </div> </div> </div> <div class="block-single clearfix"> <div class="col-md-8" style="padding-left: 0px; !important"> <p style="text-align: justify;text-justify: inter-word;">A more subtle optimization is the <a href="https://en.wikipedia.org/wiki/Knight%27s_tour#Warnsdorf.27s_rule">Warnsdorf rule</a>. The idea is to always pick the sqaures from where the knight will have the fewest onward moves. For example, in the figure, the knight will move to the A2 square. This ensures that top levels of the recursion tree will have few children, thereby cutting down the time of execution drastically. </p> </div> <div class="col-md-4"> <div class="clearfix"> <img src="img/portfolio/wansdorf.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Numbers indicate the number of legal moves from that square</p> </div> </div> </div> </div> <div class="block-single clearfix"> <div class="clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">A very interesting variation is to generate a knight\'s tour where the move numbers generate a magic square. As shown in the figure below, all the rows and columns sum up to 260. There are about 140 such known tours. </p> </div> <div class="clearfix margBSSmall"> <div class="clearfix margBSSmall"> <div class="col-md-4 col-md-offset-1"> <div class="clearfix"> <img src="img/portfolio/magic_1.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>All rows sum to 260</p> </div> </div> <div class="col-md-4 col-md-offset-2"> <div class="clearfix"> <img style="height: 322px;" src="img/portfolio/magic_2.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>All columns sum to 260</p> </div> </div> </div> </div> <div class="clearfix margBSSmall"> <p style="text-align: justify;text-justify: inter-word;">What\'s even more interesting, is to note that every quadrant and all the 2x2 squares, are also magic sqaures. Generating these tours efficiently is very challenging. </p> </div> <div class="clearfix margBSSmall"> <div class="clearfix margBSSmall"> <div class="col-md-4 col-md-offset-1"> <div class="clearfix"> <img style="height: 322px;" src="img/portfolio/magic_3.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>Quadrants are magic sqaures too</p> </div> </div> <div class="col-md-4 col-md-offset-2"> <div class="clearfix"> <img style="height: 322px;" src="img/portfolio/magic_4.jpg" alt=""> </div> <div class="clearfix" style="text-align:center"> <p>So are the 2x2 squares</p> </div> </div> </div> </div> </div> </div> </div> <!--End block content--> </div> <!--End content--> </div> <!--End portfolio--> </section> <!--End portfolio single--> </div> </div> <!--End row--> </div> <!--End container-->',
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

});


})(jQuery);
