import { OrderStatus } from "../types/OrderStatus";

export const transformStatus = (status: OrderStatus): string => {
    switch (status) {
        case OrderStatus.PAYMENT_PENDING:
            return "Pagamento pendente";
        case OrderStatus.UNDER_REVIEW:
            return "Em análise";
        case OrderStatus.APPROVED:
            return "Aprovado";
        case OrderStatus.REJECTED:
            return "Rejeitado";
        case OrderStatus.CANCELLED:
            return "Cancelado";
        default:
            return "Pagamento pendente";
    }

}