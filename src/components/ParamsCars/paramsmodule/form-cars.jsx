import { Box, Button, TextField } from "@mui/material";
import { useForm } from "../useForm";
import "./params.css";

const FormCars = () => {
    const { values, handleChange, handleSubmit } = useForm({
        name: '',
        phone: '',
        perios:'',
        details:""
      });

  return<Box sx={{width:"100%",display:"flex",justifyContent:"center"}} >

  <form className="carsinfo-form" style={{width:"400px",border:"1px solid #c3c3c3",padding:"40px"}} onSubmit={handleSubmit} >
      <TextField
        type="text"
        className="MuiOutlinedInput-notchedOutline cars-info-input"
        required
        name="username"
        value={values.name}
        onChange={handleChange}

        placeholder="Name"
        id="margin-none"
      />
      <TextField
        className="MuiOutlinedInput-notchedOutline cars-info-input"
        type="text"
        name="text"
        value={values.phone}
        required
        onChange={handleChange}
        placeholder="Phone"
      />
      <TextField
        className="MuiOutlinedInput-notchedOutline cars-info-input"
        type="text"
        required
        name="text"
        value={values.period}
        onChange={handleChange}
        placeholder="Period"
      />
      <TextField
        className="MuiOutlinedInput-notchedOutline cars-info-input"
        type="text"
        required
        name="text"
        value={values.details}
        onChange={handleChange}
        placeholder="Details"
      />
      <Button variant="contained" type="submit">Send</Button>
    </form>
  </Box> 
  
};

export default FormCars;
