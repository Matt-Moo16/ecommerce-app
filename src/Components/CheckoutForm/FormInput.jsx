import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <TextField
            fullWidth
            label={label}
            required={required}
            onChange={onChange}
            sx={{ fontFamily: "Crimson Text" }}
            color="primary"
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
