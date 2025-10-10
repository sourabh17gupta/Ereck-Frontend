import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { teamFormDataendPoint } from "../api";

const { TeamData_API } = teamFormDataendPoint;

export async function submitTeamMember(formData) {
  const toastId = toast.loading("Loading...");

  try {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await apiConnector("POST", TeamData_API, data, {
      "Content-Type": "multipart/form-data",
    });

    console.log("TEAM MEMBER RESPONSE ---->", response);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message || "Submission failed");
    }

    return response.data;
  } catch (error) {
    console.error("TEAM MEMBER API ERROR ---->", error);
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}
