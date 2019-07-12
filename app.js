$(function() {
  $(window).scroll(function() {
    var bottomAboutContenth2 =
      $(".aboutContent h2").position().top +
      $(".aboutContent h2").outerHeight();
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
    if (bottomOfWindow > bottomAboutContenth2) {
      $(".aboutContent h2").animate({ opacity: "1" }, 1500);
    }
  });
  const urlWorkers = "https://kuzar94.github.io/data/db.json";
  const $workersDiv = $(".workers");
  $.ajax({
    method: "GET",
    url: urlWorkers,
    dataType: "JSON"
  }).done(function(res) {
    for (elements of res.workers) {
      const $workerinstance = $(
        `<div class="worker1">
             <img src=${elements.img} />
             <h4 class="job">${elements.job}</h4>
             <p class="aboutJob">
               ${elements.name} ${elements.surname} ${elements.aboutMe}
             </p>
        </div>`
      );
      $workersDiv.append($workerinstance);
    }
  });
  const urlPosts = "https://kuzar94.github.io/data/db.json";
  $.ajax({
    method: "GET",
    url: urlPosts,
    dataType: "JSON"
  }).done(function(res){


    
  })
});
