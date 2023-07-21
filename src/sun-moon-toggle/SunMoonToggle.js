import './sun-moon-toggle.css';

function SunMoonToggle() {
  return (
    <div>
      <label className='label' >
        <input type="checkbox" />
        <span className='slider'></span>
      </label>
    </div>
  );
}

export default SunMoonToggle;
