<template>
  <div class="container">
    <div style="flex: 1;">
      <div class="input__div">
        <div class="input__wrapper">
          <input type="text" placeholder="Введите задачу" v-model="newTask" />
        </div>
        <div class="border"></div>
      </div>
      <button v-on:click="addtask">Добавить</button>
      <div class="task-list">
        <div v-for="task in tasks" class="list">
          <label class="material-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
          <div class="text">{{ task }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "taskList",
    data() {
      return {
        newTask: "",
        tasks: null
      };
    },
    methods: {
      addtask() {
        if (this.newTask.trim() == "") return;
        let task = this.newTask;
        this.tasks.push(task);
        this.newTask = "";
        console.log(this.tasks);
      }
    },
    created() {
      fetch('https://kodaktor.ru/j/tasklist')
        .then(response => response.json())
        .then(({
          list
        }) => (this.tasks = list));
    }
  };
</script>

<style>
  .container {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .task-list {
    padding: 8px 0;
  }

  .task-list .list:hover {
    background: #f7fcfa;
  }

  .task-list .list {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .task-list .list .text {
    padding: 0 8px;
    height: 35px;
    line-height: 35px;
    margin: 6px 0;
    cursor: default;
    flex: 1;
  }

  .task-list .list .text.completed {
    text-decoration: line-through;
  }

  .input__div {
    margin: 6px 0;
    position: relative;
    border: 1px solid #e4f5ef;
    flex: 1;
  }

  .input__div:focus-within .input__wrapper {
    background: #fff;
  }

  .input__div .input__wrapper {
    background: #f7fcfa;
    padding: 0 15px;
    transition: background 0.3s;
  }

  .input__div .input__wrapper input {
    height: 35px;
    background: 0 0;
    border: none;
    color: #2c3e50;
    display: block;
    font-family: inherit;
    font-size: 16px;
    line-height: 16px;
    outline: 0;
    padding: 0;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .input__div .border {
    background: #42b983;
    transition: all 0.18s;
    bottom: -1px;
    height: 2px;
    left: 30%;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 30%;
  }

  .input__div:focus-within .border {
    left: 0;
    right: 0;
    opacity: 1;
  }

  .material-checkbox {
    position: relative;
    display: inline-block;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
  }

  .material-checkbox>input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    position: absolute;
    z-index: -1;
    left: -5px;
    top: -5px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background-color: rgba(0, 0, 0, 0.42);
    outline: none;
    opacity: 0;
    transform: scale(1);
    -ms-transform: scale(0);
    /* Graceful degradation for IE */
    transition: opacity 0.5s, transform 0.5s;
  }

  .material-checkbox>input:checked {
    background-color: #2196f3;
  }

  .material-checkbox>input:disabled {
    opacity: 0;
  }

  .material-checkbox>input:disabled+span {
    cursor: initial;
  }

  .material-checkbox>span::before {
    content: "";
    display: inline-block;
    margin-right: 15px;
    border: solid 2px rgba(0, 0, 0, 0.42);
    border-radius: 2px;
    width: 14px;
    height: 14px;
    vertical-align: -4px;
    transition: border-color 0.5s, background-color 0.5s;
  }

  .material-checkbox>input:checked+span::before {
    border-color: #41b883;
    background-color: #41b883;
  }

  .material-checkbox>input:active+span::before {
    border-color: #41b883;
  }

  .material-checkbox>input:checked:active+span::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.42);
  }

  .material-checkbox>span::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 10px;
    border: solid 2px transparent;
    border-left: none;
    border-top: none;
    transform: translate(5.5px, 1px) rotate(45deg);
    -ms-transform: translate(5.5px, 2px) rotate(45deg);
  }

  .material-checkbox>input:checked+span::after {
    border-color: #fff;
  }
</style>