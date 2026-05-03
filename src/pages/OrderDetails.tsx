import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../api/order";
import type { Order } from "../types/Order";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import StatusComponent from "../components/StatusComponent";
import CardSection from "../components/Order/CardSection";
import CardInfoLine from "../components/Order/CardInfoLine";
import type { OrderHistory } from "../types/OrderHistory";
import PaymentBadge from "../components/Order/PaymentBadge";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    console.log(id);
    async function get(id: string) {
      const data = await getOrderDetails(id);
      setOrder(data);
    }
    get(id!);
  }, []);
  return (
    <div>
      {!order ? (
        <Typography>Nenhum pedido buscado</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            rowGap: 4,
            paddingY: 5,
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              width: "80%",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>PEDIDO</Typography>
              <Typography>{order.id.slice(0, 8)}</Typography>
            </Box>
            <StatusComponent status={order.orderStatus} />
          </Stack>
          <CardSection
            children={
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Stack direction="column" sx={{ height: "5rem" }}>
                  <Typography
                    sx={{
                      fontSize: 45,
                      fontWeight: 700,
                      width: "7rem",
                    }}
                  >
                    R${order.value}
                    <Typography variant="body2" color="secondary">
                      Total do pedido
                    </Typography>
                  </Typography>
                </Stack>
                {order.payment && (
                  <PaymentBadge paymentMethod={order.payment} />
                )}
              </Stack>
            }
            textHeader={"VALOR"}
          />
          <CardSection
            textHeader="INFORMAÇÕES"
            children={
              <List sx={{ width: "100%", padding: 0 }}>
                <ListItem sx={{ width: "100%" }}>
                  <CardInfoLine title="Usuario" value={order.user} />
                </ListItem>
                <Divider variant="middle" />
                <ListItem sx={{ width: "100%" }}>
                  <CardInfoLine
                    title="Criado em"
                    value={order.createdAt.toString()}
                  />
                </ListItem>
                <Divider variant="middle" />
                <ListItem sx={{ width: "100%" }}>
                  <CardInfoLine
                    title="Atualizado em"
                    value={order.updatedAt.toString()}
                  />
                </ListItem>
                <Divider variant="middle" />
                <ListItem sx={{ width: "100%" }}>
                  <CardInfoLine title="ID completo" value={order.id} />
                </ListItem>
              </List>
            }
          />
          <CardSection
            textHeader="HISTÓRICO DO PEDIDO"
            children={
              <List sx={{ width: "100%" }}>
                {order.orderHistory.map((el: OrderHistory) => (
                  <>
                    <ListItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-evenly",
                        rowGap: 1,
                      }}
                    >
                      <StatusComponent small status={el.currentStatus} />
                      <Typography>{el.id}</Typography>
                      <Typography>{el.updatedAt.toString()}</Typography>
                    </ListItem>
                    <Divider variant="middle" />
                  </>
                ))}
              </List>
            }
          />
        </Box>
      )}
    </div>
  );
}
