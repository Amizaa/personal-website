export type SkillLevel =
  | "beginner"
  | "intermediate"
  | "good"
  | "advanced"
  | "professional" 
  | "expert";

export const skillConfig: Record<SkillLevel, { color: string; textcolor:string; progress: number }> = {
  beginner:     { color: "bg-red-500", textcolor:"text-red-500", progress: 20 },
  intermediate: { color: "bg-yellow-500", textcolor:"text-yellow-500", progress: 40 },
  good:         { color: "bg-blue-500", textcolor:"text-blue-500",   progress: 60 },
  advanced:     { color: "bg-green-500", textcolor:"text-green-500",  progress: 80 },
  professional: { color: "bg-indigo-500", textcolor:"text-indigo-500", progress: 90 }, 
  expert:       { color: "bg-purple-600", textcolor:"text-purple-500", progress: 100 },
};

export type Skill = {
    name: string,
    icon: string,
    level: SkillLevel,
}
