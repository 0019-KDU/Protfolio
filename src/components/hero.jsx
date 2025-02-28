import React from "react";
import Image from "next/image";
import proPic from "./a.jpg";
import { motion } from "framer-motion";
import { Boxes, BriefcaseBusiness, Laugh } from "lucide-react";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col mb-6"
      >
        <motion.div className="mb-4" variants={itemVariants}>
          <h1 className="md:text-4xl text-2xl text-zinc-900 dark:text-zinc-100">
            Chirantha <br /> Ravishka
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="flex md:flex-col">
          <p className="text-base text-slate-500 dark:text-slate-400">
            BSc. in IT KDU | Backend Developer | DevOps Enthusiast
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        <motion.div variants={itemVariants} className="flex mb-5 rounded-full">
          <Image
            className="rounded-full"
            src={proPic}
            width={120}
            height={120}
            alt="Profile Picture"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-y-2 justify-between mx-4 my-6"
        >
          {/* <p className="flex items-center text-base text-slate-500 dark:text-slate-400">
            <span className="mr-2 text-sm">
              <BriefcaseBusiness />
            </span>
            Conversation Design & Content Strategy @ Convogrid.ai
          </p> */}
          <p className="flex items-center text-base text-slate-500 dark:text-slate-400">
            <span className="mr-2">
              <Boxes />
            </span>
            Springboot / AWS / python / Php
          </p>
          <p className="flex items-center text-base text-slate-500 dark:text-slate-400">
            <span className="mr-2">
              <Laugh />
            </span>
            Aspiring Backend Devlopment/ Devops
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 mx-4">
          <p className="text-base text-slate-500 dark:text-slate-400">
            I am a final-year student at KDU, specializing in backend
            development and DevOps practices. I am passionate about data
            engineering and have experience in project management. Currently, I
            am diving into machine learning and exploring new technologies to
            drive innovation and build cutting-edge products. I enjoy solving
            complex problems, optimizing systems for scalability, and
            continuously expanding my knowledge in cloud computing, automation,
            and AI-driven solutions. My goal is to bridge the gap between
            software development and intelligent data-driven decision-making.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
