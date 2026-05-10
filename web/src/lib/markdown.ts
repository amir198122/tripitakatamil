import { marked } from "marked";

marked.setOptions({ gfm: true });

/** Sync HTML from Markdown (trusted source: your repo JSON / content only). */
export function renderMarkdown(md: string): string {
  return marked(md, { async: false }) as string;
}
