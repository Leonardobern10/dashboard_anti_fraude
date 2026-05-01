import axios from "axios";

export async function getOrders () {
 const response = await axios.get(
          "http://localhost:3000/api/v1/orders/statistics/",
          { withCredentials: true },
        );
        const data = response.data.data;
    console.log(data);
}