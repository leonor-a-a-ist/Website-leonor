import MyDefaultPage from "@/src/components/DefaultPage";
import { useState } from "react";
import DepartmentsTemplate from "@/src/components/joinUs/DepartmentsTemplate";
import SeoHead from "@/src/components/layout/SeoHead";
import { TransitionLink } from "@/src/components/utils/TransitionLink";
import { CalendarDays, Lock, LockOpen } from "lucide-react";
import { subscribeEmail } from "@/src/components/utils/UploadsEmail";

const TEXTS = {
  info: "TLMoto is the motorcycle engineering project of Instituto Superior Técnico. Every year, students from different backgrounds work together to design, manufacture and compete with an electric racing motorcycle in the MotoStudent competition.",
  process:
    "Recruitment starts with individual interviews to get to know each candidate, understand their background, skills and interests. Candidates are then assigned to a department, where they complete recruitment tasks based on the work carried out by its members, giving them a first hands-on experience of the team's activities. Throughout the process, they also take part in other tasks designed to develop teamwork while introducing them to TLMoto and the MotoStudent competition. In addition, regular group dynamics allow candidates to get to know one another.",
  fechado: "Recruitment is closed.",
  aberto: "Recruitment is Open!",
  yellowWarning: ["Still have questions?", "Didn't catch the recruitment period?"],
  yellowText: [
    "If you have any questions about TLMoto, the recruitment process or a specific department, feel free to get in touch. We'll be happy to help.",
    "If recruitment is closed but you're interested in joining TLMoto, feel free to contact us by email indicating the department(s) you'd most like to join.",
  ],
};

const mainTitle = "text-[8.5vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[3.5vw] 2xl:text-[3vw]";
const h2Size = "text-[5vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[1.7vw]";
const h3Size = "text-[4.2vw] md:text-[2.2vw] lg:text-[1.7vw] 2xl:text-[1.5vw]";
const normalTextSize = "text-[4vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const t = TEXTS;
  const closed = false; // change this to false when recruitment is open

  async function handleSubscribe() {
    if (!email) return;

    const result = await subscribeEmail(email);

    switch (result.status) {
      case "success":
        alert("Thank you for subscribing!");
        setEmail("");
        break;

      case "invalid_email":
        alert("Please enter a valid email address.");
        break;

      case "error":
        alert("An error occurred. Please try again later.");
        break;
    }
  }

  return (
    <>
      <SeoHead
        title="Join Us"
        description="Join the TLMoto team and be part of the MotoStudent competition!"
      />
      <MyDefaultPage>
        <div className="w-full flex flex-col mb-[15vh] md:mb-[10vh] xl:mb-[12vh] mt-[17vh] md:mt-[13vh] xl:mt-[20vh] gap-[17vw] md:gap-[13vw] lg:gap-[10vw] xl:gap-[8vw] 2xl:gap-[6vw]">
          {/* Info */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col lg:flex-row max-w-[85vw] 2xl:max-w-[80vw] gap-[7vh] lg:gap-[3vw] xl:gap-[4vw] 2xl:gap-[5vw]">
              {/* Left column - subscription/ application */}
              <div className="lg:w-2/5 flex flex-col justify-center gap-[4vh] xl:gap-[7vh]">
                <div className="flex flex-col gap-[1vh]">
                  <h1 className={`text-white ${mainTitle} font-bold`}>Join TLMoto</h1>

                  <p className={`${h3Size} text-gray-300 text-justify`}>{t.info}</p>
                </div>

                {/* to do */}
                {closed ? (
                  <>
                    <div className="flex flex-col gap-[0.5vh]">
                      <p className={`${normalTextSize} text-white font-semibold`}>
                        Get notified when recruitment opens
                      </p>

                      <div className="flex w-full items-center justify-center">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 rounded-l-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/60 focus:outline-none"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />

                        <button
                          type="button"
                          className="rounded-r-xl border border-white/20 bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700"
                          aria-label="Notify me"
                          onClick={handleSubscribe}
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-center items-center">
                    <a
                      href="https://airtable.com/appQlsuagzp0fccnW/shrIaaUyBRE3r6qb6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-[60%] md:w-[50%] lg:w-[80%] items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-4 ${normalTextSize} font-bold uppercase tracking-wide text-white transition-colors duration-200 shadow-lg`}
                    >
                      {"Apply Now →"}
                    </a>
                  </div>
                )}
              </div>

              {/* Right column - info */}
              <div className="lg:w-3/5">
                <div className="flex flex-col rounded-2xl 2xl:rounded-4xl bg-[#16263c]/70 border border-[#39a6ff]/25 shadow-black/30 shadow-xl backdrop-blur-sm p-5 2xl:p-7 h-full gap-[2vh] xl:gap-[3vh]">
                  {/* Title and status */}
                  <div className="flex flex-row justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-full w-1 rounded-full bg-blue-600" />

                      <h2 className={`${h2Size} font-bold text-white`}>Recruitment Information</h2>
                    </div>

                    <span
                      className={`flex w-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[3.8vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] ${
                        closed
                          ? "border-red-400 bg-red-400/15 text-red-400 shadow-lg shadow-red-500/10"
                          : "border-green-400 bg-green-400/15 text-green-300 shadow-lg shadow-green-500/10"
                      }`}
                    >
                      {/* status icon */}
                      {closed ? <Lock className="h-4 w-4" /> : <LockOpen className="h-4 w-4" />}

                      <span className="hidden md:inline">{closed ? t.fechado : t.aberto}</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    {!closed && (
                      <div className="flex gap-4 items-center justify-start">
                        <div className="flex h-[10vw] w-[10vw] md:h-[6vw] md:w-[6vw] lg:h-[4vw] lg:w-[4vw] xl:h-[3.5vw] xl:w-[3.5vw] shrink-0 items-center justify-center rounded-md md:rounded-xl bg-white/[0.06]">
                          <CalendarDays className="h-[70%] w-[70%]" />
                        </div>

                        <div>
                          <h3 className={`${h3Size} font-semibold text-white`}>
                            Application period
                          </h3>

                          <p className={`text-gray-300 ${h3Size}`}>September 14 — October 14</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className={`${h3Size} font-semibold text-white`}>Recruitment process</h3>

                      <p className={`text-gray-300 text-justify ${normalTextSize}`}>{t.process}</p>
                    </div>
                    <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5">
                      <h4 className={`${normalTextSize} font-semibold text-yellow-300`}>
                        {closed ? t.yellowWarning[1] : t.yellowWarning[0]}
                      </h4>

                      <p className={`${normalTextSize} text-gray-200 text-justify`}>
                        {closed ? t.yellowText[1] : t.yellowText[0]}
                      </p>

                      <div className="flex justify-end mt-2">
                        <TransitionLink
                          href="/contacts"
                          className={`inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 text-white transition-colors duration-200 hover:bg-blue-700 ${normalTextSize}`}
                        >
                          Contact Us
                        </TransitionLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col w-[95vw] xl:w-[90vw] gap-[5vw]">
              <div className="flex flex-col gap-[1vh] ">
                <h1 className={`text-white ${mainTitle} font-bold text-center`}>Our Departments</h1>

                <p className={`${h3Size} text-gray-300 leading-relaxed text-center`}>
                  Discover our departments and find the area that best fits your interests and
                  skills. Join the team, learn new things, and help us build TLMoto.
                </p>
              </div>

              <div>
                <DepartmentsTemplate />
              </div>
            </div>
          </div>
        </div>
      </MyDefaultPage>
    </>
  );
}
