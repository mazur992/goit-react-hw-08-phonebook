import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterName } from 'redux/contacts/slice';

import { FilterStyle } from 'components/App.styled';
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
    <FilterStyle>
      <label className="filtrTitle">
        Find contacts by name
        <input
          className="filterInput"
          type="text"
          name="filter"
          value={filter}
          // onChange={debounce(handleNameChange, DEBOUNCE_DELAY)}
          onChange={handleNameChange}
        />
      </label>
    </FilterStyle>
  );
}
