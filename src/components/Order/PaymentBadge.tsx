import { Stack, Typography } from "@mui/material";
import type { PaymentMethod } from "../../types/PaymentMethod";

type PaymentBadgeProps = {
  paymentMethod: PaymentMethod;
};

export default function PaymentBadge({ paymentMethod }: PaymentBadgeProps) {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3e3d3d",
        paddingX: 2,
        paddingY: 1,
        borderRadius: 2,
      }}
    >
      <Typography sx={{ color: "#c5c5c5" }} component="p">
        Pagamento:
        <Typography component="span" sx={{ paddingLeft: 1 }}>
          {paymentMethod}
        </Typography>
      </Typography>
    </Stack>
  );
}
