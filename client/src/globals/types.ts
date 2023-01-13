export type IconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

export type UserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  bannerPicture: string;
  followers: string[];
  following: string[];
  isAdmin: boolean;
};

export type PostType = {
  _id: string;
  userId: string;
  desc: string;
  img: string;
  likes: string[];
  createdAt: Date;
};
