import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterName } from 'redux/contacts/slice';
// import debounce from 'lodash.debounce';
// const DEBOUNCE_DELAY = 3000;

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleNameChange = event => {
    const { value } = event.target;
    dispatch(filterName(value));
  };
  return (
    <label className={css.filtrTitle}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        // onChange={debounce(handleNameChange, DEBOUNCE_DELAY)}
        onChange={handleNameChange}
      />
    </label>
  );
}
