import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import WidgetForm from "../WidgetForm";

export default function Widget() {
  return (
    <Popover className="absolute flex flex-col items-end bottom-4 right-4 md:bottom-8 md:right-8">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="flex items-center h-12 px-3 bg-brand-500 rounded-full text-white group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden transition-all duration-[400ms] ease-linear group-hover:max-w-xs">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
