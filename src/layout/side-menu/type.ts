export interface Menu {
  text: string;
  link?: string;
  icon?: string;
  disabled?: string;
  hidden?: string;
  acl?: string;
  key?: string;
  children?: Menu[];
}
