import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";
import { FIREBASE_CONFIG } from '../config';

const app = initializeApp(FIREBASE_CONFIG);
const messaging = getMessaging(app);

export function requestPushPermision() {
	void Notification.requestPermission()
	.then((permission) => {
		if (permission === 'granted') {
			getToken(messaging, { vapidKey: process.env.FIREBASE_WEBPUSH_VAPID_KEY })
			.then((token: string) => {
				console.log('토큰입니다');
				console.log(token);
			})
			.catch((err) => {
				console.log(err);
			});
		}
		if (permission === 'denied') {
			console.log("Push permission blocked");
		}
	});
}