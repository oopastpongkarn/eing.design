// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
(function (l) {
  if (l.search) {
    var q = {};
    l.search.slice(1).split('&').forEach(function (v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + (q.p || '') +
        (q.q ? ('?' + q.q) : '') +
        l.hash
      );
    }
  }
}(window.location));


(function (history, window) {
  // intercept internal links
  var handleNavigation = function (e) {
    e.preventDefault();
    alert("click handled");

    var href = this.href;
    history.pushState({}, undefined, href);
    handleRouteChange();
  };
  $(document).ready(function () {
    $("a[href^='/']").bind(handleNavigation);
  });


  // respond to current route and route changes
  var handleRouteChange = function () {
    var currentRoute = location.pathname;
    switch (currentRoute) {
      case "/works":
        alert("switching to works!");
        break;
    }
  };

  window.onpopstate = function (event) {
    handleRouteChange();
  }

  // handle the current route now
  handleRouteChange();

})(window.history, window);