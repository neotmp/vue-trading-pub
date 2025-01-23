<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref(['ever', 'fire'])
const hide = ref(false)

// onMounted(async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await res.json()
//     tasks.value = data.map((task: any) => task.title)

//     console.log(data, 'data')
//   } catch (error) {
//     console.log(error)
//   }
// })
</script>

<template>
  <div class="p-5">
    <div class="bg-green-300 p-5">
      BLOCK #1 MAIN Statistics Overall
      <div>Total net Profit</div>
      <div>Profit Factor</div>
      <div>Recovery Factor</div>
      <div>Balance Drawdown</div>
      <div>Balance Drawdown Absolute</div>
      <div>Total Trades</div>
      <div>RESULTS</div>
      <div>Gross Profit</div>
      <div>Expected Payoff</div>
      <div>Sharpe Ratio</div>
      <div>Balance Drawdown Maximum</div>
      <div>Short Trades (won %)</div>
      <div>Profit Trades (% of total)</div>
      <div>Largest Profit Trade</div>
      <div>Avarage Profit Trade</div>
      <div>Maximum Consecutive Wins ($)</div>
      <div>Maximum Consecutive Profit (count)</div>
      <div>Avarage Consecutive Wins</div>
      <div>====</div>
      <div>Gross Loss</div>
      <div>Balance Drawdown Relative</div>
      <div>Long Trades (won %)</div>
      <div>Loss Trades (of total %)</div>
      <div>Largest Loss Trade</div>
      <div>Average Loss Trade</div>
      <div>Maximum Consecutive Losses ($)</div>
      <div>Maximum Consecutive loss (count)</div>
      <div>Average Consecutive Losses</div>
      <div></div>
    </div>
    <div class="bg-red-300 p-5">
      BLOCK #2
      <div>Balance</div>
      <div>Credit Facility</div>
      <div>Floating P/L</div>
      <div>Equity</div>
      <div>Free Margin</div>
      <div>Margin</div>
      <div>Margin Level</div>
      <div>Graphs</div>
    </div>
    <div class="bg-yellow-300 p-5">
      BLOCK #3 Table of Trades

      <table>
        <thead>
          <tr class="text-center border-t border-b">
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">Time</td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Position
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Symbol
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">Type</td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Volume
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Price
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">Time</td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Price
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Commission
            </td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">Swap</td>
            <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
              Profit
            </td>

            <td
              class="hidden lg:block p-2 border-r bg-gray-100 text-sm font-semibold border-l text-start"
            >
              S/L
            </td>
            <td class="p-2 border-r bg-gray-100 text-sm font-semibold border-l text-start">T/P</td>
          </tr>
        </thead>
        <tbody>
          <tr key="{index}" class="hover:bg-gray-50 border-b">
            <td class="p-2 border-r border-l">rtrt</td>
            <td class="p-2 text-sm border-r">rtrt</td>
            <td class="p-2 text-sm border-r">trtr</td>
            <td class="p-2 text-sm border-r">trt</td>
            <td class="p-2 text-sm border-r">rtrt</td>
            <td class="p-2 text-sm border-r">323</td>
            <td class="p-2 text-sm border-r">323</td>
            <td class="p-2 text-sm border-r">323</td>
            <td class="p-2 text-sm border-r">323</td>
            <td class="p-2 text-sm border-r">323</td>
            <td class="p-2 text-sm border-r">323</td>

            <td class="p-2 hidden lg:block text-sm border-r">434</td>
            <td class="p-2 text-sm border-r">444</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="bg-red-400 mt-5 p-3 rounded-md shadow-md" @click="hide = !hide">
      {{ !hide ? 'Show' : 'Hide' }} List
    </button>
    <div v-if="hide">Home List:</div>
    <div v-if="hide">
      <div v-for="(word, index) in tasks" :key="word">{{ word }}: {{ index + 1 }}</div>
    </div>
  </div>
</template>
