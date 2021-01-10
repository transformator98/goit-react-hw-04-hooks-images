import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ loadMore }) {
  return (
    <button className={s.button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
