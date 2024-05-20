import { useDispatch, useSelector } from "react-redux";

import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { deleteContacts, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const cards = useSelector(selectContacts)
  const filterText = useSelector(selectFilter) || ''
  const dispatch = useDispatch()

  const filteredCards = cards.filter(item => {
   return item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  })

  return (
    <ul className={s.list}>
      {filteredCards.length > 0 ? (
        filteredCards.map((item) => (
          <Contact
            onDelete={() => dispatch(deleteContacts(item.id))}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
};

export default ContactList;
