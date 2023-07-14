import { Button, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          color="secondary"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          color="secondary"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          label="Phone"
          variant="outlined"
          name="phone"
          color="secondary"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
