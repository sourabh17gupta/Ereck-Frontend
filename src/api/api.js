const BASE_URL = process.env.REACT_APP_BASE_URL;

export const teamFormDataendPoint = {
  TeamData_API : BASE_URL + "/teamdata"
}

export const teamDetailsPoint = {
  TeamDetail_API : BASE_URL + "/getTeamDetails/:teamName"
}

