import MyDefaultPage from "@/src/components/DefaultPage";
import { useState } from "react";
import DepartmentsTemplate from "@/src/components/joinUs/DepartmentsTemplate";
import SeoHead from "@/src/components/layout/SeoHead";
import { TransitionLink } from "@/src/components/utils/TransitionLink";
import FAQ from "@/src/components/contacts/FAQ";
import { CalendarDays } from "lucide-react";

const TEXTS = {
  info: "TLMoto is the motorcycle engineering project of Instituto Superior Técnico. Every year, students from different backgrounds work together to design, manufacture and compete with an electric racing motorcycle in the MotoStudent competition.",
  //period:
  //  "Recruitment usually takes place at the beginning of the academic year. Exact dates and available positions will be announced on our website and social media.",
  process:
    "Recruitment starts with individual interviews to get to know each candidate, understand their background, skills and interests. Candidates are then assigned to a department, where they complete recruitment tasks based on the work carried out by its members, giving them a first hands-on experience of the team's activities. Throughout the process, they also take part in other tasks designed to develop teamwork while introducing them to TLMoto and the MotoStudent competition. In addition, regular group dynamics allow candidates to get to know one another.",
  warning:
    "If recruitment is closed but you're interested in joining TLMoto, feel free to contact us by email indicating the department(s) you'd most like to join.",
  questions:
    "If you have any questions about TLMoto, the recruitment process or a specific department, feel free to get in touch. We'll be happy to help.",
  fechado: "Recruitment is currently closed.",
  aberto: "Recruitment is Open!",
};

const h3Size = "text-[4.2vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.7vw] 2xl:text-[1.5vw]";
const h2Size = "text-[4.5vw] sm:text-[3.3vw] md:text-[2.5vw] lg:text-[2vw] 2xl:text-[1.7vw]";
const normalTextSize = "text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]";
// const normalTextSize = "text-[3.7vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.3vw] 2xl:text-[1vw]";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const t = TEXTS;
  const closed = false; // change this to false when recruitment is open

  return (
    <>
      <SeoHead title={`Join Us`} description={`New page on the making!`} />
      <MyDefaultPage>
        <div className="w-full flex justify-center mt-[15vh] xl:mt-[20vh] mb-[5vh]">
          <div className="w-full max-w-[85vw] 2xl:max-w-[80vw]">
            <div className="flex flex-col xl:flex-row gap-[7vh] lg:gap-[5vh] xl:gap-15">
              {/* Left column */}
              <div className="xl:w-2/5 flex flex-col justify-center">
                <h1 className="text-white text-[7vw] md:text-[5vw] xl:text-[3vw] font-bold leading-tight">
                  Join TLMoto
                </h1>

                <p className={`mt-6 ${h3Size} text-gray-300 leading-relaxed text-justify`}>
                  {t.info}
                </p>

                {closed ? (
                  <>
                    <p className={`mt-8 ${normalTextSize} text-white font-semibold`}>
                      Get notified when recruitment opens
                    </p>

                    <div className="mt-3 flex w-full items-center justify-center">
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
                  </>
                ) : (
                  <div className="mt-[3vh] xl:mt-[7vh] flex justify-center items-center">
                    <a
                      href="https://airtable.com/appQlsuagzp0fccnW/shrIaaUyBRE3r6qb6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-[50%] xl:w-[90%] items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-blue-700 shadow-lg hover:shadow-xl"
                    >
                      Apply Now →
                    </a>
                  </div>
                )}
              </div>

              {/* Right column */}
              <div className="xl:w-3/5">
                <div className="rounded-2xl 2xl:rounded-3xl bg-[#16263c]/70 border border-[#39a6ff]/25 shadow-black/30 backdrop-blur-sm p-5 2xl:p-7 shadow-xl h-full">
                  <div className="flex flex-col gap-4 mb-[2vh] sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-1 rounded-full bg-[#39a6ff]" />

                      <h2 className={`${h2Size} font-bold text-white`}>Recruitment Information</h2>
                    </div>

                    <span
                      className={`flex w-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[3.3vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1.2vw] 2xl:text-[1vw] ${
                        closed
                          ? "border-red-500/30 bg-red-500/10 text-red-300"
                          : "border-green-400/40 bg-green-400/15 text-green-300 shadow-lg shadow-green-500/10"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          closed ? "bg-red-400" : "bg-green-400"
                        }`}
                      />

                      {closed ? t.fechado : t.aberto}
                    </span>
                  </div>

                  <div className="mt-[3vh] space-y-4">
                    {!closed && (
                      <div className="flex gap-4 items-center">
                        <div className="flex h-11 w-11 2xl:h-[7vh] 2xl:w-[7vh] shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-gray-300">
                          <CalendarDays className="h-7 w-7 2xl:h-[3vh] 2xl:w-[3vh]  " />
                        </div>

                        <div>
                          <p className={`${h3Size} font-semibold text-white`}>Application period</p>

                          <p
                            className={`list-disc list-inside text-gray-300 space-y-1 text-justify ${h3Size}`}
                          >
                            September 14 — October 14
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className={`${h3Size} font-semibold text-white`}>Recruitment process</h3>

                      <p
                        className={`mt-2 list-disc list-inside text-gray-300 space-y-1 text-justify ${normalTextSize}`}
                      >
                        {t.process}
                      </p>
                    </div>

                    {closed ? (
                      <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5">
                        <h3 className={`${normalTextSize} font-semibold text-yellow-300`}>
                          Didn't catch the recruitment period?
                        </h3>

                        <p className={`${normalTextSize} mt-3 text-gray-200 leading-relaxed`}>
                          {t.warning}
                        </p>

                        <div className="flex justify-end mt-1">
                          <TransitionLink
                            href="/contacts"
                            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                          >
                            Contact Us
                          </TransitionLink>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5 mt-6">
                        <h3 className={`${normalTextSize} font-semibold text-yellow-300`}>
                          Still have questions?
                        </h3>

                        <p className={`${normalTextSize} mt-3 text-gray-200 leading-relaxed`}>
                          {t.questions}
                        </p>

                        <div className="flex justify-end mt-1">
                          <TransitionLink
                            href="/contacts"
                            className={`inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 ${normalTextSize}`}
                          >
                            Contact Us
                          </TransitionLink>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DepartmentsTemplate />
        </div>

        <div className="w-full max-w-[85%] mx-auto mt-[10vh] mb-[17vh] md:mb-[15vh]">
          <div className="h-px w-full bg-white/15 mb-[3vh]" />
          <FAQ />
        </div>
      </MyDefaultPage>
    </>
  );
}
