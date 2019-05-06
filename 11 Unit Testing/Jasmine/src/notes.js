describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });
    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should ignore notes containing only whitespace', function() {
        expect(notes.add('   ')).toBe(false);
        expect(notes.count()).toBe(5);
        //pending();
    });
    it('should require a string parameter', function() {
        expect(notes.add()).toBe(false);
        expect(notes.count()).toBe(5);
        //pending();
    });
    it('should be able to find a note', function() {
        expect(notes.add('aaaa')).toBe(true);
        expect(notes.find('aaaa')).toBe(true);
        //pending();
    });
    it('should remove the note', function() {
        expect(notes.remove(1)).toBe(true);
        expect(notes.find('first note')).toBe(true);
        //pending();
    });
});

var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note && note != '   ') {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(i) {
            if (i <= list.length){
                list.splice(i);
                return true;
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            for (var i = 0 ; i <list.length ; i++) {
                if (list[i].text == str){
                    return true;
                }
            }
            return false;
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());
