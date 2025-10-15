import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetail } from "../api/Services/teamDetail";
import TeamDetailFull from "../component/TeamDetail/TeamDetailFull";
import { motion } from "framer-motion";

function Team() {
  console.log("joi")
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { teamDetail, loading } = useSelector((state) => state.teamDetail);

  useEffect(() => {
    if (slug) dispatch(fetchTeamDetail(slug));
  }, [slug, dispatch]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-[#0F172A] text-gray-300 text-xl">
        Loading team data...
      </div>
    );

  if (!teamDetail)
    return (
      <div className="flex justify-center items-center h-screen bg-[#000000] text-gray-300">
        No team data found.
      </div>
    );

  return (
    <div className="bg-[#000000] min-h-screen text-white">
      <section className="text-center py-12">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slug.toUpperCase()} Team
        </motion.h1>
        <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
          {teamDetail.description}
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <TeamDetailFull members={teamDetail.teamMembers} />
      </div>
    </div>
  );
}

export default Team;
