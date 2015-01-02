var stringUtil = {};

(function(util) {
    util.Format = function() {
        var s = arguments[0];
        
        for (i = 1; i < arguments.length; i++) {
            s = util.ReplaceAll(s, '{' + (i - 1) + '}', arguments[i]);
        }
        
        return s;
    };
    
    util.ReplaceAll = function (source, target, replaceWith) {
        return source.split(target).join(replaceWith);
    };
    
    util.IsNullOrEmpty = function(value) {
        return !value;
    };
    
    util.Capitalize = function(source) {
        var lc = source.toLowerCase();
        return lc.replace( /(^|\s)([a-z])/g , function(m,p1,p2){return p1+p2.toUpperCase();});
    };
    
    util.ConvertJsonToDateTime = function(jsonDateTime) {
        var milli = jsonDateTime.replace(/\/Date\((-?\d+)\)\//, '$1');
        var date = new Date(parseInt(milli));
        return date;
    };
    
    util.Contains = function(source, target, isCaseSensitive) {
        return !!new RegExp(target, !isCaseSensitive ? "i" : "" + "g").test(source);
    };
    
    util.Remove = function(source, start, length) {
        var s = '';
        
        if (start > 0)
          s = source.substring(0, start);
      
        if (start + length < source.length)
          s += source.substring(start + length, source.length);
          
        return s;
    };
    
    util.Repeat = function (source, count) {
        return new Array( count + 1 ).join( source );
    };
    
    util.ReplaceAll = function(source, find, replace) {
        return source.split(find).join(replace);
    };
    
    util.ToCharArray = function(source) {
        return source.split('');
    };
    
    util.ToWordArray = function(source) {
        return source.split(' ');
    };
    
    util.Trim = function (source) {
        return source.replace(/^\s+|\s+$/g, "");
    };
    
    util.TrimLeft = function(source) {
        return source.replace(/^\s+/, "");
    };
    
    util.TrimRight = function(source) {
        return source.replace(/\s+$/, '');
    };
    
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
    
    util.Unhighlight = function(text, tag) {
      // Default tag if no tag is provided
      tag = tag || 'span';
      var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
      return text.replace(re, '');
    };
}(stringUtil));