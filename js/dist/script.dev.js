"use strict";

var settings = {
  delay: 0,
  url: 'https://www.youtube.com/youtubei/v1/log_event?alt=json&key=%random%'
};

var activate = function activate() {
  setInterval(function _callee() {
    var random, el, url, requests;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            random = (Math.random() * 10 * Math.PI).toString();
            el = document.getElementById('requests');
            url = settings.url.replace('%random%', random);
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch(url));

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            requests = parseInt(el.innerHTML);
            el.innerHTML = requests + 1;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 8]]);
  }, settings.delay);
};