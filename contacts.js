const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(__dirname);
// console.log(contactsPath);

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async (name, email, phone) => {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

// const add = async (data) => {
//   //беремо масив з книгами
//   const books = await getAll();
//   // створюємо нову книгу: розпилюємо дані і додаємо id
//   const newBook = {
//     id: nanoid(),
//     ...data,
//   };
//   // додаємо в масив нову книгу
//   books.push(newBook);
//   // перезаписуємо книги
//   await fs.writeFile(booksPath, JSON.stringify(books, null, 2)); // щоб нормально записалось, а не в одну строку
//   return newBook;
// };

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
