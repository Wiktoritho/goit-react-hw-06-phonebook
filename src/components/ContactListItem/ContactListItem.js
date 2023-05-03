import css from "./ContactListItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import PropTypes from "prop-types";

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
