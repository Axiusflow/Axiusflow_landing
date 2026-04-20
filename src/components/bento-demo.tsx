import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    name: "Keyboard shortcuts",
    description: "Work efficiently with instant access to common actions.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Team Planner",
    description: "Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Time-blocking",
    description: "Transform daily tasks into structured time blocks for focused productivity.",
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    name: "Notifications",
    description: "Keep up to date with any changes by receiving instant notifications.",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
