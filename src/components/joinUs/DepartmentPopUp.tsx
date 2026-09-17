import { useEffect, useState } from "react";
import { DepartmentCardData } from "src/components/textContent/DepartmentsTexts";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

export default function DepartmentPopUp({
  department,
  onClose,
}: {
  department: DepartmentCardData | null;
  onClose: () => void;
}) {
  const [selectedMedia, setSelectedMedia] = useState<
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "video";
        src: string;
        alt: string;
      }
    | null
  >(null);

  // Close popup with Escape
  useEffect(() => {
    if (!department) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();

      if (selectedMedia) {
        setSelectedMedia(null);
        return;
      }

      onClose();
    };

    window.addEventListener("keydown", handleKey, true);

    return () => {
      window.removeEventListener("keydown", handleKey, true);
    };
  }, [department, selectedMedia, onClose]);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (department) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [department]);

  if (!department) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[1002] flex items-center justify-center bg-black/85 p-4 sm:p-6 cursor-pointer"
        onClick={onClose}
      >
        <div
          className="relative flex w-full max-w-[90%] lg:max-w-4xl 2xl:max-w-5xl flex-col max-h-[80vh] lg:max-h-[85vh] xl:max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl cursor-default"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-gray-700 transition hover:bg-black/10 hover:text-black"
          >
            <X size={22} />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto">
            {/* Header */}
            <header className="px-6 pb-8 pt-10 text-center sm:px-12 sm:pt-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Department
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {department.title}
              </h2>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-600" />
            </header>

            {/* Main content */}
            <main className="space-y-12 px-6 pb-12 sm:px-12 lg:px-16">
              {/* About */}
              {department.popupDescription && (
                <section>
                  <SectionTitle>About the Department</SectionTitle>

                  <div className="text-base leading-7 text-gray-700">
                    <div className="float-right mb-4 md:mb-0 ml-8 w-full overflow-hidden rounded-2xl bg-gray-100 sm:w-[45%] lg:w-[42%] xl:w-[35%]">
                      <Image
                        src={department.media[0].src}
                        alt={department.media[0].alt}
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    <p className="text-justify text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]">
                      {department.popupDescription}
                    </p>

                    <div className="clear-both" />
                  </div>
                </section>
              )}

              {/* Structure */}
              {department.subAreas && (
                <section>
                  <SectionTitle>Department Structure</SectionTitle>

                  <div className="space-y-8">
                    {Object.entries(department.subAreas).map(([subArea, description]) => (
                      <div key={subArea} className="border-l-2 border-black/20 pl-5 sm:pl-6">
                        <h4 className="mb-2 text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw] font-semibold text-black">
                          {subArea}
                        </h4>

                        <p className="leading-7 text-gray-700 text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tools & Techniques + Images */}
              {(department.technologies || department.media.length > 1) && (
                <section>
                  <div className="grid gap-10 md:grid-cols-[1fr_2fr] lg:items-start">
                    {/* Technologies */}
                    {department.technologies && (
                      <div>
                        <SectionTitle>Tools & Techniques</SectionTitle>

                        <ul className="space-y-4">
                          {department.technologies.map(technology => (
                            <li key={technology} className="flex items-start gap-3 text-gray-700">
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                              <p className="leading-7 text-[4vw] sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1.2vw]">
                                {technology}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Images */}
                    {department.media.length > 1 && (
                      <div>
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                          {department.media.slice(1).map((media, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedMedia(media)}
                              className="group relative aspect-[6/4] cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100"
                              aria-label={`Open ${media.alt}`}
                            >
                              {media.type === "image" ? (
                                <Image
                                  src={media.src}
                                  alt={media.alt}
                                  fill
                                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <video
                                  src={media.src}
                                  muted
                                  playsInline
                                  preload="metadata"
                                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                              )}

                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                <span className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                  Click to enlarge
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-4 sm:p-8 cursor-pointer"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close media"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <div
            className="relative flex max-h-full max-w-full items-center justify-center cursor-default"
            onClick={event => event.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-h-[80vh] max-w-[80vw] h-auto w-auto rounded-2xl object-contain shadow-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                autoPlay
                controls
                playsInline
                className="max-h-[80vh] max-w-[80vw] rounded-2xl object-contain shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-gray-500">{children}</h3>
  );
}
