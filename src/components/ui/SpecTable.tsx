type Column = { key: string; label: string };

type SpecTableProps = {
  columns: Column[];
  rows: Record<string, string>[];
};

export function SpecTable({ columns, rows }: SpecTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-[14px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="bg-slate-900 px-4 py-3.5 text-left font-display text-[13px] font-bold text-white"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : "bg-white"}>
              {columns.map((col) => (
                <td key={col.key} className="border-b border-[#EEF1ED] px-4 py-3.5">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
