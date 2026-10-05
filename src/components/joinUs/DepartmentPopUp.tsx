import { useEffect, useState } from "react";
import { DepartmentCardData } from "src/components/textContent/DepartmentsTexts";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Image from "next/image";

const descriptionTextSize =
  "text-[4.5vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-2xl text-gray-700";
const sectionTitleSize =
  "font-bold uppercase tracking-[0.15em] text-gray-500 mb-4 text-[3.5vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.1vw] 2xl:text-xl";

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

  // Close popup or media with Escape
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
        className="fixed inset-0 z-[1002] flex items-center justify-center bg-black/85 cursor-pointer"
        onClick={onClose}
      >
        <div
          className="relative flex flex-col max-w-[90%] lg:max-w-4xl 2xl:max-w-7xl max-h-[80vh] lg:max-h-[85vh] overflow-hidden rounded-3xl bg-white shadow-2xl cursor-default"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-[200] flex h-10 w-10 items-center justify-center rounded-full transition bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-black"
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          {/* Scrollable content */}
          <div
            className="relative overflow-y-auto"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 2%, rgba(0,0,0,0.6) 3%, rgba(0,0,0,0.8) 4%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0.8) 96%, rgba(0,0,0,0.6) 97%, rgba(0,0,0,0.4) 98%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 2%, rgba(0,0,0,0.6) 3%, rgba(0,0,0,0.8) 4%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0.8) 96%, rgba(0,0,0,0.6) 97%, rgba(0,0,0,0.4) 98%, transparent 100%)",
            }}
          >
            {/* Header */}
            <header className="pb-8 pt-8 md:pt-10 text-center">
              <h2 className={`${sectionTitleSize}`}>Department</h2>

              <h1 className="text-3xl sm:text-4xl font-bold text-black">{department.title}</h1>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-600" />
            </header>

            {/* Main content */}
            <main className="space-y-12 px-6 pb-12 sm:px-12 lg:px-16">
              {/* About */}
              <section>
                <h2 className={`${sectionTitleSize}`}>About the Department</h2>

                <div>
                  <div className="float-right mb-4 md:mb-0 ml-5 w-full overflow-hidden rounded-2xl md:w-[45%] lg:w-[40%]">
                    <Image
                      src={department.media[0].src}
                      alt={department.media[0].alt}
                      width={700}
                      height={500}
                      className="object-cover"
                    />
                  </div>

                  <p className={`${descriptionTextSize} text-justify `}>
                    {department.popupDescription}
                  </p>

                  {/* Ensures the following content starts below the floated image by forcing a new line */}
                  <div className="clear-both" />
                </div>
              </section>

              {/* Structure - optional */}
              {department.subAreas && (
                <section>
                  <h2 className={`${sectionTitleSize}`}>Department Structure</h2>

                  <div className="space-y-8">
                    {Object.entries(department.subAreas).map(([subArea, description]) => (
                      <div key={subArea} className="border-l-2 border-gray-300 pl-5 sm:pl-6">
                        <h3
                          className={`mb-2 ${descriptionTextSize} text-justify font-semibold text-black`}
                        >
                          {subArea}
                        </h3>

                        <p className={`${descriptionTextSize} text-justify`}>{description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Techniques + Images */}
              {(department.technologies || department.media.length > 1) && (
                <section>
                  <div className="grid gap-10 md:gap-[2vw] md:grid-cols-[1fr_2fr]">
                    {/* Tools & Techniques */}
                    {department.technologies && (
                      <div>
                        <h2 className={`${sectionTitleSize}`}>Tools & Techniques</h2>

                        <ul className="space-y-4">
                          {department.technologies.map(technology => (
                            <li key={technology} className="flex items-center gap-3">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                              <p className={`${descriptionTextSize}`}>{technology}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Images */}
                    {department.media.length > 1 && (
                      <div>
                        <div className="grid gap-3 grid-cols-2 xl:grid-cols-3">
                          {department.media.slice(1).map((media, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedMedia(media)}
                              className="group relative aspect-[6/4] cursor-zoom-in overflow-hidden rounded-2xl"
                              aria-label={`Open ${media.alt}`}
                            >
                              {media.type === "image" ? (
                                <Image
                                  src={media.src}
                                  alt={media.alt}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <video
                                  src={media.src}
                                  muted
                                  playsInline
                                  preload="metadata"
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              )}

                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                <span className="rounded-full bg-black/60 px-4 py-2 text-sm lg:text-base text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
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
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/85 cursor-pointer"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close media"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          <div
            className="relative flex max-h-full max-w-full items-center justify-center cursor-default"
            onClick={event => event.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <Image
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                width={600}
                height={400}
                className="max-h-[75vh] max-w-[75vw] h-auto w-auto rounded-2xl object-contain"
              />
            ) : (
              <video
                src={selectedMedia.src}
                autoPlay
                controls
                playsInline
                className="max-h-[75vh] max-w-[75vw] rounded-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
