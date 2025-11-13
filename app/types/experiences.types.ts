// Define the possible work types
export type WorkTypeEn = "fulltime" | "parttime" | "internship" | "freelance" | "contract";
export type WorkTypeFa = "تمام وقت" | "پاره وقت" | "کارآموزی" | "فریلنسر" | "پروژه ای";

export type Experience = {
  title: string;           
  company?: string;
  companyIcon?: string;         
  location?: string;    
  startDate: string;     
  endDate: string;         
  descriptions: string[];   
  technologies?: string[];  
};

export type ExperienceEn = Experience & {type: WorkTypeEn}
export type ExperienceFa = Experience & {type: WorkTypeFa}
