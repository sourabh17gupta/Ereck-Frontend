// src/api/Services/teamDetail.js
import { apiConnector } from "../apiConnector";
import { teamDetailsPoint } from "../api";
import { setTeamDetail, setLoading } from "../../redux/slice/TeamDetail";

const { TeamDetail_API } = teamDetailsPoint;
// Example: TeamDetail_API = `${BASE_URL}/teams`

// 🔹 1. API call
export const getSingleTeam = async (slug) => {
  try {
    console.log(slug);
    const response = await apiConnector("GET", `${TeamDetail_API}/${slug}`);
    // Backend sends { success: true, data: { description, teamMembers } }
    return response?.data?.data || null;
  } catch (error) {
    console.error(`Error fetching team ${slug}:`, error);
    throw error;
  }
};

export const fetchTeamDetail = (slug) => async (dispatch) => {
  try {
    console.log("ihihi");
    dispatch(setLoading(true));
    const teamData = await getSingleTeam(slug);
    dispatch(setTeamDetail(teamData)); // save entire data object
  } catch (error) {
    console.error("Failed to fetch team:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
