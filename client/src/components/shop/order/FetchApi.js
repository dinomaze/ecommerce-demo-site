import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const apiURL = process.env.REACT_APP_API_URL;

export const getBrainTreeToken = async () => {
  let uId = JSON.parse(localStorage.getItem("jwt")).user._id;
  try {
    let res = await axios.post(`${apiURL}/api/braintree/get-token`, {
      uId: uId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/** fake payment process */
export const getPaymentProcess = async (paymentData) => {
  try {
    return new Promise(resolve => {
      resolve({
        transaction: {
          amount: paymentData.amountTotal,
          id: uuidv4()
        }
      })
    })
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (orderData) => {
  try {
    let res = await axios.post(`${apiURL}/api/order/create-order`, orderData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
