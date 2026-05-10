export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  /** Full article body (Markdown). If omitted, the post page builds a short default from title + excerpt. */
  bodyMd?: string;
}
