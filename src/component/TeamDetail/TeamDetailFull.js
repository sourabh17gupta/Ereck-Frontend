import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeam } from "../../api/Services/teamDetail";
import { setTeamDetail, setLoading } from "../../redux/slice/TeamDetail";
import { Loader2, Instagram, Linkedin } from "lucide-react";

const TeamDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { teamDetail, loading } = useSelector((state) => state.teamDetail);

  useEffect(() => {
    const fetchTeam = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getSingleTeam(slug);
        dispatch(setTeamDetail(data));
      } catch (error) {
        console.error("Error fetching team details:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTeam();
  }, [slug, dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-blue-500" />
      </div>
    );
  }

  if (!teamDetail) {
    return (
      <div className="text-center text-gray-600 mt-10 text-lg">
        Team not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 capitalize">
        {slug} Team
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
        {teamDetail.description}
      </p>

      {/* Members */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {teamDetail.teamMembers.map((member) => (
          <div
            key={member._id}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-5 flex flex-col items-center text-center"
          >
            <img
              src={member.Image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-blue-500 font-medium capitalize">
              {member.Position}
            </p>

            <div className="flex gap-4 mt-4">
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
                  className="text-blue-600 hover:text-blue-700 transition-colors"
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
};

export default TeamDetail;
