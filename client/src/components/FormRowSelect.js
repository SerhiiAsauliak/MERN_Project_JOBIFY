

const FormRowSelect = ({ labelText, name, value, handleChange, list}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        className="form-select"
        value={value}
        name={name}
        onChange={handleChange}
      >
        {list.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormRowSelect