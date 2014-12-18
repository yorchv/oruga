/**
 * Oruga.js
 * Walk thru an array by steps
 *
 * @autor Jorge Vivas
 * @copyright Jorge Vivas
 * @license MIT: You are free to use and modify this code for any use,
 *          on the condition that this copyright notice remains.
 */

(function(window) {

  /**
   * DEFAULTS
   */
  var SIZE = 3,
    STEP = 1,
    ORIGIN = 0;

  window.Oruga = function(array, options) {
    var opts = options || {},

      /**
       * The amount of elements in the returned array
       * @type {Number}
       */
      size = opts.size || SIZE,

      /**
       * The amount of indexes to move on the next/prev step
       * @type {Number}
       */
      step = opts.step || STEP,

      /**
       * Where to start the selection
       * @type {Number}
       */
      origin = opts.origin || ORIGIN,

      nextOrigin = origin,
      nextEnd = origin + size,

      genesis = array.slice(0),
      cocoon = genesis.slice(nextOrigin, nextEnd),

      /**
       * gets the previous insert from the genesis
       * @return {Array || Null} slice if there is more to get, else returns null
       * @private
       */
      getPrevInsert = function getPrevInsert() {
        var start = nextOrigin - step,
          end = nextOrigin,
          slice;

        if (start >= 0) {
          slice = genesis.slice(nextOrigin - step , nextOrigin);

          nextOrigin = nextOrigin - step;
          nextEnd = nextEnd - step;

          return slice;
        } else {
          return null;
        }
      },

      /**
       * gets the next insert from the genesis
       * @return {Array || Null} slice if there is more to get, else returns null
       * @private
       */
      getNextInsert = function getNextInsert() {
        var start = nextEnd,
          end = nextEnd + step,
          slice;

        if (end <= genesis.length) {
          slice = genesis.slice(nextEnd, nextEnd + step);

          nextOrigin = nextOrigin + step;
          nextEnd = nextEnd + step;
          return slice;
        } else {
          return null;
        }
      },

      /**
       * Manipulates the cocoon to return its new state, adds one step at the end
       * and removes one at the begining
       * @return {Array} cocoon
       */
      next = function next() {
        var insert = getNextInsert();

        if (!insert) {
          return cocoon;
        }

        cocoon.splice(0, step);
        Array.prototype.push.apply(cocoon, insert);
        return cocoon;
      },

      /**
       * Manipulates the cocoon to return its new state, removes one step at the end
       * and adds one at the begining
       * @return {Array} cocoon
       */
      prev = function prev() {
        var insert = getPrevInsert();

        if (!insert) {
          return cocoon;
        }

        cocoon.splice(cocoon.length - step, step);
        Array.prototype.unshift.apply(cocoon, insert);

        return cocoon;
      },

      /**
       * Returns the current cocoon state
       * @return {Array} cocoon
       */
      get = function get() {
        return cocoon;
      };

    return {
      get: get,
      next: next,
      prev: prev
    }
  };

})(window);