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
  "real-estate": Home,
  litigation: Gavel,
  employment: Briefcase,
  "family-succession": Users,
  "banking-finance": Landmark,
  "public-law": ScrollText,
  ip: Lightbulb,
  tax: Receipt,
};
