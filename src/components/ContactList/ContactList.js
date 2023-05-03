import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
