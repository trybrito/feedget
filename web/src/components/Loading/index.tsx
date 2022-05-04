import { CircleNotch } from "phosphor-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-6 h-6 overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
