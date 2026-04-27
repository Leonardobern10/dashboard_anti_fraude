import { TableCell } from "@mui/material";

type RiskCellProps = {
  risk: "baixo" | "medio" | "alto";
};

export default function RiskCell({ risk }: RiskCellProps) {
  return (
    <TableCell
      sx={{
        fontWeight: 700,
        color:
          risk.toLowerCase() === "baixo"
            ? "green"
            : risk.toLowerCase() === "medio"
              ? "yellow"
              : "red",
      }}
    >
      {risk}
    </TableCell>
  );
}
