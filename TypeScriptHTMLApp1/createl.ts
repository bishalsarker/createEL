//Tools
class ElementCreator {
    //Heading( h1,h2,h3,h4,h5,h6)
    Heading(obj: {      
        size: number,
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("h1");
        }
        else {
            var heading = new Heading(
                obj.size,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            heading.create();

            if (obj.action != null) {
                heading.addAction(obj.action.event, obj.action.method);
            }
            return heading.get();
        }    
    }

    //Div
    Div(obj: {        
        size: number,
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("div");
        }
        else {         
            var div = new Div(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();          
        }
    }

    //Button
    Button(obj: {
            type: string,
            text: string,
            id: string,
            class: string,
            parent: HTMLElement
            action: {
                event: string,
                method: () => void
            }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("button");
        }
        else {
            var btn = new Button(
                obj.type,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            btn.create();

            if (obj.action != null) {
                btn.addAction(obj.action.event, obj.action.method);
            }
            return btn.get();
        }
    }

    //Input
    Input(obj: {
            type: string,
            text: string,
            id: string,
            class: string,
            value: string,
            placeholder: string,
            name: string,
            parent: HTMLElement
            action: {
                event: string,
                method: () => void
            }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("input");
        }
        else {
                var input = new Input(
                    obj.type,
                    obj.value,
                    obj.placeholder,
                    obj.name,
                    obj.id,
                    obj.class,
                    obj.text,
                    obj.parent
                );
                input.create();

                if (obj.action != null) {
                    input.addAction(obj.action.event, obj.action.method);
                }
                return input.get();
        }
    }

    //Paragraph
    Paragraph(obj: {
            text: string,
            id: string,
            class: string,
            parent: HTMLElement
            action: {
                event: string,
                method: () => void
            }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("p");
        }
        else {
            var para = new Paragraph(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            para.create();

            if (obj.action != null) {
                para.addAction(obj.action.event, obj.action.method);
            }
            return para.get();
        }
    }

    //Span
    Span(obj: {
            text: string,
            id: string,
            class: string,
            parent: HTMLElement
            action: {
                event: string,
                method: () => void
            }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("span");
        }
        else {
            var span = new Span(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            span.create();

            if (obj.action != null) {
                span.addAction(obj.action.event, obj.action.method);
            }
            return span.get();
        }
    }

    //Linebreak
    Br(): HTMLElement {
        var br = document.createElement("br");
        return br;
    }

    BrTo(parent: HTMLElement): void {
        var br = document.createElement("br");
        parent.appendChild(br);
    }

    //Link (<a>)
    Link(obj: {
            href: string,
            text: string,
            id: string,
            class: string,
            parent: HTMLElement
            action: {
                event: string,
                method: () => void
            }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("a");
        }
        else {
            var link = new Link(
                obj.href,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            link.create();

            if (obj.action != null) {
                link.addAction(obj.action.event, obj.action.method);
            }
            return link.get();
        }
    }

    //Img
    Img(obj: {
        src: string,
        height: string,
        width: string,
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("img");
        }
        else {
            var img = new Img(
                obj.src,
                obj.height,
                obj.width,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            img.create();

            if (obj.action != null) {
                img.addAction(obj.action.event, obj.action.method);
            }
            return img.get();
        }
    }

    //List
    List(obj: {
        type: string,
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("ul");
        }
        else {
            var list = new List(
                obj.type,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            list.create();

            if (obj.action != null) {
                list.addAction(obj.action.event, obj.action.method);
            }
            return list.get();
        }
    }

    //List Item
    ListItem(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("li");
        }
        else {
            var listItem = new ListItem(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            listItem.create();

            if (obj.action != null) {
                listItem.addAction(obj.action.event, obj.action.method);
            }
            return listItem.get();
        }
    }

    //Table
    Table(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("table");
        }
        else {
            var table = new Table(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            table.create();

            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    }

    //Table Row
    Tr(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("tr");
        }
        else {
            var table = new TableRow(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            table.create();

            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    }

    //Table Data
    Td(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("td");
        }
        else {
            var table = new TableData(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            table.create();

            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    }

    //Form
    Form(obj: {
        actionLink: string,
        formMethod: string,
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("form");
        }
        else {
            var form = new Form(
                obj.actionLink,
                obj.formMethod,
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            form.create();

            if (obj.action != null) {
                form.addAction(obj.action.event, obj.action.method);
            }
            return form.get();
        }
    }

    //Bold
    Bold(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("b");
        }
        else {
            var el = new Bold(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            el.create();

            if (obj.action != null) {
                el.addAction(obj.action.event, obj.action.method);
            }
            return el.get();
        }
    }

    //Italic
    Italic(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("i");
        }
        else {
            var el = new Italic(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            el.create();

            if (obj.action != null) {
                el.addAction(obj.action.event, obj.action.method);
            }
            return el.get();
        }
    }

    //Nav
    Nav(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("nav");
        }
        else {
            var div = new Nav(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();
        }
    }

    //Footer
    Footer(obj: {
        text: string,
        id: string,
        class: string,
        parent: HTMLElement
        action: {
            event: string,
            method: () => void
        }
    }): HTMLElement {
        if (obj == null) {
            return document.createElement("footer");
        }
        else {
            var div = new Footer(
                obj.id,
                obj.class,
                obj.text,
                obj.parent
            );
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();
        }
    }
}
class Selector {
    Id(id: string): Id {
        return new Id(id);
    }
    Elmnt(e: HTMLElement): Elmnt {
        return new Elmnt(e);
    }

}
class Registrer {
    private element: HTMLElement;
    constructor(e: HTMLElement) {
        this.element = e;
    }
    register(): void {
        document.body.appendChild(this.element);
    }
}


//Element Classes
class El {
    private element: HTMLElement;
    private id: string;
    private class: string;
    private text: string;
    private parent: HTMLElement;

    constructor(i: string, c: string, t: string, p: HTMLElement) {
        this.id = i;
        this.class = c;
        this.text = t;
        this.parent = p;
    }

    create(): void { }
    addAction(event: string, action: () => void) { }
    get() { }

    setElement(el: HTMLElement): void {
        this.element = el;
    }

    getElement(): HTMLElement {
        return this.element;
    }

    assignId(): void {
        if (this.id != null) {
            this.element.setAttribute("id", this.id);
        }
    }

    assignClass(): void {
        if (this.class != null) {
            this.element.setAttribute("class", this.class);
        }
    }

    insertText(): void {
        if (this.text != null) {
            var txt = document.createTextNode(this.text);
            this.element.appendChild(txt);
        }
    }

    setParent(): void {
        if (this.parent != null) {
            this.parent.appendChild(this.element);
        }
    }
}
class Heading extends El {
    private size: number;
    private htmlEl: HTMLElement;
    constructor(s: number, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.size = s;
    }

    create(): void {
        var el = document.createElement(this.assignSize());
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    private assignSize(): string {
        var size = this.size;
        var h: string;
        if (size == 1 || size == 2 || size == 3 || size == 4 || size == 5 || size == 6) {
            var h: string;
            switch (size) {
                case 1:
                    h = "h1";
                    break;
                case 2:
                    h = "h2";
                    break;
                case 3:
                    h = "h3";
                    break;
                case 4:
                    h = "h4";
                    break;
                case 5:
                    h = "h5";
                    break;
                case 6:
                    h = "h6";
                    break;
            }
        }
        else {
            h = "h1";
        }
        return h;
    }
}
class Div extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("div");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Button extends El {
    private type: string;
    private htmlEl: HTMLElement;
    constructor(type: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.type = type;
    }

    create(): void {
        var el = document.createElement("button");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignType();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    assignType(): void {
        if (this.type != null) {
            this.htmlEl.setAttribute("type", this.type);
        }
    }
}
class Input extends El {
    private type: string;
    private value: string;
    private name: string;
    private placeholder: string;
    private htmlEl: HTMLElement;
    constructor(ty: string, v: string, pl: string, n: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.type = ty;
        this.value = v;
        this.placeholder = pl;
        this.name = n;
    }

    create(): void {
        var el = document.createElement("INPUT");
        this.htmlEl = el;
        this.assignInputAttr();
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    assignInputAttr(): void {
        if (this.type != null) {
            this.htmlEl.setAttribute("type", this.type);
        }
        if (this.value != null) {
            this.htmlEl.setAttribute("value", this.value);
        }
        if (this.placeholder != null) {
            this.htmlEl.setAttribute("placeholder", this.placeholder);
        }
        if (this.name != null) {
            this.htmlEl.setAttribute("name", this.name);
        }
    }
}
class Paragraph extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);       
    }

    create(): void {
        var el = document.createElement("p");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Span extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("span");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Link extends El {
    private href: string;
    private htmlEl: HTMLElement;
    constructor(href: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.href = href;
    }

    create(): void {
        var el = document.createElement("a");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignHref();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    private assignHref(): void {
        if (this.href != null) {
            this.htmlEl.setAttribute("href", this.href);
        }
    }
}
class Img extends El {
    private src: string;
    private height: string;
    private width: string;
    private htmlEl: HTMLElement;
    constructor(src: string,h: string, w: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.src = src;
        this.height = h;
        this.width = w;
    }

    create(): void {
        var el = document.createElement("img");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignImgAttr();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    private assignImgAttr(): void {
        if (this.src != null) {
            this.htmlEl.setAttribute("src", this.src);
        }
        if (this.height != null) {
            this.htmlEl.setAttribute("height", this.height);
        }
        if (this.width != null) {
            this.htmlEl.setAttribute("width", this.width);
        }
    }
}
class List extends El {
    private type: string;
    private htmlEl: HTMLElement;
    constructor(type: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.type = type;
    }

    create(): void {
        var el = document.createElement(this.assignType());
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    assignType(): string {
        var type: string;
        if (this.type != "ol" || this.type != "ul") {
            type = "ul";
        }
        return type;
    }
}
class ListItem extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("li");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Table extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("table");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class TableRow extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("tr");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class TableData extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("td");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Form extends El {
    private actionLink: string;
    private formMethod: string;
    private htmlEl: HTMLElement;
    constructor(l: string, m: string, i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
        this.actionLink = l;
        this.formMethod = m;
    }

    create(): void {
        var el = document.createElement("form");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.addFormAttr();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }

    addFormAttr() {
        if (this.actionLink != null) {
            this.htmlEl.setAttribute("action", this.actionLink);
        }
        if (this.formMethod != null) {
            this.htmlEl.setAttribute("method", this.formMethod);
        }
    }
}
class Bold extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("b");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Italic extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("i");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Nav extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("nav");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}
class Footer extends El {
    private htmlEl: HTMLElement;
    constructor(i: string, c: string, t: string, p: HTMLElement) {
        super(i, c, t, p);
    }

    create(): void {
        var el = document.createElement("footer");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    }

    get(): HTMLElement {
        return this.htmlEl;
    }

    addAction(event: string, action: () => void) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    }
}


//Selector Classes
class Activity {
    element: HTMLElement;
    constructor(e: HTMLElement) {
        this.element = e;
    }

    addAction(event: string, func: () => void) {
        this.element.addEventListener(event, function () {
        func();
        });
    }

    setText(txt: string) {
        this.element.innerHTML = txt;
    }

    getText(txt: string): string {
        return this.element.innerHTML;
    }

    setAttr(attrName: string, attrValue: string) {
        this.element.setAttribute(attrName, attrValue);
    }

    getAttrValue(attrName: string): string {
        return this.element.getAttribute(attrName);
    }

    addElement(e: HTMLElement) {
        this.element.appendChild(e);
    }

    getValue(): string {
        var id = this.element.getAttribute("id");
        if (id == null || id == "") {
            this.element.setAttribute("id", "tempId");
            var newId = this.element.getAttribute("id");
            var val = (<HTMLInputElement>document.getElementById(newId)).value;
            this.element.removeAttribute("id");
        }
        else {
            var val = (<HTMLInputElement>document.getElementById(id)).value;
        }
        return val;
    }
}
class Id extends Activity {
    constructor(id: string) {
        var element = document.getElementById(id);
        super(element);
    }
}
class Elmnt extends Activity {
    constructor(e: HTMLElement) {
        super(e);
    }
}

//Selectors
var create = new ElementCreator();
var register = function (parent) {
    var el = new Registrer(parent);
    el.register();
}
var select = {
    id: function (id) {
        var el = new Selector();
        return el.Id(id);
    },
    el: function (element) {
        var el = new Selector();
        return el.Elmnt(element);
    }
}
