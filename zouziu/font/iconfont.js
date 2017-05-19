;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche2" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M663.504333 840.851974c-50.506943 0-91.54752 40.963599-91.54752 91.678484 0 50.427965 41.041577 91.469542 91.54752 91.469542 50.47995 0 91.521528-41.041577 91.521528-91.469542C755.025861 881.815573 713.985283 840.851974 663.504333 840.851974z"  ></path>' +
    '' +
    '<path d="M248.396866 840.851974c-50.506943 0-91.546521 40.963599-91.546521 91.678484 0 50.427965 41.040578 91.469542 91.546521 91.469542 50.584921 0 91.495535-41.041577 91.495535-91.469542C339.893401 881.815573 298.981787 840.851974 248.396866 840.851974z"  ></path>' +
    '' +
    '<path d="M872.752095 0l-33.948551 156.107552L0.767786 156.107552 170.252615 774.257508l573.196468 0 127.061636-580.236508 33.583653-151.675786L1024.714801 42.345214 1024.714801 0 872.752095 0zM470.422072 198.401781l165.182026 0-18.174942 145.391535L470.422072 343.793315 470.422072 198.401781zM50.205027 198.401781l190.813893 0 10.664032 145.391535L90.098924 343.793315 50.205027 198.401781zM101.675702 386.111537l153.031408 0 9.100467 124.975217L135.88518 511.086754 101.675702 386.111537zM196.483315 731.939286 147.488951 553.379983l119.421762 0 12.984386 178.558304L196.483315 731.938287 196.483315 731.939286zM277.209847 198.401781l157.177254 0 0 145.391535L287.769908 343.793315 277.209847 198.401781zM434.387101 731.939286 316.087027 731.939286l-13.089357-178.558304 131.390431 0L434.388101 731.939286zM434.387101 511.086754 299.972512 511.086754l-9.100467-124.975217 143.515057 0L434.387101 511.086754zM569.140597 731.939286l-98.744517 0L470.396079 553.379983l120.985327 0L569.140597 731.939286zM470.422072 511.086754l0-124.975217 141.74155 0-15.514682 124.975217L470.422072 511.086754zM714.011276 731.939286 605.48848 731.939286l22.24081-178.558304 124.976217 0L714.011276 731.939286zM761.882952 511.086754 633.022817 511.086754l15.566667-124.975217 140.385928 0L761.882952 511.086754zM798.152858 343.792316 653.882011 343.792316l18.096963-145.391535 157.672117 0L798.152858 343.792316z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)