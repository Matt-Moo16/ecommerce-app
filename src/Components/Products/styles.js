import { styled } from "@mui/material/styles";

    export const MainDiv = styled('div')(
        ({ theme }) => `
        flexGrow: 1,
        backgroundColor: ${theme.palette.background.default},
        padding: ${theme.spacing(3)},
        `,
    );

    export const SpaceAbove = styled('div')(
        ({theme}) => `
        padding-top: 100px
        `
    )

