import type { Ref } from 'vue'
import { BooksEn } from "@/data/books.en";
import { BooksFa } from "@/data/books.fa";

import type { Book } from '@/types/books.types'

export function useBooks(): Ref<Book[]> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fa' ? BooksFa : BooksEn))
}