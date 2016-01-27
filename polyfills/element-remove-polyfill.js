(function() {

    // PhantomJS doesn't support Element.prototype.remove natively, so polyfill it whenever this module is required.

    if (typeof Element !== 'undefined' && !('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
})();
