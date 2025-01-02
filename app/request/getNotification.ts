
import { NextApiRequest, NextApiResponse } from 'next';

const getNotifications = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const response = await fetch('https://api-logic-dev.paidby.app/notification', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const notifications = await response.json();
    return res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getNotifications;