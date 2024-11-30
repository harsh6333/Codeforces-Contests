import axios from "axios";

// Fetch contest list from Codeforces API
export const fetchContests = async () => {
  try {
    const response = await axios.get("https://codeforces.com/api/contest.list");
    return response.data.result; // Return the contests
  } catch (error) {
    console.error("Error fetching contests:", error);
    return [];
  }
};
