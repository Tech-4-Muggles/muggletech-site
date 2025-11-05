import Reveal from "@/components/Reveal";

{/* Video */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <video
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/jane-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
