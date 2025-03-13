<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		default: 'Submit'
	},
	active: {
		type: Boolean,
		default: true
	},
	color: {
		type: String,
		default: 'blue'
	},
	loading: {
		type: Boolean,
		default: false
	}
})

function renderStyles(): string {
	switch (props.color) {
		case 'red':
			return props.active
				? `bg-red-500 hover:bg-red-600 dark:hover:bg-red-600`
				: `bg-red-300 dark:bg-red-300`
		case 'gray':
			return props.active
				? `bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-600`
				: `bg-gray-300 dark:bg-gray-300`
		case 'yellow':
			return props.active
				? `bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-yellow-600`
				: `bg-yellow-300 dark:bg-yellow-300`
		case 'green':
			return props.active
				? `bg-green-500 hover:bg-green-600 dark:hover:bg-green-600`
				: `bg-green-300 dark:bg-green-300`
		case 'sky':
			return props.active
				? `bg-sky-500 hover:bg-sky-600 dark:hover:bg-sky-600`
				: `bg-sky-300 dark:bg-sky-300`
		case 'indigo':
			return props.active
				? `bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-600`
				: `bg-indigo-300 dark:bg-indigo-300`
		default:
			return props.active
				? `bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600`
				: `bg-blue-300 dark:bg-blue-300`
	}
}
</script>

<template>
	<div class="flex items-center mt-4 gap-x-3">
		<div
			:class="`flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200
			 ${renderStyles()} rounded-lg shrink-0 sm:w-auto gap-x-2`"
		>
			<span v-if="props.loading">
				<svg
					class="animate-spin"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle opacity="0.5" cx="10" cy="10" r="9" stroke="white" stroke-width="2" />
					<mask id="path-2-inside-1_2527_20936" fill="white">
						<path
							d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z"
						/>
					</mask>
					<path
						d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z"
						stroke="white"
						stroke-width="4"
						mask="url(#path-2-inside-1_2527_20936)"
					/>
				</svg>
			</span>

			<span v-else>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</span>

			<span>{{ label }}</span>
		</div>
	</div>
</template>
