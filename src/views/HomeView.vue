<script setup lang="ts"></script>

<template>
  <main>
    <div>hi there</div>
    <div class="space-y-5 p-3">
      <div class="bg-green-400 p-2">Account Information</div>
      <div>Graph that would show historic info about specific balance item or multiple graphs?</div>
      <div class="bg-gray-200 space-y-2 p-2">
        <div>Balance: 100</div>
        <div>P&L: -10 USD</div>
        <div>Open Positions: 3</div>
        <div>Open Short positions: 2</div>
        <div>Open Long positions: 1</div>
        <div>Margin: 15 USD</div>
        <div>Free Margin: 75</div>
        <div>Margin level: 899%</div>
      </div>

      <div class="">Show List of open positions</div>
      <div class="bg-gray-100 p-2">
        Date, Pair, Price, Size, Direction, Margin, CurrentPrice, Swap, Change, P&L
      </div>
      <div>2025-02-10, EURUSD, 1.04523, 0.01, BUY, 5.12, 1.05523, -1.00, 0.4%, 9.00</div>
      <div class="bg-red-300">FUNCTIONALITY</div>
      <div>Add open position</div>
      <div>Close Position</div>
    </div>
  </main>
</template>
