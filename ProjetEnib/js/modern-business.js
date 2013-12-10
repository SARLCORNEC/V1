// Activates the Carousel
$('.carousel').carousel({
  interval: 1500
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})


  
  $(function() {
  // setup ul.tabs to work as tabs for each div directly under div.panes
$("ul.nav nav-tabs").tabs("div.tab-pane > div");
  });