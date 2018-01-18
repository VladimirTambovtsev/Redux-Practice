import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiverMemes(json) {
	const { memes } = json.data;
	return {
		type: RECEIVE_MEMES,
		memes
	}
}
					
function fetchMemesJSON() {			// helper function
	return fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
}

export function fetchMemes() {
	return function(dispatch) {
		return fetchMemesJSON()
			.then(json => dispatch(receiverMemes(json)))
	}
}

export function newMeme(meme) {
	return {
		type: NEW_MEME,
		meme
	}
}

function postMemeJSON(params) {
	params['username'] = username;
	params['password'] = password;

	console.log(params)

	const bodyParams = Object.keys(params).map(key => {
		return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
	}).join('&');

	console.log(bodyParams);

	return fetch('https://api.imgflip.com/caption_image', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: bodyParams
	}).then(res => res.json());
}


export function createMem(new_mem_object) {
	return function(dispatch) {
		return postMemeJSON(new_mem_object)
			.then(new_meme => dispatch(newMeme(new_meme)))
	}
}

