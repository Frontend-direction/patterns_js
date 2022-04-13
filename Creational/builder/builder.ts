class Tag {
  static get indentSize() { return 2; };
  private children = [];

  constructor(
    public tagname: string = '',
    public text: string = '',
  ){
    this.tagname = tagname;
    this.text = text;
    this.children = [];
  }

  toStringImplementation(indent = Tag.indentSize) {
    const i = ' '.repeat(indent * Tag.indentSize);
    const html = [];
    html.push(`${i}<${this.tagname}>\n`);

    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent+1)));
      html.push(this.text);
      html.push('\n');
    }

    for(let child of this.children) {
      html.push(child.toStringImplementation(indent+1));
    }

    html.push(`${i}</${this.tagname}>\n`);
    return html.join('');
  }

  toString() {
    return this.toStringImplementation(0);
  }

}

class HTMLBuilder {
  private root;

  constructor(public rootName: string) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChildren(childTag = '', childText = '') {
    let child = new Tag(childTag, childText);
    this.root.children.push(child);
  }
  
  addChildrenFluent(childTag = '', childText = '') {
    let child = new Tag(childTag, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  build() {
    return this.toString();
  }
}
const words = ['Hello', 'words'];
/* OPTION 1 */
// const builder = new HTMLBuilder('ul');
// for(let word of words) {
//   builder.addChildren('li', word);
// }

// console.log(builder.build());

/* OPTION 2 */
const builder = new HTMLBuilder('ul');
const result = builder
  .addChildrenFluent('li', 'Vova')
  .addChildrenFluent('li', 'is')
  .addChildrenFluent('li', 'the')
  .addChildrenFluent('li', 'best')
  .build();
console.log(result);