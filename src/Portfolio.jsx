import { useState } from "react";
import { Github, Code, GraduationCap, Moon, Sun, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

/* ---------- SIMPLE UI COMPONENTS ---------- */
const Card = ({ children }) => (
  <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800">
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl border transition
      ${
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "border-gray-300 dark:border-gray-600"
      }`}
  >
    {children}
  </button>
);
/* ----------------------------------------- */

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(false);

  const sections = {
    about: (
      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">Hi, I'm Vinod C V </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Aspiring software developer passionate about DSA, problem solving,cybersecurity,
            and building clean web applications.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              Web Developer
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              Penetration Tester
            </span>
          </div>
        </CardContent>
      </Card>
    ),

    profiles: (
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Coding Profiles</h2>

          <a
            href="https://leetcode.com/vinodcv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <Code /> LeetCode
          </a>

          <a
            href="https://github.com/vinodcvcv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github /> GitHub
          </a>
        </CardContent>
      </Card>
    ),

    stats: (
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Live Stats</h2>

          <img
            src="https://leetcard.jacoblin.cool/vinodcv?theme=dark"
            alt="LeetCode Stats"
            className="rounded-xl"
          />

          <img
            src="https://github-readme-stats.vercel.app/api?username=vinodcvcv&show_icons=true"
            alt="GitHub Stats"
            className="rounded-xl"
          />
        </CardContent>
      </Card>
    ),

    contact: (
      <Card>
        <CardContent className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>

          <p>
            Email:{" "}
            <a
              href="mailto:powervinod36@gmail.com"
              className="text-blue-500 hover:underline"
            >
              powervinod36@gmail.com
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/vinod-c-v-09384a361"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Vinod C V
            </a>
          </p>

          <hr className="my-4 border-gray-300 dark:border-gray-600" />

          
<div className="flex items-center gap-4">
            <a
              href="https://instagram.com/the_vinu_36"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:underline"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://x.com/_Vinod_C_V"
              target="_blank"
              rel="noreferrer"
              className="text-black dark:text-white hover:underline"
            >
              <Twitter size={16} />
            </a>
          </div>
          
        </CardContent>
      </Card>
    ),

    education: (<>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Education</h2></CardContent></Card><Card>
          <CardContent><div className="flex items-start gap-2 mt-2">
            <GraduationCap />
            <div>
              <p className="font-medium">Bachelor's Degree (B.Tech(H))</p>
              <p className="text-sm text-gray-500">
                R V University, Bengaluru • 2025 – 2029
              </p>
              <p className="text-sm text-gray-500"><b>CGPA:</b> 8.35</p>
            </div>
          </div></CardContent></Card><Card><CardContent>
          <div className="flex items-start gap-2 mt-2">
            <div>
              <p className="font-medium">12th (science(PCMCs))</p>
              <p className="text-sm text-gray-500"><b>Percentage:</b> 90</p>
            </div>
          </div>
        </CardContent>
      </Card></>
    ),
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 p-6 transition-colors">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold"
            >
              Vinod C V
            </motion.h1>

            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 flex-wrap justify-center">
            {["about", "profiles", "stats", "contact", "education"].map(
              (item) => (
                <Button
                  key={item}
                  onClick={() => setActive(item)}
                  active={active === item}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              )
            )}
          </div>

          {/* Section */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {sections[active]}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
