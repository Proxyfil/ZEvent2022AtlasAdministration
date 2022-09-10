/*
	========================================================================
	The 2022 /r/place Atlas

	An atlas of Reddit's 2022 /r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

const variationsConfig = {"default":{"name":"ZEvent2022 Place","code":"","default":54,"drawablePeriods":[0,54],"expansions":[],"versions":[{"timestamp":1662737400,"url":"https://media.discordapp.net/attachments/874044700309454858/1012703365999890503/Sans_titre.png?width=2000&height=2000"},{"timestamp":1662739214.203,"url":"https://zevent-cdn.mog.gg/zplace/full/1662736460886.png"},{"timestamp":1662739814.291,"url":"https://zevent-cdn.mog.gg/zplace/full/1662736460886.png"},{"timestamp":1662740414.584,"url":"https://zevent-cdn.mog.gg/zplace/full/1662740413919.png"},{"timestamp":1662741014.498,"url":"https://zevent-cdn.mog.gg/zplace/full/1662741013594.png"},{"timestamp":1662741614.714,"url":"https://zevent-cdn.mog.gg/zplace/full/1662741614089.png"},{"timestamp":1662742214.726,"url":"https://zevent-cdn.mog.gg/zplace/full/1662742213970.png"},{"timestamp":1662742814.79,"url":"https://zevent-cdn.mog.gg/zplace/full/1662742813548.png"},{"timestamp":1662743415.102,"url":"https://zevent-cdn.mog.gg/zplace/full/1662743414296.png"},{"timestamp":1662744014.953,"url":"https://zevent-cdn.mog.gg/zplace/full/1662744014229.png"},{"timestamp":1662744615.024,"url":"https://zevent-cdn.mog.gg/zplace/full/1662744613918.png"},{"timestamp":1662745215.133,"url":"https://zevent-cdn.mog.gg/zplace/full/1662745213640.png"},{"timestamp":1662745815.406,"url":"https://zevent-cdn.mog.gg/zplace/full/1662745814727.png"},{"timestamp":1662746415.312,"url":"https://zevent-cdn.mog.gg/zplace/full/1662746414383.png"},{"timestamp":1662747015.447,"url":"https://zevent-cdn.mog.gg/zplace/full/1662747014376.png"},{"timestamp":1662747689.868,"url":"https://zevent-cdn.mog.gg/zplace/full/1662747688800.png"},{"timestamp":1662748289.914,"url":"https://zevent-cdn.mog.gg/zplace/full/1662748288622.png"},{"timestamp":1662748890.247,"url":"https://zevent-cdn.mog.gg/zplace/full/1662748889200.png"},{"timestamp":1662749490.065,"url":"https://zevent-cdn.mog.gg/zplace/full/1662749489143.png"},{"timestamp":1662750090.142,"url":"https://zevent-cdn.mog.gg/zplace/full/1662750088857.png"},{"timestamp":1662750690.37,"url":"https://zevent-cdn.mog.gg/zplace/full/1662750689305.png"},{"timestamp":1662751290.4,"url":"https://zevent-cdn.mog.gg/zplace/full/1662751289582.png"},{"timestamp":1662751890.448,"url":"https://zevent-cdn.mog.gg/zplace/full/1662751888817.png"},{"timestamp":1662752490.545,"url":"https://zevent-cdn.mog.gg/zplace/full/1662752488655.png"},{"timestamp":1662753090.724,"url":"https://zevent-cdn.mog.gg/zplace/full/1662753090156.png"},{"timestamp":1662753691.21,"url":"https://zevent-cdn.mog.gg/zplace/full/1662753689793.png"},{"timestamp":1662754290.821,"url":"https://zevent-cdn.mog.gg/zplace/full/1662754289280.png"},{"timestamp":1662754891.143,"url":"https://zevent-cdn.mog.gg/zplace/full/1662754890457.png"},{"timestamp":1662755491.008,"url":"https://zevent-cdn.mog.gg/zplace/full/1662755489178.png"},{"timestamp":1662756091.328,"url":"https://zevent-cdn.mog.gg/zplace/full/1662756090278.png"},{"timestamp":1662756691.191,"url":"https://zevent-cdn.mog.gg/zplace/full/1662756690081.png"},{"timestamp":1662757291.347,"url":"https://zevent-cdn.mog.gg/zplace/full/1662757290808.png"},{"timestamp":1662757891.396,"url":"https://zevent-cdn.mog.gg/zplace/full/1662757890363.png"},{"timestamp":1662758491.592,"url":"https://zevent-cdn.mog.gg/zplace/full/1662758490625.png"},{"timestamp":1662759091.618,"url":"https://zevent-cdn.mog.gg/zplace/full/1662759090956.png"},{"timestamp":1662759691.701,"url":"https://zevent-cdn.mog.gg/zplace/full/1662759690942.png"},{"timestamp":1662760291.802,"url":"https://zevent-cdn.mog.gg/zplace/full/1662760291248.png"},{"timestamp":1662760891.975,"url":"https://zevent-cdn.mog.gg/zplace/full/1662760891449.png"},{"timestamp":1662761491.991,"url":"https://zevent-cdn.mog.gg/zplace/full/1662761491064.png"},{"timestamp":1662762092.125,"url":"https://zevent-cdn.mog.gg/zplace/full/1662762091586.png"},{"timestamp":1662762692.172,"url":"https://zevent-cdn.mog.gg/zplace/full/1662762686426.png"},{"timestamp":1662763292.283,"url":"https://zevent-cdn.mog.gg/zplace/full/1662763291043.png"},{"timestamp":1662763892.364,"url":"https://zevent-cdn.mog.gg/zplace/full/1662763891277.png"},{"timestamp":1662764492.454,"url":"https://zevent-cdn.mog.gg/zplace/full/1662764491824.png"},{"timestamp":1662765092.555,"url":"https://zevent-cdn.mog.gg/zplace/full/1662765091646.png"},{"timestamp":1662765692.626,"url":"https://zevent-cdn.mog.gg/zplace/full/1662765691008.png"},{"timestamp":1662766292.716,"url":"https://zevent-cdn.mog.gg/zplace/full/1662766291972.png"},{"timestamp":1662766892.82,"url":"https://zevent-cdn.mog.gg/zplace/full/1662766891777.png"},{"timestamp":1662767492.906,"url":"https://zevent-cdn.mog.gg/zplace/full/1662767490521.png"},{"timestamp":1662768093,"url":"https://zevent-cdn.mog.gg/zplace/full/1662768092233.png"},{"timestamp":1662768693.106,"url":"https://zevent-cdn.mog.gg/zplace/full/1662768690304.png"},{"timestamp":1662769293.203,"url":"https://zevent-cdn.mog.gg/zplace/full/1662769292564.png"},{"timestamp":1662769893.292,"url":"https://zevent-cdn.mog.gg/zplace/full/1662769892506.png"},{"timestamp":1662770493.396,"url":"https://zevent-cdn.mog.gg/zplace/full/1662770492582.png"},{"timestamp":1662771093.634,"url":"https://zevent-cdn.mog.gg/zplace/full/1662771090506.png"}],"icon":"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 11 11' aria-hidden='true'><polygon points='3 0 8 0 8 1 9 1 9 2 10 2 10 3 9 3 9 4 10 4 10 3 11 3 11 4 11 8 10 8 10 9 9 9 9 8 8 8 8 7 7 7 7 5 8 5 8 4 7 4 7 3 6 3 6 2 7 2 7 1 5 1 5 2 4 2 4 5 5 5 5 6 3 6 3 5 1 5 1 7 3 7 3 8 4 8 4 10 8 10 8 11 3 11 3 10 2 10 2 9 1 9 1 8 0 8 0 3 1 3 1 2 2 2 2 1 3 1 3 0'/><polygon points='8 9 8 10 9 10 9 9'/></svg>"}}

	//,
	//tfc: {
	//	name: "The Final Clean",
	//	code: "T",
	//	default: 0,
	//	drawablePeriods: [0, 0],
	//	versions: [
	//		{
	//			timestamp: "Final",
	//			url: "./img/canvas/tfc/final.png",
	//		},
	//	],
	//	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>'
	//}
	// },
	// streamerless: {
	// 	name: "Streamerless",
	// 	code: "S",
	// 	default: 0,
	// 	drawablePeriods: [0, 0],
	// 	versions: [
	// 		{
	// 			timestamp: "Streamerless",
	// 			url: "./img/canvas/streamerless/streamerless.png",
	// 		},
	// 	],
	// 	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>'
	// }

const codeReference = {}
const imageCache = {}

const variantsEl = document.getElementById("variants")

for (const variation in variationsConfig) {
	codeReference[variationsConfig[variation].code] = variation
	const optionEl = document.createElement('option')
	optionEl.value = variation
	optionEl.textContent = variationsConfig[variation].name
	variantsEl.appendChild(optionEl)
}

const timelineSlider = document.getElementById("timeControlsSlider")
const timelineList = document.getElementById("timeControlsList")
const tooltip = document.getElementById("timeControlsTooltip")
const image = document.getElementById("image")
let abortController = new AbortController()
let currentUpdateIndex = 0
let updateTimeout = setTimeout(null, 0)
let tooltipDelayHide = setTimeout(null, 0)

let currentVariation = "default"
const defaultPeriod = variationsConfig[currentVariation].default
const defaultVariation = currentVariation
let currentPeriod = defaultPeriod
window.currentPeriod = currentPeriod
window.currentVariation = currentVariation

// SETUP
timelineSlider.max = variationsConfig[currentVariation].versions.length - 1
timelineSlider.value = currentPeriod
timelineList.children[0].value = defaultPeriod

timelineSlider.addEventListener("input", (e) => timelineParser(e.target.value))

timelineSlider.addEventListener("wheel", function (e) {
	if (e.deltaY < 0) {
		this.valueAsNumber += 1;
		timelineParser(this.value)
	} else {
		this.value -= 1;
		timelineParser(this.value)
	}
	e.stopPropagation();
}, { passive: true })

function timelineParser(value) {
	updateTooltip(parseInt(value), currentVariation)
	clearTimeout(updateTimeout)
	updateTimeout = setTimeout(() => {
		updateTime(parseInt(timelineSlider.value), currentVariation)
		setTimeout(() => {
			if (timelineSlider.value != currentPeriod && abortController.signal.aborted) {
				updateTime(parseInt(timelineSlider.value), currentVariation)
			}
		}, 50)
	}, 25)
}

variantsEl.addEventListener("input", (event) => {
	updateTime(-1, event.target.value)
})

const dispatchTimeUpdateEvent = (period = timelineSlider.value, atlas = atlas) => {
	const timeUpdateEvent = new CustomEvent('timeupdate', {
		detail: {
			period: period,
			atlas: atlas
		}
	})
	document.dispatchEvent(timeUpdateEvent)
}

async function updateBackground(newPeriod = currentPeriod, newVariation = currentVariation) {
	abortController.abort()
	abortController = new AbortController()
	currentUpdateIndex++
	const myUpdateIndex = currentUpdateIndex
	const variationConfig = variationsConfig[newVariation]

	variantsEl.value = currentVariation
	if (variationConfig.icon) {
		variantsEl.previousElementSibling.innerHTML = variationConfig.icon
		variantsEl.previousElementSibling.classList.remove('d-none')
		variantsEl.parentElement.classList.add('input-group')
	} else {
		variantsEl.previousElementSibling.innerHTML = ""
		variantsEl.previousElementSibling.classList.add('d-none')
		variantsEl.parentElement.classList.remove('input-group')
	}

	const configObject = variationConfig.versions[currentPeriod]
	if (typeof configObject.url === "string") {
		if (imageCache[configObject.url] === undefined) {
			const fetchResult = await fetch(configObject.url, {
				signal: abortController.signal
			})
			if (currentUpdateIndex !== myUpdateIndex) {
				return [configObject, newPeriod, newVariation]
			}
			const imageBlob = await fetchResult.blob()
			imageCache[configObject.url] = URL.createObjectURL(imageBlob)
		}
		image.src = imageCache[configObject.url]
	} else {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		context.canvas.width = 500
		context.canvas.height = 500
		await Promise.all(configObject.url.map(async url => {
			if (imageCache[url] === undefined) {
				const fetchResult = await fetch(url, {
					signal: abortController.signal
				})
				if (currentUpdateIndex !== myUpdateIndex) {
					return
				}
				const imageBlob = await fetchResult.blob()
				imageCache[url] = URL.createObjectURL(imageBlob)
			}
		}))
		for await (const url of configObject.url) {
			const imageLayer = new Image()
			await new Promise(resolve => {
				imageLayer.onload = () => {
					context.drawImage(imageLayer, 0, 0)
					resolve()
				}
				imageLayer.src = imageCache[url]
			})
		}

		if (currentUpdateIndex !== myUpdateIndex) return [configObject, newPeriod, newVariation]
		const blob = await new Promise(resolve => canvas.toBlob(resolve))
		image.src = URL.createObjectURL(blob)
	}
}

async function updateTime(newPeriod = currentPeriod, newVariation = currentVariation, forcePeriod = false) {
	document.body.dataset.canvasLoading = ""

	if (!variationsConfig[newVariation]) newVariation = defaultVariation
	const variationConfig = variationsConfig[newVariation]

	if (newPeriod < 0) newPeriod = 0
	else if (newPeriod > variationConfig.versions.length - 1) newPeriod = variationConfig.versions.length - 1

	currentPeriod = newPeriod
	if (currentVariation !== newVariation) {
		currentVariation = newVariation
		timelineSlider.max = variationConfig.versions.length - 1
		if (!forcePeriod) {
			currentPeriod = variationConfig.default
			newPeriod = currentPeriod
		}
		if (variationConfig.versions.length === 1) bottomBar.classList.add('no-time-slider')
		else bottomBar.classList.remove('no-time-slider')
	}
	timelineSlider.value = currentPeriod
	updateTooltip(newPeriod, newVariation)

	await updateBackground(newPeriod, newVariation)

	atlas = []
	for (const atlasIndex in atlasAll) {
		let chosenIndex

		const validPeriods2 = Object.keys(atlasAll[atlasIndex].path)

		for (const i in validPeriods2) {
			const validPeriods = validPeriods2[i].split(', ')
			for (const j in validPeriods) {
				const [start, end, variation] = parsePeriod(validPeriods[j])
				if (isOnPeriod(start, end, variation, newPeriod, newVariation)) {
					chosenIndex = i
					break
				}
			}
			if (chosenIndex !== undefined) break
		}

		if (chosenIndex === undefined) continue
		const pathChosen = Object.values(atlasAll[atlasIndex].path)[chosenIndex]
		const centerChosen = Object.values(atlasAll[atlasIndex].center)[chosenIndex]

		if (pathChosen === undefined) continue

		atlas.push({
			...atlasAll[atlasIndex],
			path: pathChosen,
			center: centerChosen,
		})
	}

	dispatchTimeUpdateEvent(newPeriod, atlas)
	delete document.body.dataset.canvasLoading
	tooltip.dataset.forceVisible = ""
	clearTimeout(tooltipDelayHide)
	tooltipDelayHide = setTimeout(() => {
		delete tooltip.dataset.forceVisible
	}, 1000)

}

function updateTooltip(newPeriod, newVariation) {
	const configObject = variationsConfig[newVariation].versions[newPeriod]

	// If timestap is a number return a UTC formatted date otherwise use exact timestap label
	if (typeof configObject.timestamp === "number") tooltip.querySelector('div').textContent = new Date(configObject.timestamp * 1000).toString()
	else tooltip.querySelector('div').textContent = configObject.timestamp

	// Clamps position of tooltip to prevent from going off screen
	const timelineSliderRect = timelineSlider.getBoundingClientRect()
	let min = -timelineSliderRect.left + 12
	let max = (window.innerWidth - tooltip.offsetWidth) - timelineSliderRect.left + 4
	tooltip.style.left = Math.min(Math.max((timelineSlider.offsetWidth) * (timelineSlider.value) / (timelineSlider.max) - tooltip.offsetWidth / 2, min), max) + "px"
}

tooltip.parentElement.addEventListener('mouseenter', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

window.addEventListener('resize', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

function isOnPeriod(start, end, variation, currentPeriod, currentVariation) {
	if (start > end) [start, end] = [end, start]
	return currentPeriod >= start && currentPeriod <= end && variation === currentVariation
}

function parsePeriod(periodString) {
	let variation = defaultVariation
	periodString = periodString + ""
	if (periodString.split(':').length > 1) {
		const split = periodString.split(':')
		variation = codeReference[split[0]]
		periodString = split[1]
	}
	if (periodString.search('-') + 1) {
		let [start, end] = periodString.split('-').map(i => parseInt(i))
		if (start > end) [start, end] = [end, start]
		return [start, end, variation]
	} else if (codeReference[periodString]) {
		variation = codeReference[periodString]
		const defaultPeriod = variationsConfig[variation].default
		return [defaultPeriod, defaultPeriod, variation]
	} else {
		const periodNew = parseInt(periodString)
		return [periodNew, periodNew, variation]
	}
}

function formatPeriod(start, end, variation) {
	let periodString, variationString
	variationString = variationsConfig[variation].code
	if (start > end) [start, end] = [end, start]
	if (start === end) {
		if (start === variationsConfig[variation].default && variation !== defaultVariation) {
			periodString = ""
		}
		else periodString = start
	}
	else periodString = start + "-" + end
	if (periodString && variationString) return variationsConfig[variation].code + ":" + periodString
	if (variationString) return variationString
	return periodString
}
