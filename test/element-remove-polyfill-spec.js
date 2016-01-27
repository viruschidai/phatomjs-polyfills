describe('Element.prototype.remove', function () {
    describe('A element', function() {
        it('should be able to remove itself', function () {
            var el = document.createElement('div');
            el.id = 'testId';
            document.body.appendChild(el);
            el.remove();
            expect(document.getElementById('testId')).toBeNull;
        });
    });
});
