var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ElementCreator = (function () {
    function ElementCreator() {
    }
    ElementCreator.prototype.Heading = function (obj) {
        if (obj == null) {
            return document.createElement("h1");
        }
        else {
            var heading = new Heading(obj.size, obj.id, obj.class, obj.text, obj.parent);
            heading.create();
            if (obj.action != null) {
                heading.addAction(obj.action.event, obj.action.method);
            }
            return heading.get();
        }
    };
    ElementCreator.prototype.Div = function (obj) {
        if (obj == null) {
            return document.createElement("div");
        }
        else {
            var div = new Div(obj.id, obj.class, obj.text, obj.parent);
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();
        }
    };
    ElementCreator.prototype.Button = function (obj) {
        if (obj == null) {
            return document.createElement("button");
        }
        else {
            var btn = new Button(obj.type, obj.id, obj.class, obj.text, obj.parent);
            btn.create();
            if (obj.action != null) {
                btn.addAction(obj.action.event, obj.action.method);
            }
            return btn.get();
        }
    };
    ElementCreator.prototype.Input = function (obj) {
        if (obj == null) {
            return document.createElement("input");
        }
        else {
            var input = new Input(obj.type, obj.value, obj.placeholder, obj.name, obj.id, obj.class, obj.text, obj.parent);
            input.create();
            if (obj.action != null) {
                input.addAction(obj.action.event, obj.action.method);
            }
            return input.get();
        }
    };
    ElementCreator.prototype.Paragraph = function (obj) {
        if (obj == null) {
            return document.createElement("p");
        }
        else {
            var para = new Paragraph(obj.id, obj.class, obj.text, obj.parent);
            para.create();
            if (obj.action != null) {
                para.addAction(obj.action.event, obj.action.method);
            }
            return para.get();
        }
    };
    ElementCreator.prototype.Span = function (obj) {
        if (obj == null) {
            return document.createElement("span");
        }
        else {
            var span = new Span(obj.id, obj.class, obj.text, obj.parent);
            span.create();
            if (obj.action != null) {
                span.addAction(obj.action.event, obj.action.method);
            }
            return span.get();
        }
    };
    ElementCreator.prototype.Br = function () {
        var br = document.createElement("br");
        return br;
    };
    ElementCreator.prototype.BrTo = function (parent) {
        var br = document.createElement("br");
        parent.appendChild(br);
    };
    ElementCreator.prototype.Link = function (obj) {
        if (obj == null) {
            return document.createElement("a");
        }
        else {
            var link = new Link(obj.href, obj.id, obj.class, obj.text, obj.parent);
            link.create();
            if (obj.action != null) {
                link.addAction(obj.action.event, obj.action.method);
            }
            return link.get();
        }
    };
    ElementCreator.prototype.Img = function (obj) {
        if (obj == null) {
            return document.createElement("img");
        }
        else {
            var img = new Img(obj.src, obj.height, obj.width, obj.id, obj.class, obj.text, obj.parent);
            img.create();
            if (obj.action != null) {
                img.addAction(obj.action.event, obj.action.method);
            }
            return img.get();
        }
    };
    ElementCreator.prototype.List = function (obj) {
        if (obj == null) {
            return document.createElement("ul");
        }
        else {
            var list = new List(obj.type, obj.id, obj.class, obj.text, obj.parent);
            list.create();
            if (obj.action != null) {
                list.addAction(obj.action.event, obj.action.method);
            }
            return list.get();
        }
    };
    ElementCreator.prototype.ListItem = function (obj) {
        if (obj == null) {
            return document.createElement("li");
        }
        else {
            var listItem = new ListItem(obj.id, obj.class, obj.text, obj.parent);
            listItem.create();
            if (obj.action != null) {
                listItem.addAction(obj.action.event, obj.action.method);
            }
            return listItem.get();
        }
    };
    ElementCreator.prototype.Table = function (obj) {
        if (obj == null) {
            return document.createElement("table");
        }
        else {
            var table = new Table(obj.id, obj.class, obj.text, obj.parent);
            table.create();
            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    };
    ElementCreator.prototype.Tr = function (obj) {
        if (obj == null) {
            return document.createElement("tr");
        }
        else {
            var table = new TableRow(obj.id, obj.class, obj.text, obj.parent);
            table.create();
            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    };
    ElementCreator.prototype.Td = function (obj) {
        if (obj == null) {
            return document.createElement("td");
        }
        else {
            var table = new TableData(obj.id, obj.class, obj.text, obj.parent);
            table.create();
            if (obj.action != null) {
                table.addAction(obj.action.event, obj.action.method);
            }
            return table.get();
        }
    };
    ElementCreator.prototype.Form = function (obj) {
        if (obj == null) {
            return document.createElement("form");
        }
        else {
            var form = new Form(obj.actionLink, obj.formMethod, obj.id, obj.class, obj.text, obj.parent);
            form.create();
            if (obj.action != null) {
                form.addAction(obj.action.event, obj.action.method);
            }
            return form.get();
        }
    };
    ElementCreator.prototype.Bold = function (obj) {
        if (obj == null) {
            return document.createElement("b");
        }
        else {
            var el = new Bold(obj.id, obj.class, obj.text, obj.parent);
            el.create();
            if (obj.action != null) {
                el.addAction(obj.action.event, obj.action.method);
            }
            return el.get();
        }
    };
    ElementCreator.prototype.Italic = function (obj) {
        if (obj == null) {
            return document.createElement("i");
        }
        else {
            var el = new Italic(obj.id, obj.class, obj.text, obj.parent);
            el.create();
            if (obj.action != null) {
                el.addAction(obj.action.event, obj.action.method);
            }
            return el.get();
        }
    };
    ElementCreator.prototype.Nav = function (obj) {
        if (obj == null) {
            return document.createElement("nav");
        }
        else {
            var div = new Nav(obj.id, obj.class, obj.text, obj.parent);
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();
        }
    };
    ElementCreator.prototype.Footer = function (obj) {
        if (obj == null) {
            return document.createElement("footer");
        }
        else {
            var div = new Footer(obj.id, obj.class, obj.text, obj.parent);
            div.create();
            if (obj.action != null) {
                div.addAction(obj.action.event, obj.action.method);
            }
            return div.get();
        }
    };
    return ElementCreator;
}());
var Selector = (function () {
    function Selector() {
    }
    Selector.prototype.Id = function (id) {
        return new Id(id);
    };
    Selector.prototype.Elmnt = function (e) {
        return new Elmnt(e);
    };
    return Selector;
}());
var Registrer = (function () {
    function Registrer(e) {
        this.element = e;
    }
    Registrer.prototype.register = function () {
        document.body.appendChild(this.element);
    };
    return Registrer;
}());
var El = (function () {
    function El(i, c, t, p) {
        this.id = i;
        this.class = c;
        this.text = t;
        this.parent = p;
    }
    El.prototype.create = function () { };
    El.prototype.addAction = function (event, action) { };
    El.prototype.get = function () { };
    El.prototype.setElement = function (el) {
        this.element = el;
    };
    El.prototype.getElement = function () {
        return this.element;
    };
    El.prototype.assignId = function () {
        if (this.id != null) {
            this.element.setAttribute("id", this.id);
        }
    };
    El.prototype.assignClass = function () {
        if (this.class != null) {
            this.element.setAttribute("class", this.class);
        }
    };
    El.prototype.insertText = function () {
        if (this.text != null) {
            var txt = document.createTextNode(this.text);
            this.element.appendChild(txt);
        }
    };
    El.prototype.setParent = function () {
        if (this.parent != null) {
            this.parent.appendChild(this.element);
        }
    };
    return El;
}());
var Heading = (function (_super) {
    __extends(Heading, _super);
    function Heading(s, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.size = s;
    }
    Heading.prototype.create = function () {
        var el = document.createElement(this.assignSize());
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Heading.prototype.get = function () {
        return this.htmlEl;
    };
    Heading.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Heading.prototype.assignSize = function () {
        var size = this.size;
        var h;
        if (size == 1 || size == 2 || size == 3 || size == 4 || size == 5 || size == 6) {
            var h;
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
    };
    return Heading;
}(El));
var Div = (function (_super) {
    __extends(Div, _super);
    function Div(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Div.prototype.create = function () {
        var el = document.createElement("div");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Div.prototype.get = function () {
        return this.htmlEl;
    };
    Div.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Div;
}(El));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(type, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.type = type;
    }
    Button.prototype.create = function () {
        var el = document.createElement("button");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignType();
    };
    Button.prototype.get = function () {
        return this.htmlEl;
    };
    Button.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Button.prototype.assignType = function () {
        if (this.type != null) {
            this.htmlEl.setAttribute("type", this.type);
        }
    };
    return Button;
}(El));
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(ty, v, pl, n, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.type = ty;
        this.value = v;
        this.placeholder = pl;
        this.name = n;
    }
    Input.prototype.create = function () {
        var el = document.createElement("INPUT");
        this.htmlEl = el;
        this.assignInputAttr();
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Input.prototype.get = function () {
        return this.htmlEl;
    };
    Input.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Input.prototype.assignInputAttr = function () {
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
    };
    return Input;
}(El));
var Paragraph = (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Paragraph.prototype.create = function () {
        var el = document.createElement("p");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Paragraph.prototype.get = function () {
        return this.htmlEl;
    };
    Paragraph.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Paragraph;
}(El));
var Span = (function (_super) {
    __extends(Span, _super);
    function Span(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Span.prototype.create = function () {
        var el = document.createElement("span");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Span.prototype.get = function () {
        return this.htmlEl;
    };
    Span.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Span;
}(El));
var Link = (function (_super) {
    __extends(Link, _super);
    function Link(href, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.href = href;
    }
    Link.prototype.create = function () {
        var el = document.createElement("a");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignHref();
    };
    Link.prototype.get = function () {
        return this.htmlEl;
    };
    Link.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Link.prototype.assignHref = function () {
        if (this.href != null) {
            this.htmlEl.setAttribute("href", this.href);
        }
    };
    return Link;
}(El));
var Img = (function (_super) {
    __extends(Img, _super);
    function Img(src, h, w, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.src = src;
        this.height = h;
        this.width = w;
    }
    Img.prototype.create = function () {
        var el = document.createElement("img");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.assignImgAttr();
    };
    Img.prototype.get = function () {
        return this.htmlEl;
    };
    Img.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Img.prototype.assignImgAttr = function () {
        if (this.src != null) {
            this.htmlEl.setAttribute("src", this.src);
        }
        if (this.height != null) {
            this.htmlEl.setAttribute("height", this.height);
        }
        if (this.width != null) {
            this.htmlEl.setAttribute("width", this.width);
        }
    };
    return Img;
}(El));
var List = (function (_super) {
    __extends(List, _super);
    function List(type, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.type = type;
    }
    List.prototype.create = function () {
        var el = document.createElement(this.assignType());
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    List.prototype.get = function () {
        return this.htmlEl;
    };
    List.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    List.prototype.assignType = function () {
        var type;
        if (this.type != "ol" || this.type != "ul") {
            type = "ul";
        }
        return type;
    };
    return List;
}(El));
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    ListItem.prototype.create = function () {
        var el = document.createElement("li");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    ListItem.prototype.get = function () {
        return this.htmlEl;
    };
    ListItem.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return ListItem;
}(El));
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Table.prototype.create = function () {
        var el = document.createElement("table");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Table.prototype.get = function () {
        return this.htmlEl;
    };
    Table.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Table;
}(El));
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    TableRow.prototype.create = function () {
        var el = document.createElement("tr");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    TableRow.prototype.get = function () {
        return this.htmlEl;
    };
    TableRow.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return TableRow;
}(El));
var TableData = (function (_super) {
    __extends(TableData, _super);
    function TableData(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    TableData.prototype.create = function () {
        var el = document.createElement("td");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    TableData.prototype.get = function () {
        return this.htmlEl;
    };
    TableData.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return TableData;
}(El));
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(l, m, i, c, t, p) {
        _super.call(this, i, c, t, p);
        this.actionLink = l;
        this.formMethod = m;
    }
    Form.prototype.create = function () {
        var el = document.createElement("form");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
        this.addFormAttr();
    };
    Form.prototype.get = function () {
        return this.htmlEl;
    };
    Form.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    Form.prototype.addFormAttr = function () {
        if (this.actionLink != null) {
            this.htmlEl.setAttribute("action", this.actionLink);
        }
        if (this.formMethod != null) {
            this.htmlEl.setAttribute("method", this.formMethod);
        }
    };
    return Form;
}(El));
var Bold = (function (_super) {
    __extends(Bold, _super);
    function Bold(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Bold.prototype.create = function () {
        var el = document.createElement("b");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Bold.prototype.get = function () {
        return this.htmlEl;
    };
    Bold.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Bold;
}(El));
var Italic = (function (_super) {
    __extends(Italic, _super);
    function Italic(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Italic.prototype.create = function () {
        var el = document.createElement("i");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Italic.prototype.get = function () {
        return this.htmlEl;
    };
    Italic.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Italic;
}(El));
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Nav.prototype.create = function () {
        var el = document.createElement("nav");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Nav.prototype.get = function () {
        return this.htmlEl;
    };
    Nav.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Nav;
}(El));
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer(i, c, t, p) {
        _super.call(this, i, c, t, p);
    }
    Footer.prototype.create = function () {
        var el = document.createElement("footer");
        this.setElement(el);
        this.assignId();
        this.assignClass();
        this.insertText();
        this.setParent();
        this.htmlEl = this.getElement();
    };
    Footer.prototype.get = function () {
        return this.htmlEl;
    };
    Footer.prototype.addAction = function (event, action) {
        if (event != null && typeof (action) == 'function') {
            this.htmlEl.addEventListener(event, function () { action(); });
        }
    };
    return Footer;
}(El));
var Activity = (function () {
    function Activity(e) {
        this.element = e;
    }
    Activity.prototype.addAction = function (event, func) {
        this.element.addEventListener(event, function () {
            func();
        });
    };
    Activity.prototype.setText = function (txt) {
        this.element.innerHTML = txt;
    };
    Activity.prototype.getText = function (txt) {
        return this.element.innerHTML;
    };
    Activity.prototype.setAttr = function (attrName, attrValue) {
        this.element.setAttribute(attrName, attrValue);
    };
    Activity.prototype.getAttrValue = function (attrName) {
        return this.element.getAttribute(attrName);
    };
    Activity.prototype.addElement = function (e) {
        this.element.appendChild(e);
    };
    Activity.prototype.getValue = function () {
        var id = this.element.getAttribute("id");
        if (id == null || id == "") {
            this.element.setAttribute("id", "tempId");
            var newId = this.element.getAttribute("id");
            var val = document.getElementById(newId).value;
            this.element.removeAttribute("id");
        }
        else {
            var val = document.getElementById(id).value;
        }
        return val;
    };
    return Activity;
}());
var Id = (function (_super) {
    __extends(Id, _super);
    function Id(id) {
        var element = document.getElementById(id);
        _super.call(this, element);
    }
    return Id;
}(Activity));
var Elmnt = (function (_super) {
    __extends(Elmnt, _super);
    function Elmnt(e) {
        _super.call(this, e);
    }
    return Elmnt;
}(Activity));
var create = new ElementCreator();
var register = function (parent) {
    var el = new Registrer(parent);
    el.register();
};
var select = {
    id: function (id) {
        var el = new Selector();
        return el.Id(id);
    },
    el: function (element) {
        var el = new Selector();
        return el.Elmnt(element);
    }
};
