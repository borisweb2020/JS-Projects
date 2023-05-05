function getResult(distance, speed, step1, step2) {
		let speedDinosaur, speedPerfectDinosaur, timeDisplay;
		let timeDifference = 0;
		let hours, minutes, seconds;
		let isNegative = false;
		//*** Calculate time difference in seconds:
		speedPerfectDinosaur = distance / (step1 + speed);
		speedDinosaur = distance / (step2 + speed);
		timeDifference = Math.trunc(speedPerfectDinosaur - speedDinosaur);
		if (timeDifference < 0) {
				timeDifference = Math.abs(timeDifference);
				isNegative = true;
		}
		//*** Calculate Hours, Minutes, Seconds:
		if (timeDifference >= 3600) {
			hours = Math.trunc(timeDifference / 3600);
			if (hours < 10) {
					hours = `0${hours}`;
			}
			minutes = Math.trunc((timeDifference % 3600) / 60);
			if (minutes < 10) {
					minutes = `0${minutes}`;
			}
			seconds = (timeDifference % 3600) % 60;
			if (seconds < 10) {
					seconds = `0${seconds}`;
			}
		} else if (timeDifference >= 60) {
			hours = '00';
			minutes = Math.trunc(timeDifference / 60);
			if (minutes < 10) {
					minutes = `0${minutes}`;
			}
			seconds = timeDifference % 60;
			if (seconds < 10) {
					seconds = `0${seconds}`;
			}
		} else {
			hours = '00';
			minutes = '00';
			seconds = timeDifference;
			if (seconds < 10) {
					seconds = `0${seconds}`;
			}
		}

		timeDisplay = `+${hours}:${minutes}:${seconds}`;

		if (isNegative) {
				seconds = Math.abs(seconds);
				timeDisplay = `-${hours}:${minutes}:${seconds}`;
		}

		return timeDisplay;
}

console.log(getResult(100, 0.75, 0.5, 0.3));