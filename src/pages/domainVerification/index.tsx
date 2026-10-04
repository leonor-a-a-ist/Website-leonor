import MyDefaultPage from "@/src/components/DefaultPage";

export default function DomainVerification() {
  return (
    <>
      <MyDefaultPage>
        <div className="relative flex flex-col w-[100vw] h-[100vh] justify-center items-center gap-[5vh]">
          <h1 className="text-white w-[80%] text-4xl leading-tight font-bold text-center">
            Domain Verification
          </h1>

          <div className="text-white w-[80%] max-w-[1000px] text-2xl leading-relaxed text-center">
            <p className="mb-6">
              TLMoto is a student organization at Instituto Superior Técnico, Universidade de
              Lisboa, associated with the nonprofit organization Associação TLMoto.
            </p>

            <p className="mb-6">
              The <strong>tlmoto.pt</strong> domain was acquired and is operated by Associação
              TLMoto for institutional communication and services, including Google Workspace and
              official organizational email addresses.
            </p>

            <p>
              TLMoto&apos;s public website is hosted under the Instituto Superior Técnico domain
              because the organization is part of the university. The two domains therefore serve
              different purposes:
              <strong> tlmoto.tecnico.ulisboa.pt</strong> is the public website, while{" "}
              <strong>tlmoto.pt</strong> is used for institutional services.
            </p>
          </div>
        </div>
      </MyDefaultPage>
    </>
  );
}
