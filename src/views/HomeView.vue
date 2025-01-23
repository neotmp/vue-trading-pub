<template>
  <div class="bg-gray-200 p-3">
    <div class="bg-amber-400 p-3">JJ</div>
    <div class="flex p-3">
      <div class="bg-green-200 p-4 rounded-md w-1/5 min-w-32">Health panel</div>
      <div class="bg-red-200 p-4 rounded-md w-full">
        <div class="bg-rose-400 rounded-md p-3">Monitor Panel</div>
        <div class="bg-amber-200 p-3 rounded-md">
          <div>List of Trades</div>
          <div class="p-5">
            Table of Trades

            <table>
              <thead>
                <tr class="text-center border-t border-b">
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Time
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Position
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Symbol
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Type
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Volume
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Price
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Time
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Price
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Commission
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Swap
                  </td>
                  <td class="p-2 bg-gray-100 text-sm font-semibold border-r border-l text-start">
                    Profit
                  </td>

                  <td
                    class="hidden lg:block p-2 border-r bg-gray-100 text-sm font-semibold border-l text-start"
                  >
                    S/L
                  </td>
                  <td class="p-2 border-r bg-gray-100 text-sm font-semibold border-l text-start">
                    T/P
                  </td>
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
        </div>
      </div>
      <div class="bg-blue-200 p-4 rounded-md min-w-32 w-1/5">News Panel</div>
    </div>
  </div>
</template>
