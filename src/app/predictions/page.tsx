import { predictions } from "@/data/predictions";

export default function PredictionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-mint mb-4">Predictions</h1>
      <ul className="space-y-4">
        {predictions.map((p) => (
          <li key={p.id} className="border border-mint p-4 rounded-xl">
            <div className="text-lg font-semibold">{p.match}</div>
            <div>Market: {p.market}</div>
            <div>Confidence: {p.confidence}</div>
            <div className="text-sm text-gray-400">Date: {p.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
