'use strict';

window.addEventListener('DOMContentLoaded', function() {
  var banner = document.getElementById('lehenhitza');
  var type = banner.getAttribute('mota');
  var language = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
  var linkUrl = 'https://www.lehenhitza.eus' + ((language === 'eu') ? '' : '/konfiguratu');
  var imgUrl = 'https://www.lehenhitza.eus/img/banner' +
    ((language === 'eu') ? 'A' : 'B') +
    ((type === 'luzea') ? '_horizontala.gif' : '.gif');
  var imgAttributes = (language === 'eu') ?
    'title="Zorionak! Zure nabigatzaileak euskaraz ematen du lehen hitza" alt="Nabigatzailea euskaraz daukazula esaten duen irudia"' :
    'title="Konfiguratu" title="Ups! Dirudienez, ez zara ari euskaraz nabigatzen." alt="Nabigatzailea euskaraz ez daukazula esaten duen irudia"';
  banner.innerHTML = '<a href="' + linkUrl + '" target="_blank"><img src="' + imgUrl + '" ' + imgAttributes + ' /></a>';
}, false);
