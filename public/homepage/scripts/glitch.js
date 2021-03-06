/* globals $: true */

var $ = require("jquery");

module.exports = {
  init: function() {
    let banner = $(".glitch-banner");
    let cta = $(".glitch-cta.underlay");
    if (banner && cta) {
      var close = $(".glitch-cta .cta-close");
      close.click(() => {
        banner.removeClass("hidden");
        cta.addClass("hidden");
      });
      cta.removeClass("hidden");
    }
  }
};
