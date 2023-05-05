function getResult(distance, speed, step1, step2) {
		let totalTime, speedDinosaur, speedPerfectDinosaur, timeDisplay;
		let timeDifference = 0;
		totalTime = distance / speed;
		speedPerfectDinosaur = step1 / totalTime;
		speedDinosaur = step2 / totalTime;

		timeDifference = (speedDinosaur - speedPerfectDinosaur) * 10000;
		timeDisplay = `00:00:${timeDifference}`;
		return timeDisplay;
}

console.log(getResult(100, 0.75, 0.5, 0.3));