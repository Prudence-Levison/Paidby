'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';
import { getNotifications } from '../request/getNotification';
import Dashnavbar from '../components/Dashnavbar';

interface Notification {
	id: number;
	message: string;
	timestamp: string;
	body: string;
}

const accessTokenValue =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJoZW5yeTA0MkB0ZWFtNzA3NzM4LnRlc3RpbmF0b3IuY29tIiwic3RhZmZfZW1haWwiOm51bGwsInN0YWZmX2lkIjpudWxsLCJhY2NvdW50X3R5cGUiOiJJTkRJVklEVUFMIiwiYWNjb3VudF9tb2RlIjoiUkVHSVNURVJFRCIsImlhdCI6MTczNTc2MDA3MiwiZXhwIjoxNzM1OTMyODcyfQ.CfdqnIsP9xit6pvULxzNISdK_pruYtWi9oUKR4T248A';

export const Dashboard = () => {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [accessToken, setAccessToken] = useState('');

	const dispatch = useDispatch<AppDispatch>();



	const fetchNotifications = async () => {
		const response = await dispatch(getNotifications()).unwrap();

		setNotifications(response?.data?.data?.legacy_v2?.data);
	};

	useEffect(() => {
		fetchNotifications();
	}, []);

	return (
		
		<div>
			<Dashnavbar />
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
						<tr key={notification.id}>
							<td>{notification.body}</td>
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
