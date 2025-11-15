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

  // Separate head 
  const head = teamDetail.teamMembers.find((member) =>
    member.Position.toLowerCase().includes("head")
  );
  const members = teamDetail.teamMembers.filter((member) => member !== head);

  // Group by year
  const membersByYear = members.reduce((acc, member) => {
    if (!acc[member.Year]) acc[member.Year] = [];
    acc[member.Year].push(member);
    return acc;
  }, {});

  const years = ["4", "3", "2"];

  return (
    <div className="min-h-screen bg-black py-14 px-6 text-yellow-400">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide capitalize text-yellow-400 drop-shadow-lg">
          {teamName} Team
        </h1>
      </div>

      {/* Head of the Team */}
      {head && (
        <div className="flex justify-center mb-20">
          <div className="bg-black/80 border border-yellow-400/40 rounded-2xl p-10 flex flex-col items-center text-center shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 max-w-md">
            <img
              src={head.Image}
              alt={head.name}
              className="w-44 h-44 object-cover rounded-full mb-5 border-4 border-yellow-400 shadow-xl"
            />
            <h3 className="text-3xl font-bold mb-1">{head.name}</h3>
            <p className="text-lg text-yellow-300 font-medium capitalize mb-4">
              {head.Position}
            </p>

            <div className="flex gap-5 mt-2">
              {head.InstagramId && (
                <a
                  href={head.InstagramId}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-7 h-7" />
                </a>
              )}
              {head.LinkdinId && (
                <a
                  href={head.LinkdinId}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Members by year */}
      {years.map((year) => {
        const yearMembers = membersByYear[year] || [];
        if (yearMembers.length === 0) return null;

        return (
          <div key={year} className="mb-16">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-300">
              {year} Year Members
            </h2>

            {/* Larger, centered grid for laptop UI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center">
              {yearMembers.map((member) => (
                <div
                  key={member._id}
                  className="bg-black/70 border border-yellow-400/30 rounded-2xl p-8 w-72 flex flex-col items-center text-center shadow-lg hover:shadow-yellow-400/40 transition-all"
                >
                  <img
                    src={member.Image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-md"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-yellow-300 font-medium capitalize mb-4">
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
