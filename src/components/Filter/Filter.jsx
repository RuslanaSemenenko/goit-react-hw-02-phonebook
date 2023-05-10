// import css from './Filter.module.css';
// import PropTypes from 'prop-types';

// export const Filter = ({ filter, onChangeInput }) => {
//   return (
//     <>
//       <label>
//         Find contacts by name
//         <br />
//         <input
//           className={css.input}
//           onChange={onChangeInput}
//           value={filter}
//           type="text"
//           name="filter"
//         />
//       </label>
//     </>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};
