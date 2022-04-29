let verificationValue = false;

capchaMainFunction(6);

function capchaMainFunction(number) {
	const body = document.querySelector('body')
	let darkBackgraund;
	let capchaWrapper;
	let btnAndInpWrapper
	let button
	let input
	const imgArr = ['a', 'b','c','d','e','f','g','h','i','j'];
	const imgSrc = "./img/kapcha/";
	let capchaCode = '';

	bodyLock();
	createModal ();
	createCapchaWrapper();
	createImages();
	createBtnAndInpWrapper()
	createInput();
	addbutton();
	
	function bodyUnlock() {
		body.style.cssText =  `
		overflow: auto;
		`;
	}
	
	function verification(){
		if(capchaCode === input.value) {
			darkBackgraund.remove()
			bodyUnlock()
			verificationValue = true
		} else {
			input.placeholder = 'wrong code';
			capchaCode = '';
			input.value = '';
			input.style.cssText =  `
			width: 65%;
			background: #ffffff;
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
			border: 1px solid rgb(49, 173, 49);
			padding: 5px;
			text-align: center;
			border: 1px solid rgb(255, 0, 0);
			`
			capchaWrapper.querySelectorAll('img').forEach(img => img.remove());
			createImages()
		}
	}

	function addbutton() {
		button = document.createElement("button");
		button.textContent = 'push me'
		button.style.cssText =  `
		width: 30%;
		background: rgb(49, 173, 49);
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
		border: 1px solid rgb(49, 173, 49);
		padding: 5px;
		text-align: center;
		color: #ffffff;
		cursor: pointer;
		`


		btnAndInpWrapper.append(button)
		button.onclick = verification
		
	}

	function createInput() {
		input = document.createElement("input");
		input.placeholder = 'enter verification code...'
		input.style.cssText =  `
		width: 65%;
		background: #ffffff;
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
		border: 1px solid rgb(49, 173, 49);
		padding: 5px;
		text-align: center;
		`
		
		btnAndInpWrapper.append(input)
	}

	function createBtnAndInpWrapper() {
		btnAndInpWrapper = document.createElement("div");
		btnAndInpWrapper.style.cssText =  `
		width: 50%;
		max-width: 400px;
		min-width: 280px;
		background: #ffffff;
		padding: 10px;
		`
		darkBackgraund.append(btnAndInpWrapper)

	}

	function createImages() {
		for (let i = 0; i < number; i++) {
			const randomInt = getRandomInt(0, 10);
			capchaCode += randomInt;
			const img = document.createElement('img');
			img.setAttribute('src', `${imgSrc}${imgArr[randomInt]}.jpg`);
			img.setAttribute('alt', `capcha item`);
			img.style.cssText =  `
				display: block;
				width: 17%;
				max-height: 70px;
				object-fit: contain;
				
			`
			capchaWrapper.append(img)
		}
	}

	function createCapchaWrapper() {
		capchaWrapper = document.createElement("div");
		capchaWrapper.style.cssText =  `
		width: 50%;
		max-width: 400px;
		min-width: 280px;
		min-height: auto;
		background: #ffffff;
		padding: 10px;
		display: flex;
		`
		darkBackgraund.append(capchaWrapper);
	};

	function createModal () {
		darkBackgraund = document.createElement("div");
		darkBackgraund.style.cssText =  `
		position:absolute;
		background: rgba(0, 0, 0, 0.600);
		top:0;
		left:0;
		right:0;
		bottom:0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		`;
		body.append(darkBackgraund);
	};

	function bodyLock() {
		body.style.cssText =  `
		overflow: hidden;
		`;
	};

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}
