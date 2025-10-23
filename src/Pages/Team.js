import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeam } from "../api/Services/teamDetail";
import { setTeamDetail, setLoading } from "../redux/slice/TeamDetail";
import { Loader2, Instagram, Linkedin } from "lucide-react";

const Team = () => {
  const { teamName } = useParams();
  const dispatch = useDispatch();
  const { teamDetail, loading } = useSelector((state) => state.teamDetail);

  useEffect(() => {
    if (!teamDetail || teamDetail.teamName !== teamName) {
      const fetchTeam = async () => {
        dispatch(setLoading(true));
        try {
          const data = await getSingleTeam(teamName);
          dispatch(setTeamDetail({ ...data, teamName }));
        } catch (error) {
          console.error("Error fetching team:", error);
        } finally {
          dispatch(setLoading(false));
        }
      };
      fetchTeam();
    }
  }, [teamName, dispatch, teamDetail]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <Loader2 className="animate-spin w-12 h-12 text-yellow-400" />
      </div>
    );
  }

  if (!teamDetail) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-yellow-400 text-lg">
        Team not found.
      </div>
    );
  }

  // Separate the head of the team
  const head = teamDetail.teamMembers.find((member) =>
    member.Position.toLowerCase().includes("head")
  );
  const members = teamDetail.teamMembers.filter((member) => member !== head);

  // Group members by Year
  const membersByYear = members.reduce((acc, member) => {
    if (!acc[member.Year]) acc[member.Year] = [];
    acc[member.Year].push(member);
    return acc;
  }, {});

  const years = ["4", "3", "2"]; 

  return (
    <div className="min-h-screen bg-black py-12 px-6 text-yellow-400">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 capitalize">{teamName} Team</h1>
        <p className="text-lg text-yellow-300 max-w-3xl mx-auto">
          {teamDetail.description}
        </p>
      </div>

      {/* Head of the Team */}
      {head && (
        <div className="flex justify-center mb-12">
          <div className="bg-black/80 border border-yellow-400/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
            <img
              src={head.Image}
              alt={head.name}
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-md"
            />
            <h3 className="text-2xl font-bold mb-1">{head.name}</h3>
            <p className="text-lg text-yellow-300 font-medium capitalize mb-3">
              {head.Position}
            </p>
            <div className="flex gap-4">
              {head.InstagramId && (
                <a
                  href={`https://instagram.com/${head.InstagramId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {head.LinkdinId && (
                <a
                  href={`https://linkedin.com/in/${head.LinkdinId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Members segregated by Year */}
      {years.map((year) => {
        const yearMembers = membersByYear[year] || [];
        if (yearMembers.length === 0) return null;

        return (
          <div key={year} className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{year} Year Members</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
              {yearMembers.map((member) => (
                <div
                  key={member._id}
                  className="bg-black/70 border border-yellow-400/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-yellow-400/50 transition-shadow"
                >
                  <img
                    src={member.Image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-md"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-yellow-300 font-medium capitalize mb-3">
                    {member.Position}
                  </p>
                  <div className="flex gap-4">
                    {member.InstagramId && (
                      <a
                        href={`https://instagram.com/${member.InstagramId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-500 hover:text-pink-600 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.LinkdinId && (
                      <a
                        href={`https://linkedin.com/in/${member.LinkdinId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
