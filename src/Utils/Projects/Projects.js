import roboFriend from '../Project-Image/RoboFriends.png';
import smartBrain from '../Project-Image/SmartBrain.png';
import covidTracker from '../Project-Image/covidTracker.png';
import facebookMessengerClone from '../Project-Image/facebookMessengerClone.png'

export  const project_list = [

	{
		image: smartBrain,
		title: 'Face Recognition Brain',
		des:'Detecting face in image using Clarifai API',
		tags: [ 'HTML', 'CSS', 'React', 'JavaScript' ],
		links: {
			liveView: 'https://face-recog-brain-smartbrain.herokuapp.com/',
			github: 'https://github.com/akramansari1433/smart-brain.git'
		}
	},
	{
		image: covidTracker,
		title: 'Live Covid Tracker',
		des:'Live reports of covid-19 cases in India',
		tags: [ 'HTML', 'CSS', 'JavaScript' ],
		links: {
			liveView: 'https://akramansari1433.github.io/covid-tracker/',
			github: 'https://github.com/akramansari1433/covid-tracker.git'
		}
	},
	{
		image: facebookMessengerClone,
		title: 'Messenger Clone',
		des:'Chat in realtime like Facebook Messenger',
		tags: [ 'HTML', 'CSS', 'JavaScript' ,'FireBase'],
		links: {
			liveView: 'https://facebook-messenger-clone-8c9fa.web.app/',
			github: 'https://github.com/akramansari1433/facebook-messenger-clone.git'
		}
	},
	{
		image: roboFriend,
		title: 'RoboFriends',
		des:'Fetching robots online through API and searching robots',
		tags: [ 'HTML', 'CSS', 'React', 'JavaScript' ],
		links: {
			liveView: 'https://akramansari1433.github.io/RoboFriends/',
			github: 'https://github.com/akramansari1433/RoboFriends.git'
		}
	}
];
