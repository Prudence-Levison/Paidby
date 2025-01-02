
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const accessTokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJoZW5yeTA0MkB0ZWFtNzA3NzM4LnRlc3RpbmF0b3IuY29tIiwic3RhZmZfZW1haWwiOm51bGwsInN0YWZmX2lkIjpudWxsLCJhY2NvdW50X3R5cGUiOiJJTkRJVklEVUFMIiwiYWNjb3VudF9tb2RlIjoiUkVHSVNURVJFRCIsImlhdCI6MTczNTc2MDA3MiwiZXhwIjoxNzM1OTMyODcyfQ.CfdqnIsP9xit6pvULxzNISdK_pruYtWi9oUKR4T248A"

export const Dashboard = () => {

  const [isInitialized, setIsInitialized] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [accessToken, setAccessToken] = useState('');

  // useEffect(() => {
    // if (!accessToken) {
      // setAccessToken(accessTokenValue);
    // }
  // }, [accessToken]);

  useEffect(() => {
    if (!accessToken && !isInitialized) {
      setAccessToken(accessTokenValue);
      setIsInitialized(true);
    } else if (accessToken) {
      const fetchNotifications = async () => {
        try {
          const response = await axios.get('https://api-logic-dev.paidby.app/notification', {
            headers: {
              Authorization: `Bearer ${accessTokenValue}`,
            },
          });
          const data = response.data;
          setNotifications(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchNotifications();
    }
  }, [accessToken, isInitialized]);
  
  
  
  return (
    <div>
      <h1>Notifications</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification: Notification) => (
            <tr key={'https://api-logic-dev.paidby.app/notification'}>
              <td>{'https://api-logic-dev.paidby.app/notification'}</td>
              <td>{notification.message}</td>
              <td>{notification.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;