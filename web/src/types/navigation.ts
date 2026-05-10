export interface NavChild {
  label: string;
  /** Site-relative: `""`, `about/`, `page/2/`, `#anchor` */
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}
