# createEL
HTML is a XML like language structured as a tree. Sometimes HTML gets quite unmanageable. This is a Javascript library by which one can easily generate HTML code by writing only javascript. Built with TypeScript.  

Javascript:

  //Navbar
  var nav = create.Nav({ class: "nav-bar" });
  register(nav);
  create.Heading({ text: "Greeter", size: 1, parent: nav});

  //Container
  var container = create.Div({ id: "container", class: "container" });
  register(container);

  //Description
  create.Paragraph({ text: "This is my first CreatEL App!", parent: container });
  create.Paragraph({ text: "Please enter your name in the textbox below to add in list...", parent: container });

  //Form
  var myForm = create.Div({ id:"nameForm", parent: container });
  var txtBox = create.Input({ type: "text", name: "n", placeholder: "Enter your name...", parent: myForm });
  var btn = create.Button({ type: "button", text: "Add", parent: myForm });

  //List
  create.Heading({ text: "Name List", size: 3, parent: container });
  var nameList = create.List({ parent: container });
  create.ListItem({ text: "bishal", parent: nameList });

  //Function
  select.el(btn).addAction("click", function () {
      var val = select.el(txtBox).getValue();
      create.ListItem({ text: val, parent: nameList });
  })
  
  
  HTML:
  
  <div id="container" class="container">
    <p>This is my first CreatEL App!</p>
    <p>Please enter your name in the textbox below to add in list...</p>
    <div id="nameForm">
      <input type="text" placeholder="Enter your name..." name="n">
      <button type="button">Add</button>
    </div>
    <h3>Name List</h3>
    <ul>
      <li>bishal</li>
    </ul>
  </div>
    
