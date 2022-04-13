var Tag = /** @class */ (function () {
    function Tag(tagname, text) {
        if (tagname === void 0) { tagname = ''; }
        if (text === void 0) { text = ''; }
        this.tagname = tagname;
        this.text = text;
        this.children = [];
        this.tagname = tagname;
        this.text = text;
        this.children = [];
    }
    Object.defineProperty(Tag, "indentSize", {
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    ;
    Tag.prototype.toStringImplementation = function (indent) {
        if (indent === void 0) { indent = Tag.indentSize; }
        var i = ' '.repeat(indent * Tag.indentSize);
        var html = [];
        html.push("".concat(i, "<").concat(this.tagname, ">\n"));
        if (this.text.length > 0) {
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            html.push(child.toStringImplementation(indent + 1));
        }
        html.push("".concat(i, "</").concat(this.tagname, ">\n"));
        return html.join('');
    };
    Tag.prototype.toString = function () {
        return this.toStringImplementation(0);
    };
    return Tag;
}());
var HTMLBuilder = /** @class */ (function () {
    function HTMLBuilder(rootName) {
        this.rootName = rootName;
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }
    HTMLBuilder.prototype.addChildren = function (childTag, childText) {
        if (childTag === void 0) { childTag = ''; }
        if (childText === void 0) { childText = ''; }
        var child = new Tag(childTag, childText);
        this.root.children.push(child);
    };
    HTMLBuilder.prototype.addChildrenFluent = function (childTag, childText) {
        if (childTag === void 0) { childTag = ''; }
        if (childText === void 0) { childText = ''; }
        var child = new Tag(childTag, childText);
        this.root.children.push(child);
        return this;
    };
    HTMLBuilder.prototype.toString = function () {
        return this.root.toString();
    };
    HTMLBuilder.prototype.build = function () {
        return this.toString();
    };
    return HTMLBuilder;
}());
var words = ['Hello', 'words'];
/* OPTION 1 */
// const builder = new HTMLBuilder('ul');
// for(let word of words) {
//   builder.addChildren('li', word);
// }
// console.log(builder.build());
/* OPTION 2 */
var builder = new HTMLBuilder('ul');
var result = builder
    .addChildrenFluent('li', 'Vova')
    .addChildrenFluent('li', 'is')
    .addChildrenFluent('li', 'the')
    .addChildrenFluent('li', 'best')
    .build();
console.log(result);
