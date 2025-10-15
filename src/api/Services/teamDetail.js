import { apiConnector } from "../apiConnector";
import { teamDetailsPoint } from "../api";
import { setTeamDetail, setLoading } from "../../redux/slice/TeamDetail";

const { TeamDetail_API } = teamDetailsPoint; 
// Example: TeamDetail_API = `${BASE_URL}/teams`

// 🔹 1. API call
export const getSingleTeam = async (teamName) => {
  try {
    console.log("Fetching team:", teamName);
    const response = await apiConnector("GET", `${TeamDetail_API}/${teamName}`);
    console.log(response);
    // Backend sends { success: true, data: { description, teamMembers } }
    return response?.data?.data || null;
  } catch (error) {
    console.error(`Error fetching team ${teamName}:`, error);
    throw error;
  }
};

// 🔹 2. Thunk (Redux async)
export const fetchTeamDetail = (teamName) => async (dispatch) => {
  try {
    console.log("Fetching team with Redux thunk:", teamName);
    dispatch(setLoading(true));
    const teamData = await getSingleTeam(teamName);
    dispatch(setTeamDetail(teamData)); // save entire data object
  } catch (error) {
    console.error("Failed to fetch team:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
