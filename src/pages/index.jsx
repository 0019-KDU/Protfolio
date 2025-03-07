import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import dev from "../../public/dev.png";
import log from "../../public/e-commerce.png";
import Head from "next/head";
// import Spline from '@splinetool/react-spline'; // Uncomment if Spline is used

function Index() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Chirantha Hapuarachchi</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />

        <div
          className="md:mt-[70px] mt-[70px]"
          style={{ minHeight: "calc(100vh - 100px)" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="px-6 md:px-8 pt-16 pb-24 md:pt-20 md:pb-32 max-w-[700px] mx-auto"
          >
            <Hero />

            <motion.div
              variants={itemVariants}
              className="my-6 border-t-2 border-gray-200 dark:border-gray-700 group"
            >
              <h2 className="text-lg text-gray-600 dark:text-gray-300 text-left mt-4">
                Latest Work
              </h2>

              {[
                {
                  title: "ecommerce-cloud-native",
                  link: "https://github.com/0019-KDU/ecommerce-cloud-native",
                  description:
                    "A cloud-native eCommerce microservices project with secure, scalable, and event-driven architecture",
                  imageSrc: log,
                },
                {
                  title: "devsecops",
                  link: "https://github.com/0019-KDU/devsecops",
                  description:
                    "Building an end-to-end CICD pipeline and Integrating security best practices into your development workflows",
                  imageSrc: dev,
                },
                ,
              ].map((work, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-y-8 mt-8 shadow-md rounded-lg group-hover:scale-[1] group-hover:hover:scale-105 transition duration-200 ease-in-out shadow-blue-300 dark:shadow-blue-900 bg-white dark:bg-gray-800"
                >
                  <motion.div className="py-3 px-4" variants={itemVariants}>
                    <div className="flex flex-col md:flex-row content-center gap-x-5">
                      <Image
                        className="m-2 rounded-2xl"
                        src={work.imageSrc}
                        width={80}
                        height={80}
                        alt={work.title}
                      />
                      <div className="flex flex-col mt-2">
                        <h2 className="text-base text-slate-600 dark:text-slate-300">
                          {work.title}
                          <span className="ml-2 text-purple-800 dark:text-purple-400">
                            <Link target="_blank" href={work.link}>
                              View
                            </Link>
                          </span>
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Index;
