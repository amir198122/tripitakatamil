export interface NavChild {
  label: string;
  /** Site-relative: `""`, `about/`, `posts/slug/`, `page/2/`, `#anchor` */
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  /** If set, desktop shows hover dropdown; mobile uses expandable section. */
  children?: NavChild[];
}
