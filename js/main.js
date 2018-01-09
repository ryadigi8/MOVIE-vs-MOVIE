// A page can't be manipulated safely until the document is "ready." jQuery detects 
// this state of readiness for you. Code included inside $( document ).ready() will 
// only run once the page Document Object Model (DOM) is ready for JavaScript code to 
// execute.

$(document).ready(function(){
    // console.log("this is a test");

 // Lets Create an Array to hold all of our Movie Content
  
  var movieList = [
    { 
      movie:{
            title:"Ready Player One",
            movieRating:"PG-13",
            releaseDate: "March 30, 2018",
            imgName:"rpo.jpg",
            posterName:"ready_poster.jpg",
            id: "RPO"
        }
    },
        { 
      movie:{
            title:"Justice League",
            movieRating:"PG-13",
            releaseDate: "November 17, 2017",
            imgName:"jl.jpg",
            posterName:"just_poster.jpg",
            id: "JL"
        }
    },
        { 
      movie:{
            title:"SpiderMan Homecoming",
            movieRating:"PG-13",
            releaseDate: "July 7, 2017",
            imgName:"homecoming.jpg",
            posterName:"spider_poster.jpg",
            id: "SPHC"
        }
    },
        { 
      movie:{
            title:"Starwars - The Last Jedi",
            movieRating:"PG-13",
            releaseDate: "December 15, 2017",
            imgName:"swtlj.jpg",
            posterName:"stars_poster.jpg",
            id: "SWTLJ"
        }
    },
            { 
      movie:{
            title:"batman vs superman Dawn of Justice",
            movieRating:"PG-13",
            releaseDate: "December 15, 2017",
            imgName:"bvss.jpg",
            posterName:"superbat_poster.jpg",
            id: "bvss"
        }
    },
            { 
      movie:{
            title:"zootopia",
            movieRating:"PG-13",
            releaseDate: "December 15, 2017",
            imgName:"zoo.jpg",
            posterName:"top_poster.jpg",
            id: "zoo"
        }
    },
  
  ];
  
//   Lets Test the array to see if/ what data we can pull out of it.
  
//   console.log(movieList[0].movie.title);
  
  
// Now that we have an array set that holds our values, lets setup a random number generator.
  
function getRandomNumber(min, max){
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

// Set a global var that we can use and lets set the min and max values that will get passed into the random function  
ranNumOne = getRandomNumber(0,4);
ranNumTwo = getRandomNumber(0,4);
  

//   Lets plug in our variables to see what kind of data we can get out.
  
  console.log(movieList[ranNumOne].movie.title);
  console.log(movieList[ranNumTwo].movie.title);
  
  var movieImgOne = '../img/' + movieList[ranNumOne].movie.imgName,
      movieImgTwo = '../img/' + movieList[ranNumTwo].movie.imgName,
      movieOneId = movieList[ranNumOne].movie.id,
      movieTwoId = movieList[ranNumTwo].movie.id,
      movieTitleOne = movieList[ranNumOne].movie.title,
      movieTitleTwo = movieList[ranNumTwo].movie.title,
      movieRatingList = movieList[ranNumOne].movie.movieRating,
      moviePosterImgOne = 'img/' + movieList[ranNumOne].movie.posterName;
      movieTitleTwo = movieList[ranNumTwo].movie.title,
      movieRatingListTwo = movieList[ranNumTwo].movie.movieRating,
      moviePosterImgTwo = 'img/' + movieList[ranNumTwo].movie.posterName;
  
  
//   $('#mp-one').append($('<img>',{id:movieOneId,src:'img/' + movieImgOne, class:'mp' }));
//   $('#mp-two').append($('<img>',{id:movieTwoId,src:'img/' + movieImgTwo, class:'mp' }));
  

  
  $('.movie-left').css({

      'background-image':'url('+ movieImgOne +')',
      'background-size': 'cover',
      'background-repeat':'no-repeat',
      'background-position': '30% 30%',
      'filter':'opacity(.25) grayscale(100%) contrast(130%)',
      'background-color': 'black',
      'position':'absolute',
      'top':'0'
  

  });
  $('.movie-right').css({

      'background-image':'url('+ movieImgTwo +')',
      'background-size': 'cover',
      'background-repeat':'no-repeat',
      'background-position': '30% 30%',
      'filter':'opacity(.25) grayscale(100%) contrast(130%)',
      'background-color': 'black',
      'position':'absolute',
      'top':'0'
      
  });
  
  
//   Lets Remove the below because everything is just coming in all at once.
  
//   $("#mOne").append('<img src='+ movieImgOne +'>');
//   $("#mTwo").append('<img src='+ movieImgTwo +'>');

// Lets test and see what random Numbers we are pulling.  
//    console.log(ranNumOne);
//    console.log(ranNumTwo);
    
// $ is just a shortcut for jQuery

// setup the element we would like to listen to
// Here we are listening to the generate-btn class
// Once the element registers a click, we trigger a function.
    $('.generate-btn').on('click', function(){

// the function that we are triggering on click, 
// is to add in the slide-in-left and slide in right classes


// Here we select the element we would like to add a class to.
// When events are triggered, they are done synchronously
    $('.movie-left').addClass('slide-in-left');
    $('.movie-right').addClass('slide-in-right');
      
      
 // Once we have the class being added to the element we need to listen to if the event has completed
 // We can listen for just one event or both. If we listen to both then we can have fun triggering differenet things
      $('.movie-left').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
       
//         We will append the poster graphic here on click
        
        
//        Set a variable here for the creation of a div on the fly.
          var newElement = document.createElement('div');
          newElement.className = 'poster';
          newElement.id = 'movie-one';
          var newTarget = document.getElementById('poster-left');
        
        
//         Create a new elemt
            $('<div></div>', {
                text: '',
                html: '<img src="'+ moviePosterImgOne +'"/>',
                class: 'movie-post',
            }).appendTo(newElement);

            $('<div></div>', {
                                text: '',
                                html: '<h2> ' + movieTitleOne + ' </h2>',
                                class: 'movie-title',
                            }).appendTo(newElement);
             $('<div></div>', {
                                text: 'this is a test',
                                html: '<h2> ' + movieRatingList + ' </h2>',
                                class: 'movie-rating',
                            }).appendTo(newElement);
           

            newTarget.appendChild(newElement);
        
//         Create a new element that will hold the text.
        
        console.log("left-finished");
      });
      
         $('.movie-right').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
//         We will append the poster graphic here on click
//        Set a variable here for the creation of a div on the fly.
var newElement = document.createElement('div');
newElement.className = 'poster';
var newTarget = document.getElementById('poster-right');


//         Create a new elemt
            $('<div></div>', {
                text: '',
                html: '<img src="'+ moviePosterImgTwo +'"/>',
                class: 'movie-post',
            }).appendTo(newElement); 

            $('<div></div>', {
                                text: '',
                                html: '<h2> ' + movieTitleTwo + ' </h2>',
                                class: 'movie-title',
                            }).appendTo(newElement);
            $('<div></div>', {
                                text: 'this is a test',
                                html: '<h2> ' + movieRatingListTwo + ' </h2>',
                                class: 'movie-rating',
                            }).appendTo(newElement);


  newTarget.appendChild(newElement);

        console.log("right-finished");
      });
      
 
    });

});