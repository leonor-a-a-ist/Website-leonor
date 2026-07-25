import MyDefaultPage from "@/src/components/DefaultPage";
import { useState } from "react";
import DepartmentsTemplate from "@/src/components/joinUs/DepartmentsTemplate";
import SeoHead from "@/src/components/layout/SeoHead";
import { TransitionLink } from "@/src/components/utils/TransitionLink";

const TEXTS = {
  info: "TLMoto is the motorcycle engineering project of Instituto Superior Técnico. Every year, students from different backgrounds work together to design, manufacture and compete with an electric racing motorcycle in the MotoStudent competition.",
  period:
    "Recruitment usually takes place at the beginning of the academic year. Exact dates and available positions will be announced on our website and social media.",
  process:
    "Recruitment starts with individual interviews to get to know each candidate, understand their background, skills and interests. Candidates are then assigned to a department, where they complete recruitment tasks based on the work carried out by its members, giving them a first hands-on experience of the team's activities. Throughout the process, they also take part in tasks, both individually and in groups, designed to develop teamwork while introducing them to TLMoto, the MotoStudent competition and the project's values. In addition, regular group dynamics allow candidates to exchange ideas and get to know one another. At the end of the process, the new members of the team are selected.",
  warning:
    "If recruitment is closed but you're interested in joining TLMoto, feel free to contact us by email indicating the department(s) you'd most like to join.",
  questions:
    "If you have any questions about TLMoto, the recruitment process or a specific department, feel free to get in touch. We'll be happy to help.",
  fechado: "Recruitment is currently closed.",
  aberto: "Recruitment is Open!",
};

const h3Size = "text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]";
const h2Size = "text-[4.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] 2xl:text-[1.5vw]";
const normalTextSize =
  "text-[3.7vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.3vw] 2xl:text-[1vw]";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const t = TEXTS;
  const closed = true; // change this to false when recruitment is open

  return (
    <>
      <SeoHead title={`Join Us`} description={`New page on the making!`} />
      <MyDefaultPage>
        <div className="w-full flex justify-center mt-[17vh] mb-[5vh]">
          <div className="w-full max-w-[85vw] 2xl:max-w-[80vw]">
            <div className="flex flex-col xl:flex-row gap-10">
              {/* Left column */}
              <div className="xl:w-2/5 flex flex-col justify-center">
                <h1 className="text-white text-[7vw] md:text-[5vw] xl:text-[3vw] font-bold leading-tight">
                  Join TLMoto
                </h1>

                <p className={`mt-6 ${normalTextSize} text-gray-300 leading-relaxed`}>{t.info}</p>

                <p className={`mt-8 ${normalTextSize} text-white font-semibold`}>
                  Get notified when recruitment opens
                </p>

                <div className="mt-3 flex w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-l-xl border border-white/20 border-r-0 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/60 focus:border-blue-500 focus:outline-none"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />

                  <button
                    type="button"
                    className="rounded-r-xl border border-l-0 border-white/20 bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
                    aria-label="Notify me"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="xl:w-3/5">
                <div className="rounded-2xl bg-[#16263c]/70 border border-[#39a6ff]/25 shadow-lg shadow-black/30 backdrop-blur-sm p-8 shadow-xl h-full my-[1vh]">
                  <h2 className={`${h2Size} font-bold text-white`}>Recruitment Information</h2>

                  <div className="mt-2 space-y-8">
                    <div>
                      <span
                        className={`2xl:text-base 2xl:px-3 2xl:py-1.5 px-2 py-1 rounded-full text-lg transition-colors duration-200 border ${
                          closed
                            ? "bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/30 text-red-300 hover:border-red-500/50"
                            : "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300 hover:border-green-500/50"
                        }`}
                      >
                        {closed ? t.fechado : t.aberto}
                      </span>
                    </div>

                    <div>
                      <h3 className={`${h3Size} font-semibold text-[#39a6ff]`}>
                        Recruitment period
                      </h3>

                      <p className={`mt-2 ${normalTextSize} text-gray-300`}>{t.period}</p>
                    </div>

                    <div>
                      <h3 className={`${h3Size} font-semibold text-[#39a6ff]`}>
                        Recruitment process
                      </h3>

                      <p
                        className={`mt-2 list-disc list-inside text-gray-300 space-y-1 ${normalTextSize}`}
                      >
                        {t.process}
                      </p>
                    </div>

                    <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5">
                      <h3 className={`${normalTextSize} font-semibold text-yellow-300`}>
                        Didn't catch the recruitment period?
                      </h3>

                      <p className={`${normalTextSize} mt-3 text-gray-200 leading-relaxed`}>
                        {t.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DepartmentsTemplate />
        </div>

        <div className="w-full max-w-[90%] mx-auto mt-10 mb-20 px-6">
          <div className="h-px w-full bg-white/15 mb-16" />

          <div className="flex flex-col items-center">
            <h3 className={`${h3Size} font-bold text-white text-center`}>Still have questions?</h3>

            <p className={`${normalTextSize} mt-4 max-w-2xl text-center text-gray-300`}>
              {t.questions}
            </p>

            <TransitionLink
              href="/contacts"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Contact Us
            </TransitionLink>
          </div>
        </div>
      </MyDefaultPage>
    </>
  );
}
