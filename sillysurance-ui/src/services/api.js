import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchPolicies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/policies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw error;
  }
};
