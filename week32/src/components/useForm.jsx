import { useState } from 'react';

export function useForm(initialValues) {
    let [values, setValues] = useState(initialValues)
    function handleChange(e){
       let {value,name} = e.target
    //    console.log(value);
    //    console.log(name);
       setValues({...values,[name]:value})
       console.log(values);
       
       
        
    }
  function handleSubmit(e){
    e.preventDefault()
    alert(`🐺 User name: ${values.username}\n 📧 Email: ${values.email}`)
  }
    return {handleChange,handleSubmit};
}
