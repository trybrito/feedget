import { FeedbackType, feedbackTypes } from "../..";
import CloseButton from "../../../CloseButton";

type FeedbackTypeProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export default function FeedbackChoice({
  onFeedbackTypeChanged,
}: FeedbackTypeProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex gap-2 py-8 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="flex-1 flex flex-col items-center gap-2 py-5 w-24 bg-zinc-800 rounded-lg border-2 border-transparent transition-colors hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
