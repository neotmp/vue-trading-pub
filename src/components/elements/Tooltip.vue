<script setup lang="ts"></script>

<template>
	<div class="relative w-max group mx-auto mt-12">
		<button
			type="button"
			class="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
		>
			Hover me
		</button>
		<div
			class="max-w-xs absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -top-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-bottom-1 before:left-0 before:right-0 before:mx-auto"
		>
			text
		</div>
	</div>
</template>
