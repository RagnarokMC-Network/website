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

export type NotificationType = "success" | "info" | "warning" | "error";
