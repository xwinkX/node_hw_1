const contacts = require("./db");

const invorkeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAll();
      console.log(allContacts);
      break;
    case "getById":
      const oneContact = await contacts.getById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      console.log(newContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// invorkeAction({ action: "getAll" });
// invorkeAction({ action: "getById", id: "5" });
invorkeAction({
  action: "add",
  name: "Www",
  email: "Sdf@mail.com",
  phone: "54654646",
});
