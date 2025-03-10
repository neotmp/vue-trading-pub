<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import { localData } from './eur_usd'

/*
 * There are example components in both API styles: Options API, and Composition API
 *
 * Select your preferred style from the imports below:
 */

import CandleStickComponent from '@/components/CandleStickComponent.vue'
// import LWChart from './components/options-api/LWChart.vue';

type TSampleData =
	| { time: number; low: number; high: number; open: number; close: number }
	| { time: number; value: number }

/**
 * Generates sample data for the lightweight chart
 * @param  {Boolean} ohlc Whether generated dat should include open, high, low, and close values
 * @returns {Array} sample data
 */
function generateSampleData(ohlc: boolean): TSampleData[] {
	const randomFactor = 25 + Math.random() * 25
	function samplePoint(i: number) {
		return (
			i *
				(0.5 +
					Math.sin(i / 10) * 0.2 +
					Math.sin(i / 20) * 0.4 +
					Math.sin(i / randomFactor) * 0.8 +
					Math.sin(i / 500) * 0.5) +
			200
		)
	}

	const res = []
	const date = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))
	const numberOfPoints = ohlc ? 200 : 500
	for (let i = 0; i < numberOfPoints; ++i) {
		const time = date.getTime() / 1000
		const value = samplePoint(i)
		if (ohlc) {
			const randomRanges = [-1 * Math.random(), Math.random(), Math.random()].map((i) => i * 10)
			const sign = Math.sin(Math.random() - 0.5)
			res.push({
				time,
				low: value + randomRanges[0],
				high: value + randomRanges[1],
				open: value + sign * randomRanges[2],
				close: samplePoint(i + 1)
			})
		} else {
			res.push({ time, value })
		}

		date.setUTCDate(date.getUTCDate() + 1)
	}

	console.log(res, 'res')

	return res
}

const chartType = ref('line')

function convertdata(): TSampleData[] {
	//console.log("I'm called", chartType.value, 'type')
	let res = []
	if (chartType.value === 'candlestick' || chartType.value === 'bar') {
		//console.log('IF', chartType.value, 'type')
		const ld = localData

		//console.log('IF', chartType.value, 'type', ld)

		for (let i = 0; i < localData.length; ++i) {
			//console.log('IF2', ld[i])
			const t = new Date(ld[i].date)
			const time = t.getTime() / 1000

			//console.log('IF3', time)

			res.push({
				time: time,
				open: ld[i].open,
				high: ld[i].high,
				low: ld[i].low,
				close: ld[i].close
			})
		}
	} else {
		res = generateSampleData(false)
	}

	return res
}

const chartOptions = ref({})
//const data = ref(generateSampleData(false))
const data = ref(convertdata())
const seriesOptions = ref({ color: 'rgb(45, 77, 205)' })

const lwChart = ref()

function randomShade() {
	return Math.round(Math.random() * 255)
}

const randomColor = (alpha = 1) => {
	return `rgba(${randomShade()}, ${randomShade()}, ${randomShade()}, ${alpha})`
}

const colorsTypeMap: { [key: string]: (string | number)[][] } = {
	area: [
		['topColor', 0.4],
		['bottomColor', 0],
		['lineColor', 1]
	],
	bar: [
		['upColor', 1],
		['downColor', 1]
	],
	baseline: [
		['topFillColor1', 0.28],
		['topFillColor2', 0.05],
		['topLineColor', 1],
		['bottomFillColor1', 0.28],
		['bottomFillColor2', 0.05],
		['bottomLineColor', 1]
	],
	candlestick: [
		['upColor', 1],
		['downColor', 1],
		['borderUpColor', 1],
		['borderDownColor', 1],
		['wickUpColor', 1],
		['wickDownColor', 1]
	],
	histogram: [['color', 1]],
	line: [['color', 1]]
}

// Set a random colour for the series as an example of how
// to apply new options to series. A similar appraoch will work on the
// option properties.
const changeColors = () => {
	const options: { [key: string]: string | number | undefined } = { color: '' }
	const colorsToSet = colorsTypeMap[chartType.value]
	colorsToSet.forEach((c) => {
		options[c[0]] = randomColor(c[1])
	})
	seriesOptions.value = options
}

const changeData = () => {
	const candlestickTypeData = ['candlestick', 'bar'].includes(chartType.value)
	//const newData = generateSampleData(candlestickTypeData)

	const newData = convertdata()
	data.value = newData

	console.log(data.value, 'data value')
	if (chartType.value === 'baseline') {
		const average =
			newData.reduce((s, c) => {
				return s + c.value
			}, 0) / newData.length
		seriesOptions.value = { baseValue: { type: 'price', price: average } }
	}
}

const changeType = () => {
	const types = ['line', 'area', 'baseline', 'histogram', 'candlestick', 'bar'].filter(
		(t) => t !== chartType.value
	)
	const randIndex = Math.round(Math.random() * (types.length - 1))
	chartType.value = types[randIndex]
	console.log(chartType.value, 'chart Type')
	changeData()

	// call a method on the component.
	lwChart.value.fitContent()
}
</script>

<template>
	<div class="container px-4 mx-auto h-1/2 mt-4">
		<CandleStickComponent
			:type="chartType"
			:data="data"
			:autosize="true"
			:chart-options="chartOptions"
			:series-options="seriesOptions"
			ref="lwChart"
		/>
		<div class="flex space-x-2">
			<button class="bg-green-300 p-2 rounded-md" type="button" @click="changeColors">
				Set Random Colors
			</button>
			<button class="bg-green-300 p-2 rounded-md" type="button" @click="changeType">
				Change Chart Type
			</button>
			<button class="bg-green-300 p-2 rounded-md" type="button" @click="changeData">
				Change Data
			</button>
			<button class="bg-green-300 p-2 rounded-md" type="button" @click="convertdata">
				ConverData
			</button>
		</div>
	</div>
</template>
<style scoped>
.chart-container {
	height: calc(85% - 3.2em);
}
</style>
