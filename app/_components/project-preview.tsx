type ProjectPreviewProps = {
  type: string;
};

export default function ProjectPreview({ type }: ProjectPreviewProps) {
  if (type === "dashboard") {
    return (
      <div className="preview-window">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="flex h-full">
          <div className="hidden w-1/5 border-r border-slate-200 bg-white p-5 sm:block">
            <div className="mb-8 h-3 w-16 rounded-full bg-slate-900" />
            <div className="space-y-4">
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-slate-100" />
              <div className="h-2 w-3/4 rounded-full bg-slate-100" />
            </div>
          </div>
          <div className="flex-1 p-5 sm:p-7">
            <div className="mb-7 flex items-start justify-between">
              <div>
                <div className="mb-2 h-3 w-24 rounded-full bg-slate-800" />
                <div className="h-2 w-36 rounded-full bg-slate-200" />
              </div>
              <div className="size-8 rounded-full bg-[#d9e9df]" />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                ["24,8k", "bg-[#d9e9df]"],
                ["1,240", "bg-[#e7e2f3]"],
                ["86%", "bg-[#eee5d3]"],
              ].map(([value, color]) => (
                <div className={`${color} rounded-lg p-3 sm:p-4`} key={value}>
                  <p className="text-base font-semibold sm:text-xl">{value}</p>
                  <div className="mt-2 h-1.5 w-2/3 rounded-full bg-black/10" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end gap-2 rounded-lg border border-slate-200 bg-white p-4 sm:h-32">
              {[38, 56, 44, 72, 64, 90, 78, 100, 84].map((height, index) => (
                <div
                  className="flex-1 rounded-t-sm bg-[#315f4b]/80"
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "booking") {
    return (
      <div className="preview-window">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="grid h-full place-items-center bg-[#eef1ed] p-5 sm:p-8">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-2 h-3 w-28 rounded-full bg-slate-800" />
                <div className="h-2 w-20 rounded-full bg-slate-200" />
              </div>
              <div className="grid size-9 place-items-center rounded-full bg-[#315f4b] text-xs text-white">
                12
              </div>
            </div>
            <div className="mb-3 grid grid-cols-4 gap-2">
              {["09:00", "10:30", "12:00", "13:30"].map((time, index) => (
                <div
                  className={`rounded-md py-2 text-center text-[0.6rem] ${
                    index === 1
                      ? "bg-[#315f4b] text-white"
                      : "border border-slate-200 text-slate-500"
                  }`}
                  key={time}
                >
                  {time}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="size-9 rounded-full bg-[#e7e2f3]" />
              <div className="flex-1">
                <div className="mb-2 h-2 w-24 rounded-full bg-slate-700" />
                <div className="h-1.5 w-16 rounded-full bg-slate-200" />
              </div>
              <div className="h-2 w-8 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-window">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="h-full bg-white p-5 sm:p-8">
        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="h-3 w-28 rounded-full bg-slate-900" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-md bg-slate-100" />
            <div className="h-6 w-16 rounded-md bg-[#315f4b]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ["Button", "bg-[#d9e9df]"],
            ["Input", "bg-[#e7e2f3]"],
            ["Select", "bg-[#eee5d3]"],
            ["Card", "bg-[#e7e2f3]"],
            ["Badge", "bg-[#eee5d3]"],
            ["Avatar", "bg-[#d9e9df]"],
          ].map(([name, color]) => (
            <div className="rounded-lg border border-slate-200 p-3 sm:p-4" key={name}>
              <div className={`${color} mb-4 h-10 rounded-md`} />
              <p className="text-[0.65rem] font-medium text-slate-500">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
