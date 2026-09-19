export function DeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      <div className="pointer-events-none absolute -left-2 bottom-24 hidden sm:flex items-end gap-2.5">
        <span className="bar-green h-14 w-4 rounded-sm" />
        <span className="bar-teal h-20 w-4 rounded-sm" />
        <span className="bar-blue h-28 w-4 rounded-sm" />
      </div>

      <div className="relative ml-0 sm:ml-10">
        <div className="overflow-hidden rounded-[18px] border border-[#d7e2ea] bg-white shadow-[0_28px_60px_rgba(22,50,74,0.12)]">
          <div className="flex items-center justify-between border-b border-line bg-[#16324a] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full gradient-fill" />
              <span className="text-[11px] font-semibold tracking-wide text-white">
                Grow More
              </span>
            </div>
            <span className="h-6 w-6 rounded-full bg-white/15" />
          </div>
          <div className="grid grid-cols-[72px_1fr] bg-white">
            <aside className="space-y-3 bg-[#16324a] px-2.5 py-4">
              {["Home", "Sales", "Stock", "People"].map((item) => (
                <div
                  key={item}
                  className="rounded-md px-1.5 py-1 text-[9px] text-white/70"
                >
                  {item}
                </div>
              ))}
            </aside>
            <div className="space-y-3 p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-muted">Today</p>
                  <p className="text-lg font-semibold tracking-tight text-navy">
                    87,740
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full border-4 border-blue/30 border-t-blue" />
              </div>
              <svg viewBox="0 0 220 56" className="h-14 w-full text-blue">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  points="0,40 30,36 60,42 90,22 120,28 150,14 180,18 220,8"
                />
              </svg>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-mint p-2">
                  <p className="text-[9px] text-muted">Orders</p>
                  <p className="text-sm font-semibold text-navy">124</p>
                </div>
                <div className="rounded-lg bg-wash p-2">
                  <p className="text-[9px] text-muted">Stock alerts</p>
                  <p className="text-sm font-semibold text-navy">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -right-1 bottom-[-18px] w-[38%] max-w-[168px] overflow-hidden rounded-[28px] border-[6px] border-[#1b2d3a] bg-white shadow-[0_18px_40px_rgba(22,50,74,0.18)] sm:-right-4 sm:bottom-[-8px]">
          <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-[#1b2d3a]/80" />
          <div className="space-y-2 px-2.5 pb-3 pt-3">
            <p className="text-[9px] font-semibold text-navy">Grow More</p>
            <div className="rounded-lg bg-mint p-2">
              <p className="text-[8px] text-muted">Today&apos;s sales</p>
              <p className="text-sm font-semibold text-navy">53,044</p>
            </div>
            <svg viewBox="0 0 100 28" className="w-full text-teal">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,20 20,16 40,18 60,8 80,12 100,4"
              />
            </svg>
            <div className="space-y-1.5">
              <div className="h-1.5 rounded-full bg-line" />
              <div className="h-1.5 w-4/5 rounded-full bg-line" />
              <div className="h-1.5 w-3/5 rounded-full bg-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
