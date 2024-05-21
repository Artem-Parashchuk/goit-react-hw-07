import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import s from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contacts/operations";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])


  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox/>
      <span className="loading loading-spinner text-error"></span>
    
      <ContactList/>
    </div>
  );
}

export default App;
