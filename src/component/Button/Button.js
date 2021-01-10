import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  // console.log('Button', onLoadMore);
  return (
    <button className={s.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
