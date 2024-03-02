import React from 'react';
import { Card, Group, Text, Button } from '@mantine/core';
import { IconAt, IconPhoneCall, IconStar, IconTrash, IconUserPlus, IconUserMinus, IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import { UserCardProps } from '../../interface/userInterface';
import Avatar from '../avatar/avatas';
import  styles  from './UserCard.module.css';


const UserCard: React.FC<UserCardProps> = ({ user, onFollowToggle, onDelete }) => (
  <Card shadow="md" p="lg" radius='md' withBorder>
    <Avatar name={user.name} />
    <Text ta="center" fz="lg" fw={500} mt="md">{user.name}  {user.follow ? <IconStar stroke={1.5} size="1rem" /> : ''}</Text>
    <Group wrap="nowrap" gap={5} mt={5} c="dimmed">
      <IconAt stroke={1.5} size="1rem" />
      <Link href={`mailto:${user.email}`} className={styles.link} >
        <Text size="md" c="dimmed" td='none'>
          {user.email}
        </Text>
      </Link>
    </Group>
    <Group wrap="nowrap" gap={5} mt={5} c="dimmed">
      <IconPhoneCall stroke={1.5} size="1rem" />
      <Link href={`tel:${user.phone}`} className={styles.link} >
      <Text fz="md" c="dimmed">{user.phone}</Text>
      </Link>
    </Group>
    <Group wrap="nowrap" gap={5} mt={5} c="dimmed">
      <IconWorld stroke={1.5} size="1rem" />
        <Link href={user.website} className={styles.link} passHref >
        <Text fz="md" c="dimmed">
            {user.website}
        </Text>
    </Link>
    </Group>
    <Group mt="md" >
      <Button
       style={{ flex: 1 }}
        size='sm'
        variant={user.follow ? "default" : ''}
        leftSection={user.follow ? <IconUserMinus stroke={1.5} size="1rem" /> : <IconUserPlus stroke={1.5} size="1rem" />}
        onClick={() => onFollowToggle(user.id)}>
        {user.follow ? 'Unfollow' : 'Follow'}
      </Button>
      <Button
       style={{ flex: 1 }}
        onClick={() => onDelete(user.id)}
        variant="outline"
        size='sm'
        leftSection={<IconTrash stroke={1.5} size="1rem" />}>
        Delete
      </Button>
    </Group>
  </Card>
);

export default UserCard;