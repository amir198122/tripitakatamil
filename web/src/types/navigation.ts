/** One row in the horizontal nav (no nested children — flat bar + dots). */
export interface NavLink {
  label: string;
  /** Site-relative: `""`, `about/`, `posts/slug/`, `page/2/`, `#anchor` */
  path: string;
}
