'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';
import { getNotifications } from '../request/getNotification';
import Dashnavbar from '../components/Dashnavbar';
import Sidebar from '../components/Sidebar';

interface Notification {
	id: number;
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
		
		<div >
			<Dashnavbar />
			<div className='flex'>
			<Sidebar />
			<div className='flex-grow bg-[#EEF3EE]' >
			<table>
				<thead>
					<tr>
						<th className='pt-10 text-left pl-10 text-3xl'>Dashboard</th>
					
					</tr>
				</thead>
				<tbody className='lg  '> 
					{notifications.map((notification: Notification) => (
						<tr key={notification.id}>

							<td  className=' w-full  pt-10 text-left pl-10 py-0.5 text-lg'>{notification.body}</td>
						
						</tr>
					))}
				</tbody>
			</table>
		</div>
		</div>
	</div>
	);
};

export default Dashboard;
