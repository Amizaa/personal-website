// Define the possible work types
export type WorkType = "fulltime" | "parttime" | "internship" | "freelance" | "contract";

export type Experience = {
  title: string;           
  company?: string;
  companyIcon?: string;         
  location?: string;    
  startDate: string;     
  endDate: string;         
  type: WorkType;   
  descriptions: string[];   
  technologies?: string[];  
};
