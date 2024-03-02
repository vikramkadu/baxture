'use client'
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid
} from '@mantine/core';
import { User } from './interface/userInterface';
import { get } from './helper/apiManager';
import UserCard from './component/cards/userCards';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await get('users');
    setUsers(response.map((user: User) => ({ ...user, follow: false })));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFollowToggle = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, follow: !user.follow } : user
      )
    );
  };

  const handleDelete = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 12, }}>
          <Grid mt="lg">
            {users.map((user) => (
              <Grid.Col key={user.id} span={{ base: 12, xs: 6, md: 3 }}>
                <UserCard
                  user={user}
                  onFollowToggle={handleFollowToggle}
                  onDelete={handleDelete}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}