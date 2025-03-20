import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export const getPropertyById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with id ${id}:`, error);
    throw error;
  }
};
