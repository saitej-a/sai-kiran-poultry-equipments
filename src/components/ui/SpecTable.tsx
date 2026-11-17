import type { TechnicalSpec } from "@/types/product";

interface SpecTableProps {
  specs: TechnicalSpec[];
  caption?: string;
  className?: string;
}

export function SpecTable({ specs, caption, className = "" }: SpecTableProps) {
  return (
    <table className={`spec-table ${className}`}>
      {caption ? <caption>{caption}</caption> : null}
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.label}>
            <th scope="row">{spec.label}</th>
            <td>{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
