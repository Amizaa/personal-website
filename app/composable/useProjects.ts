import type { Ref } from 'vue'
import { projectsEn } from "@/data/projects.en";
import { projectsFa } from "@/data/projects.fa";


import type { Project } from '@/types/projects.types'

export function useProjects(): Ref<Project[]> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fa' ? projectsFa : projectsEn))
}