/* https://www.programiz.com/online-compiler/3vCyhm1UDazmHУ вас есть следующий компонент, написанный на Vue 2 с многочисленными ошибками и несоответствиями style guide. Ваша задача:
	•	Найти и исправить ошибки.
	•	Переписать компонент с использованием Options API.
	•	Улучшить названия переменных, методы и стили кода, следуя лучшим практикам Vue.*/


<template>
	<div class="test-component">
		<h1> {{ displayName }}</h1>
		<button @click="IncreaseCount">Click Me!</button>
		<button @click="reset">Reset</button>
		<p> {{ count }}</p>
	</div>
</template>

<script>
export default {
	name: 'TestComponent',
	props: {
		username: {
			type: String,
			default: 'Default user'
		}
	},
	data() {
		return {
			count: 0,
			displayName: this.username
		}
	},
	methods: {
		IncreaseCount() {
			this.count++
		},
		// в коде был метод reset, но нигде не был задействован. Мертвый код нужно было удалить, но я решил оставить и сделать для него кнопку сброса счетчика
		reset() {
			this.count = 0
		}
	}
};
</script>

<style>
.test-component {
color:red
}
</style>
