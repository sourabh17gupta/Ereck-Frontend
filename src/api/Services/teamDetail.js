import { apiConnector } from "../apiConnector";
import { teamDetailsPoint } from "../api";

// Example: TeamDetail_API = `${BASE_URL}/teams`
const { TeamDetail_API } = teamDetailsPoint;

// API call to fetch single team
export const getSingleTeam = async (teamName) => {
  try {
    console.log("Fetching team:", teamName);
    const response = await apiConnector("GET", `${TeamDetail_API}/${teamName}`);
    return response?.data?.data || null;
  } catch (error) {
    console.error(`Error fetching team ${teamName}:`, error);
    throw error;
  }
};
