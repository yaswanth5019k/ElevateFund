import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 