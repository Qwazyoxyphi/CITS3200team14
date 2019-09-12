<template>
	<div class = "buttons">
		<TheSaveButton class="first-button" />
		<DiagramButton class="second-button" />
	</div>
</template>

<script>
import TheShareButton from '@/components/DiagramPage/DiagramSidebar/TheShareButton'
import TheSaveButton from '@/components/DiagramPage/DiagramSidebar/TheSaveButton'
export default {
	components : {
		TheShareButton,
		TheSaveButton
	}
}
</script>

<style scoped>
	.buttons {
		margin: 0px;
		display: flex;
		justify-content: center;
	}

	.first-button {
		margin: 5px;
	}

	.second-button {
		margin: 5px;
	}

</style>