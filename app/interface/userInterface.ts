export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    follow: boolean;
  }

export interface UserCardProps {
    user: User;
    onFollowToggle: (userId: number) => void;
    onDelete: (userId: number) => void;
  }