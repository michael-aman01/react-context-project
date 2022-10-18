import {useCoffeeContext}  from "../context/CoffeeContext.js"
import {useRef} from 'react';


const SetCoffeeBean = ({ coffeeBeans }) => {
  const {setCoffeeBeanId} = useCoffeeContext();

  const ref = useRef()
  const handleChange = (e) => {
    setCoffeeBeanId(e.target.value)
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        ref = {ref}
        onChange = {handleChange}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;