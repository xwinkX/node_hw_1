const contacts = require("./db");

const invorkeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    default:
      console.log("Unknown action");
  }
};

invorkeAction({ action: "getAll" });
