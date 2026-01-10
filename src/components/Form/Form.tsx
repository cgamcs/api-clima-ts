import { countries } from "../../data/countries";
import style from './Form.module.css'

function Form() {
  return (
    <form className={style.form}>
      <div className={style.field}>
        <label htmlFor="city">Ciudad:</label>
        <input id="city" type="text" name="city" placeholder="Ciudad" />
      </div>

      <div className={style.field}>
        <label htmlFor="country">País:</label>
        <select name="country" id="country">
          <option value="">-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={style.submit} type="submit" value="Consultar Clima" />
    </form>
  );
}

export default Form;
