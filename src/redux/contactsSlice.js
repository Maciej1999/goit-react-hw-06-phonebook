import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) || [],
  reducers: {
    addContact(state, action) {
      return [
        ...state,
        {
          ...action.payload,
          id: nanoid(),
        },
      ];
    },
    deleteContactById(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, deleteContactById } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
