import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
