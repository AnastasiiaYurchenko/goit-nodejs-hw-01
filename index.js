const contacts = require("./contacts");
// console.log(contacts);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      return console.log(addContact);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({
  action: "add",
  name: "aaaaaaaa",
  email: "dfdfdg@tyy.jhg",
  phone: "657657676",
});
