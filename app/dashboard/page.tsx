'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';
import { getNotifications } from '../request/getNotification';
import Dashnavbar from '../components/Dashnavbar';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


interface Notification {
	id: number;
	body: string;
	created_at: string; 
	title: string
	meta_data: any;
    icon_type: string;
    has_read: boolean;
}

const accessTokenValue =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJoZW5yeTA0MkB0ZWFtNzA3NzM4LnRlc3RpbmF0b3IuY29tIiwic3RhZmZfZW1haWwiOm51bGwsInN0YWZmX2lkIjpudWxsLCJhY2NvdW50X3R5cGUiOiJJTkRJVklEVUFMIiwiYWNjb3VudF9tb2RlIjoiUkVHSVNURVJFRCIsImlhdCI6MTczNTc2MDA3MiwiZXhwIjoxNzM1OTMyODcyfQ.CfdqnIsP9xit6pvULxzNISdK_pruYtWi9oUKR4T248A';
	
export const Dashboard = () => {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [loading, setLoading] = useState(false);
	const [accessToken, setAccessToken] = useState('');
	const [checkedNotifications, setCheckedNotifications] = useState<{ [key: number]: boolean }>({});
	const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

	const dispatch = useDispatch<AppDispatch>();
	const router = useRouter();
  const pathname = usePathname();

    const storedAccessToken = localStorage.getItem('accessToken');
	const fetchNotifications = async () => {
		setLoading(true);
		try {
			const response = await dispatch(getNotifications()).unwrap();
			setNotifications(response?.data?.data?.legacy_v2?.data);
		  } catch (error: any) {
			console.error(error);
		  } finally {
			setLoading(false);
		  }
		};
		useEffect(() => {
			fetchNotifications();
		  }, []);


		  const handleRowClick = (notification: Notification) => {
			setSelectedNotification(notification);
		  };
		  const handleCheckboxChange = (notification: Notification) => {
			setCheckedNotifications((prevCheckedNotifications) => ({
			  ...prevCheckedNotifications,
			  [notification.id]: !prevCheckedNotifications[notification.id],
			}));
		  };
		

		  return (
			<div>
			  <Dashnavbar />
			  <div className="flex">
				<Sidebar />
				<div className="flex-grow bg-[#EEF3EE]">
				  {loading ? (
					<div className="flex justify-center pt-44">
					  <div className="spinner-border animate-spin inline-block pt-10 w-8 h-8 border-4 border-black rounded-full text-black" role="status">
						<span className="sr-only">Loading...</span>
					  </div>
					</div>
				  ) : (
					<table>
					  <thead>
						<tr>
						  <th className="pt-10 pl-10 text-3xl">Dashboard</th>
						</tr>
						<tr>
						  <th className="w-8">Select</th>
						  <th>Title</th>
						  <th>Body</th>
						  <th>Date & Time</th>
						</tr>
					  </thead>
					  <tbody>
						{notifications.map((notification: Notification) => (
						  <tr key={notification.id} onClick={() => handleRowClick(notification)}>
							<td className="pt-10 pl-10 py-0.5 w-8">
							  <input
								type="checkbox"
								checked={checkedNotifications[notification.id]}
								onChange={() => handleCheckboxChange(notification)}
								aria-label={`Checkbox for notification ${notification.id}`}
							  />
							</td>
							<td className="pt-10 text-left py-0.5 text-lg">
							  <span className="truncate">{notification.title}</span>
							</td>
							<td className="pt-10 text-left py-0.5 text-lg">
							  <span className="truncate">{notification.body}</span>
							</td>
							<td className="pt-10 text-left py-0.5 text-lg">
							  {notification.created_at ? (
								new Date(notification.created_at).toLocaleString()
							  ) : (
								'No date available'
							  )}
							</td>
						  </tr>
						))}
					  </tbody>
					</table>
				  )}
				</div>
			  </div>
			  {selectedNotification && (
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
				  <div className="bg-white p-10 rounded-md">
					<h2 className="text-lg font-bold py-2">{selectedNotification.title}</h2>
					<p className="text-base py-2">{selectedNotification.body}</p>
					<p className="text-sm">{selectedNotification.created_at}</p>
					<button
					  className="bg-[#7af1f1] hover:bg-[#41f2f2] text-black font-bold py-2 px-4 rounded my-3"
					  onClick={() => setSelectedNotification(null)}
					>
					  Close
					</button>
				  </div>
				</div>
			  )}
			</div>
		  );
		  
	}

export default Dashboard;
