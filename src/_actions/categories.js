// disini harus pure return object
import { GET_CATEGORIES, GET_CATEGORY_DETAIL } from "../config/constant";
import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/categories"
    })
  };
};

export const getCategoryDetail = category_id => {
  return {
    type: GET_CATEGORY_DETAIL,
    payload: axios({
      method: "GET",
      url: `http://localhost:5000/api/v1/category/${category_id}`
    })
  };
};
