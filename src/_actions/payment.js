// disini harus pure return object
import {
  GET_PENDING_ORDER,
  USER_SET_ORDER,
  GET_PENDING_ORDER_DETAIL,
  USER_SET_CONFIRM_ORDER,
  GET_APPROVED_ORDER
} from "../config/constant";
import axios from "axios";

export const getPendingOrder = () => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: GET_PENDING_ORDER,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/order/pending",
      headers: {
        Authorization: token
      }
    })
  };
};

export const getApprovedOrder = () => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: GET_APPROVED_ORDER,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/order/approved",
      headers: {
        Authorization: token
      }
    })
  };
};

export const setNewOrder = order => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_SET_ORDER,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/order/",
      headers: {
        Authorization: token
      },
      data: order
    })
  };
};

export const getPendingOrderDetail = order_id => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: GET_PENDING_ORDER_DETAIL,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/order/pending/${order_id}`,
      headers: {
        Authorization: token
      }
    })
  };
};

export const setConfirmOrder = order => {
  let token = localStorage.getItem("token");
  token = "Bearer " + token;
  return {
    type: USER_SET_CONFIRM_ORDER,
    payload: axios({
      method: "PUT",
      url: "http://localhost:5000/api/v1/order/confirm",
      headers: {
        Authorization: token
      },
      data: order
    })
  };
};
