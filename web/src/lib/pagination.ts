import type { Article } from "../types/article";

export const ARTICLES_PER_PAGE = 4;

export function sortArticlesDesc(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTotalPages(articleCount: number): number {
  return Math.max(1, Math.ceil(articleCount / ARTICLES_PER_PAGE));
}

/** 1-based page */
export function sliceForPage(sorted: Article[], page: number): Article[] {
  const p = Math.max(1, page);
  const start = (p - 1) * ARTICLES_PER_PAGE;
  return sorted.slice(start, start + ARTICLES_PER_PAGE);
}
