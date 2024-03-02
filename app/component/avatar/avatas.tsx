// Avatar.tsx
import React from 'react';
import { Group, Image } from '@mantine/core';
import { Config } from '../../config/config';

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <Group justify="center">
    <Image
      src={`${Config.avatarApiBaseUrl}${name}`}
      alt={`${name} initials`}
      title={`${name} initials`}
      width={120}
      height={120}
      radius={60}
    />
  </Group>
);

export default Avatar;
