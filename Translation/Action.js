var Action = function() {};

Action.prototype = {
    
    run: function(arguments) {
        arguments.completionFunction({ "outerHTML" : document.documentElement.outerHTML, "title": document.title, "URL": document.URL })
    },
    
    finalize: function(arguments) {}
    
//    selectedHTML: function() {
//        var range;
//        if (document.selection && document.selection.createRange) {
//            range = document.selection.createRange();
//            return range.htmlText;
//        } else if (window.getSelection) {
//            var selection = window.getSelection();
//            if (selection.rangeCount > 0) {
//                range = selection.getRangeAt(0);
//                var clonedSelection = range.cloneContents();
//                var div = document.createElement('div');
//                div.appendChild(clonedSelection);
//                return div.innerHTML;
//            } else {
//                return '';
//            }
//        } else {
//            return '';
//        }
//    }

};
    
var ExtensionPreprocessingJS = new Action
