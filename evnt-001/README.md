### [https://kodaktor.ru/evnt_fc3ce](https://kodaktor.ru/evnt_fc3ce)

Иной способ
	1. Выделить элемент и в Event Listener нажать на кнопку Remove
	или
	1. В консоли
```javascript
	document.querySelector('h1')
	  .removeEventListener('mousemove', getEventListeners(
	    document.querySelector('h1')).mousemove[0].listener)
```
	2. {once: true}