import './FilteredButton.css';

function FilteredButton({isButtonActive, onButtonActive, title}) {
  return (
    <button
      className={`button ${isButtonActive ? 'button_active' : ''}`}
      type='button'
      onClick={onButtonActive}>
      {title}
    </button>
  )
}

export default FilteredButton;
