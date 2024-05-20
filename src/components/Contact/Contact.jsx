import { GoPersonFill } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

import { deleteContacts } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.content}>
        <p className={s.name}>
          <GoPersonFill /> {name}
        </p>
        <p className={s.phone}>
          <MdPhone /> {number}
        </p>
      </div>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
