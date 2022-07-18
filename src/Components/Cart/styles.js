import { styled } from "@mui/material/styles";

const SpaceAbove = styled("div")(
  ({ theme }) => `
          padding-top: 100px
          `
);

const CardDetails = styled("div")(
  ({ theme }) => `
      display: flex,
      marginTop: 10%,
      width: 100%,
      justifyContent: space-between,
    `
);

export { SpaceAbove, CardDetails };
