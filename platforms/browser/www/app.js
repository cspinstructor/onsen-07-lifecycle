window.fn = {};

window.fn.open = function() {
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  menu.open();
};

window.fn.load = function(page) {
  //var content = document.getElementById('content');
  var content = $('#content')[0];
  //var menu = document.getElementById('menu');
  var menu = $('#menu')[0];
  content.load(page).then(menu.close.bind(menu));
};

//--- catches lifecycle event _init_ for any ons-page ---
$(document).on('init', function({ target }) {
  if (target.matches('#settings')) {
    console.log('settings init...');
  }
  if (target.matches('#about')) {
    console.log('about init...');
  }
  if (target.matches('#home')) {
    console.log('home init...');
  }
});

//--- catches lifecycle event _show_ for any ons-page ---
$(document).on('show', function({ target }) {
  if (target.matches('#settings')) {
    console.log('settings show...');
  }
  if (target.matches('#about')) {
    console.log('about show...');
  }
  if (target.matches('#home')) {
    console.log('home show...');
  }
});

//--- catches lifecycle event _hide_ for any ons-page ---
$(document).on('hide', function({ target }) {
  if (target.matches('#settings')) {
    console.log('settings hide...');
  }
  if (target.matches('#about')) {
    console.log('about hide...');
  }
  if (target.matches('#home')) {
    console.log('home hide...');
  }
});
