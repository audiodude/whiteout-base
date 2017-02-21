var words;
var toKeep = [96, 101, 88, 89, 55, 36, 8, 26, 32, 44, 50];

function spanify(div) {
  words = $(div).text().split(/\s+/);
  $(div).html('');
  for (var i = 0; i < words.length; i++) {
    newSpan = $('<span id="w' + i + '">' + words[i] + ' </span>');
    newSpan.click((function(idx) {
      return function() { toKeep.push(idx); };
    })(i));
    $(div).append(newSpan);
  }
}

function blankOut(div, keepers) {
  for (var i = 0; i < words.length; i++) {
    if (keepers.indexOf(i) != -1) {
      continue;
    }
    $('#w'+i).css({'opacity': 0});
  }
}

$(function() {
  spanify('#text');
  $('#done').click(function() {
    console.log(toKeep);
  });
  window.setTimeout(function() {
    blankOut('#text', toKeep);
  }, 6000);
});
