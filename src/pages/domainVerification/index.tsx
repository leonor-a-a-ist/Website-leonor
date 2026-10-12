import type { ReactNode } from "react";
import MyDefaultPage from "@/src/components/DefaultPage";
import Image from "next/image";

const ORG = {
  name: "Associação TLMoto",
  nif: "514743018",
  address: "Avenida Rovisco Pais, 1 1049-001\nLisboa, Portugal",
  country: "Portugal",
  contact: "218 419 556",
};

const TEAM_SITE = "https://tlmoto.tecnico.ulisboa.pt/";
const INSTITUTIONAL_DOMAIN = "tlmoto.pt";

const HISTORY_URL = `${TEAM_SITE}history`;
const NEWSLETTERS_URL = `${TEAM_SITE}news`;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
      {children}
    </a>
  );
}

const orgDetails: [string, ReactNode][] = [
  ["Organization name", ORG.name],
  ["Charity ID (NIF)", ORG.nif],
  ["Registered address", <span className="whitespace-pre-line">{ORG.address}</span>],
  ["Country", ORG.country],
  ["Contact", ORG.contact],
  ["Official team website", <ExternalLink href={TEAM_SITE}>{TEAM_SITE}</ExternalLink>],
  ["Institutional domain", INSTITUTIONAL_DOMAIN],
];

