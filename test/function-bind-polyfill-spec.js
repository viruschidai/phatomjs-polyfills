describe('Function.prototype.bind', function () {
    describe('A function', function() {
        it('should be able to bind', function () {
            var context = {
                'value': 'test context'
            }
            var testFn = function() {
                expect(this.value).toBe('test context');
            }
            var bindFunction = testFn.bind(context);
            bindFunction();
        });
    });
});
