export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;
// const filterContacts = (filter, contacts) => {
//   return contacts.filter(
//     el =>
//       el.name.toLowerCase().includes(filter.toLowerCase()) ||
//       el.number
//         .toLowerCase()
//         .trim()
//         .replace(/ |-/g, '')
//         .includes(filter.toLowerCase().trim().replace(/ |-/g, ''))
//   );
// };

// export const getContacts = state =>
//   filterContacts(state.filter, state.contacts);
