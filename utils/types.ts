export type NewsPost = {
  annunci_id: string;
  creation_date: string;
  last_modification_date: string;
  title: string;
  body: string;
  author: string;
  tag: string;
  images: string | null;
};

export type Staffer = {
  color: string;
  primary_group: string;
  username: string;
  uuid: string;
};

export type UserProfile = {
  last_login: string | null;
  primary_group: string | null;
  username: string | null;
  uuid: string | null;
};

export type UserPunishment = {
  id: number;
  uuid: string | null;
  ip: string | null;
  reason: string | null;
  banned_by_uuid: string;
  banned_by_name: string | null;
  removed_by_uuid: string | null;
  removed_by_name: string | null;
  removed_by_reason: string | null;
  removed_by_date: Date | null;
  time: number;
  until: number;
  template: number;
  server_scope: string | null;
  server_origin: string | null;
  silent: boolean;
  ipban: boolean;
  ipban_windcard: boolean;
  active: any;
  typeof: string | null;
}

export type NotificationType = "success" | "info" | "warning" | "error";
