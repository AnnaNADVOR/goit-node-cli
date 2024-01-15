const { program } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const contactsArr = await listContacts();
        console.log(contactsArr);          
    break;

    case "get":
      const foundContact = await getContactById(id);     
      console.log(foundContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone); 
      console.log(newContact); 
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);

