var stringUtil = {};

(function(util) {
    /**
     * @return {string}
     */
    util.Format = function() {
        var s = arguments[0];
        
        for (i = 1; i < arguments.length; i++) {
            s = util.ReplaceAll(s, '{' + (i - 1) + '}', arguments[i]);
        }
        
        return s;
    };

    /**
     * @return {string}
     */
    util.ReplaceAll = function (source, target, replaceWith) {
        return source.split(target).join(replaceWith);
    };

    /**
     * @return {string}
     */
    util.IsNullOrEmpty = function(value) {
        return !value;
    };

    /**
     * @return {string}
     */
    util.Capitalize = function(source) {
        var lc = source.toLowerCase();
        return lc.replace( /(^|\s)([a-z])/g , function(m,p1,p2){return p1+p2.toUpperCase();});
    };

    /**
     * @return {string}
     */
    util.ConvertJsonToDateTime = function(jsonDateTime) {
        var milli = jsonDateTime.replace(/\/Date\((-?\d+)\)\//, '$1');
        var date = new Date(parseInt(milli));
        return date;
    };

    /**
     * @return {string}
     */
    util.Contains = function(source, target, isCaseSensitive) {
        return !!new RegExp(target, !isCaseSensitive ? "i" : "" + "g").test(source);
    };

    /**
     * @return {string}
     */
    util.Remove = function(source, start, length) {
        var s = '';
        
        if (start > 0)
          s = source.substring(0, start);
      
        if (start + length < source.length)
          s += source.substring(start + length, source.length);
          
        return s;
    };

    /**
     * @return {string}
     */
    util.Repeat = function (source, count) {
        return new Array( count + 1 ).join( source );
    };

    /**
     * @return {string}
     */
    util.ReplaceAll = function(source, find, replace) {
        return source.split(find).join(replace);
    };

    /**
     * @return {Array.<string>}
     */
    util.ToCharArray = function(source) {
        return source.split('');
    };

    /**
     * @return {Array.<string>}
     */
    util.ToWordArray = function(source) {
        return source.split(' ');
    };

    /**
     * @return {string}
     */
    util.Trim = function (source) {
        return source.replace(/^\s+|\s+$/g, "");
    };

    /**
     * @return {string}
     */
    util.TrimLeft = function(source) {
        return source.replace(/^\s+/, "");
    };

    /**
     * @return {string}
     */
    util.TrimRight = function(source) {
        return source.replace(/\s+$/, '');
    };

    /**
     * @return {string}
     */
    util.Highlight = function(text, words, tag) {
      // Default tag if no tag is provided
      tag = tag || 'span';
     
      var i;
      var len = words.length;
      var re;
      for (i = 0; i < len; i++) {
        // Global regex to highlight all matches
        re = new RegExp(words[i], 'g');
        if (re.test(text)) {
          text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
        }
      }
     
      return text;
    };

    /**
     * @return {string}
     */
    util.Unhighlight = function(text, tag) {
      // Default tag if no tag is provided
      tag = tag || 'span';
      var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
      return text.replace(re, '');
    };
}(stringUtil));