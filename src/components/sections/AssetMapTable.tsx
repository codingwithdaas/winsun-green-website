import { assetManagementByState } from "@/data/projects";

export function AssetMapTable() {
  const grouped = assetManagementByState.reduce<Record<string, typeof assetManagementByState>>(
    (acc, row) => {
      acc[row.state] = acc[row.state] ? [...acc[row.state], row] : [row];
      return acc;
    },
    {}
  );

  const stateTotal = (rows: typeof assetManagementByState) =>
    rows.reduce((sum, r) => sum + r.capacityMW, 0);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(grouped).map(([state, rows]) => (
        <div key={state} className="rounded-2xl border border-line bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-[16px] font-bold">{state}</h3>
            <span className="font-display text-[15px] font-extrabold text-green-700">
              {stateTotal(rows).toFixed(1)} MW
            </span>
          </div>
          <ul className="grid gap-2">
            {rows.map((r, i) => (
              <li key={i} className="flex items-center justify-between text-[12.5px] text-slate-600">
                <span>
                  {r.site !== "—" ? `${r.site} · ` : ""}
                  {r.serviceType}
                </span>
                <span className="flex-shrink-0 pl-2 font-semibold text-slate-800">
                  {r.capacityMW} MW
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
