import { Card, type CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardDetails = styled(Card)<CardProps>(({ theme }) => ({
    width: "80%",
    backgroundColor: theme.palette.secondary.light,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}));