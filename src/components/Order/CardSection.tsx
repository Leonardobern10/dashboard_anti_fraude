import { CardContent, Stack, Typography } from "@mui/material";
import { CardDetails } from "../../ui/CardDetails";
import type { ReactNode } from "react";

type CardSectionProps = {
  textHeader: string;
  children: ReactNode;
};

export default function CardSection({
  textHeader,
  children,
}: CardSectionProps) {
  return (
    <CardDetails>
      <CardContent>
        <Stack direction="column" spacing={4}>
          <Typography variant="body1" color="secondary">
            {textHeader}
          </Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            {children}
          </Stack>
        </Stack>
      </CardContent>
    </CardDetails>
  );
}
