import { styled } from "@mui/material/styles";

const MainDiv = styled("div")(
  ({ theme }) => `
        flexGrow: 1,
        backgroundColor: ${theme.palette.background.default},
        padding: ${theme.spacing(3)},
        `
);

const SpaceAbove = styled("div")(
  ({ theme }) => `
        padding-top: 100px
        `
);

export { MainDiv, SpaceAbove };
