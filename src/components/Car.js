import "./general.css";

 const Car = props => {
  const inputClasses = ['input']
  if (props.name !== ''){
    inputClasses.push('green')
  } else{
    inputClasses.push('red')
  }
  
  if(props.name.length > 4){
    inputClasses.push('bold')
  }

    return(
    <div className="carBlock">
      <h3>Car name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <input 
      type="text" 
      onChange={props.onChangeName} 
      value={props.name} 
      className={inputClasses.join(' ')}/>
      <button type="button" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
    }

export default Car 