export default function OrganizationPage() {
  return (
    <>
      <MyDefaultPage>
        <div className="text-white w-full min-h-screen flex flex-col items-center">
          <div className="w-[80%] max-w-[1000px] py-[17vh] flex flex-col gap-14 text-xl leading-relaxed text-justify">
            <h1 className="text-4xl leading-tight font-bold text-center">Associação TLMoto</h1>

            <Section title="Organization Details">
              <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-2">
                {orgDetails.map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt className="font-bold">{label}</dt>
                    <dd className="break-words">{value}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section title="About">
              <p>
                TLMoto is a student engineering project based at Instituto Superior Técnico
                (University of Lisbon, Portugal). Founded in 2012, the team brings together students
                from diverse academic backgrounds to design, build, and optimize high-performance
                electric motorcycles in the international MotoStudent competition.
              </p>
              <p>
                The project offers students the opportunity to apply their academic knowledge to a
                complex engineering challenge, combining theoretical learning with practical design,
                manufacturing, testing, and project management. It operates within an academic
                environment that encourages technical development, collaboration, and innovation.
              </p>
            </Section>

            <Image
              src="/images/history/MS25/1.webp"
              alt="Team in Motostudent 2025"
              width={600}
              height={400}
              className="mx-auto rounded-lg object-cover shadow-lg"
            />

            <Section title="Mission and Objectives">
              <p>
                TLMoto&apos;s mission is to shape the professionals of the future through the
                development of electric racing motorcycles, promoting innovation and teamwork.
              </p>
              <p>
                The project aims to bridge the gap between academic knowledge and real-world
                engineering by involving students in the entire development process, from initial
                concepts and computer-aided design to manufacturing, system integration, testing,
                and competition. Through this work, students develop skills in teamwork, technical
                responsibility, research, and problem-solving that they carry into their
                professional careers. By focusing on electric vehicle technology, TLMoto also
                promotes innovation and sustainable mobility.
              </p>
              <p>
                Beginning with the TLM05e, TLMoto also associates each new prototype with a social
                cause, reflecting its commitment to contribute beyond engineering and competition.
              </p>
            </Section>

            <Section title="Our Journey">
              <p>
                TLMoto was founded in 2012 with the goal of participating in MotoStudent, an
                international university competition in which student teams design and develop
                racing motorcycle prototypes.
              </p>
              <p>
                The team&apos;s first motorcycle, the combustion-powered TLM01i, competed in
                MotoStudent in 2014. TLMoto subsequently moved towards electric mobility,
                progressively expanding its experience in electrical and electronic systems, battery
                technology, mechanical design, and vehicle integration. This led to the development
                of the TLM02e, TLM03e, TLM04e, and TLM05e. Each generation has brought improvements
                in the design, performance, and integration of the motorcycle&apos;s systems.
              </p>
              <p>
                The TLM05e, unveiled at Técnico&apos;s Alameda campus in September 2025, is the
                team&apos;s lightest and simplest prototype to date, designed with engineering
                reliability at its core. It is capable of reaching speeds of up to 200 km/h.
              </p>
              <p>
                The project is a continuing engineering effort in which each new team builds on the
                knowledge and experience of its predecessors.
              </p>
              <p>
                <ExternalLink href={HISTORY_URL}>Read more about our history</ExternalLink>
              </p>
            </Section>

            <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/history/CNV19/12.webp"
                  alt="TLM01"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/history/MS18/1.webp"
                  alt="TLM02"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/history/MS21/1.webp"
                  alt="TLM03"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/history/ACP24/2.webp"
                  alt="TLM04"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/history/MS25/3.webp"
                  alt="TLM05"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Section title="Activities and Programs">
              <p>
                TLMoto&apos;s activities cover the full development cycle of an electric racing
                motorcycle, alongside the continuous training of its members:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <strong>Engineering design and development:</strong> Designing and refining
                  motorcycle components and systems to meet performance, safety, and competition
                  requirements.
                </li>
                <li>
                  <strong>Manufacturing and prototyping:</strong> Producing components in-house
                  whenever feasible, giving students practical experience with advanced
                  manufacturing processes.
                </li>
                <li>
                  <strong>Electric mobility:</strong> Developing and integrating the systems
                  required for an electric racing motorcycle.
                </li>
                <li>
                  <strong>Testing and optimization:</strong> Evaluating prototypes on-track and in
                  lab settings to identify limitations and refine future iterations.
                </li>
                <li>
                  <strong>Training and workshops:</strong> Regular workshops and training sessions,
                  some organized with partner companies.
                </li>
                <li>
                  <strong>Exhibitions & public engagement:</strong> Presenting our prototypes, team,
                  and engineering work at major events—such as Web Summit, university tech fairs,
                  and industry expos—to share knowledge, promote electric mobility, and connect with
                  the community.
                </li>
              </ul>
              <p>
                Updates on the team&apos;s activities are published in our{" "}
                <ExternalLink href={NEWSLETTERS_URL}>newsletters</ExternalLink>.
              </p>
            </Section>

            <Image
              src="/images/joinUs/management/websummit.webp"
              alt="TLM05"
              width={600}
              height={400}
              className="mx-auto rounded-lg object-cover shadow-lg"
            />

            <Section title="Impact">
              <p>
                TLMoto is a practical learning platform where students combine academic knowledge
                with real industry experience and teamwork. The project complements their university
                studies: students develop technical and research skills, learn to work across
                disciplines, and manage complex projects under real constraints, deadlines, and
                performance goals. Along the way, they build soft skills—such as communication,
                leadership, and problem-solving—that are essential for any professional career.
              </p>
              <p>
                Participation in MotoStudent allows the team to measure its work against university
                teams from around the world. In MotoStudent 2025, the TLM05e finished 20th overall,
                a result that reflects the team’s continued technical growth. Before that, the
                TLM02e had already marked a milestone as the first electric motorcycle built by
                students in Portugal.
              </p>
              <p>
                Results like these bring recognition to Técnico and to Portugal, inspiring new
                generations. TLMoto includes members from outside engineering and encourages
                students from any field to take part: a chance to explore their area of study, gain
                hands-on experience, and achieve meaningful results, both personally and
                academically.
              </p>
              <p>
                The project&apos;s impact also extends beyond engineering. Since the TLM05e, each
                prototype has carried a social cause. The TLM05e joined Pink October (Outubro Rosa),
                a global movement raising awareness in the fight against breast cancer, as a way to
                reinforce the team’s social commitment and give back to society the support received
                from sponsors and the community.
              </p>
              <p>
                Ultimately, TLMoto&apos;s goal is not only to train highly skilled engineers,
                managers, and leaders, but also to help shape conscious professionals who actively
                contribute to positive social change.
              </p>
            </Section>

            <Image
              src="/images/domainV/pinkOctober.webp"
              alt="Pink October campaign with the TLM05e"
              width={600}
              height={400}
              className="mx-auto rounded-lg object-cover shadow-lg"
            />

            <Section title="Organization and Domain">
              <p>
                Associação TLMoto is the nonprofit organization associated with the TLMoto project
                presented on this website. The team operates within the academic context of
                Instituto Superior Técnico, Universidade de Lisboa, and carries out the engineering
                activities described above.
              </p>
              <p>
                The <strong>tlmoto.pt</strong> domain was acquired and is operated by Associação
                TLMoto for institutional communication and organizational services, including Google
                Workspace and official organizational email addresses.
              </p>
              <p>
                TLMoto&apos;s public website is hosted under the Instituto Superior Técnico domain
                because the project is part of the university. The two domains therefore serve
                different purposes: <strong>tlmoto.tecnico.ulisboa.pt</strong> is the public website
                of the team, while <strong>tlmoto.pt</strong> is used for institutional services.
                Visitors to tlmoto.pt are redirected to the public website.
              </p>
            </Section>
          </div>
        </div>
      </MyDefaultPage>
    </>
  );
}
