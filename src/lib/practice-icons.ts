import {
  Building2,
  Home,
  Gavel,
  Briefcase,
  Users,
  Landmark,
  ScrollText,
  Lightbulb,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export const PRACTICE_ICONS: Record<string, LucideIcon> = {
  "corporate-commercial": Building2,
  "real-estate-conveyancing": Home,
  "litigation-disputes": Gavel,
  "employment-labour": Briefcase,
  "family-succession": Users,
  "banking-finance": Landmark,
  "public-constitutional": ScrollText,
  "intellectual-property": Lightbulb,
  "tax-regulatory": Receipt,
};
