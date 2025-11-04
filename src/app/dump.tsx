import Reveal from "@/components/Reveal";


      {/* Optional YouTube embed */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="J.A.N.E. demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

          {/* Application — Google Form */}
            <section className="mx-auto max-w-3xl px-0 md:px-6 py-14 space-y-4">
              <Reveal>
                <h2 className="text-3xl font-semibold text-center">Feedback</h2>
              </Reveal>
              <p className="text-center text-[var(--muted)]">
                Tell us what you like and what we should improve. This form does not require sign in.
              </p>
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative w-full" style={{ minHeight: 1600 }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform?embedded=true"
                    //https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform?usp=dialog
                    title="J.A.N.E. feedback form"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
              <p className="text-center text-sm text-[var(--muted)]">
                If the embed does not load, open the form{" "}
                <a
                  className="underline"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in a new tab
                </a>
                .
              </p>
            </section>
