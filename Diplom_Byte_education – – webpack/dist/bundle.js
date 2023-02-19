/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_5/./src/style/style.css?");

/***/ }),

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOKEN_KEY\": () => (/* binding */ TOKEN_KEY),\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nconst TOKEN_KEY = \"token\";\n\nclass ApiError extends Error {\n  constructor({message, data, status}) {\n    super(message);\n    this.status = status;\n    this.data = data;\n  }\n}\n\nclass API {\n  constructor() {\n    this.baseUrl = \"https://byte-tasks.herokuapp.com/api\";\n    this.headers = {\n      Authorization: null,\n      \"Content-Type\": \"application/json\",\n    };\n  }\n\n  async handleErrors(response) {\n    const { ok, status, statusText } = response;\n\n    if (!ok) {\n      \n      throw new ApiError({\n        message: \"Error! \",\n        data: await response.json(),\n        status: status\n      })\n    }\n  }\n\n  async register(data) {\n    const response = await fetch(`${this.baseUrl}/auth/register`, {\n      method: \"POST\",\n      headers: this.headers,\n      body: JSON.stringify(data),\n    });\n\n    await this.handleErrors(response);\n\n    const registeredUser = await response.json();\n\n    return registeredUser;\n  }\n\n  async login(data) {\n    const response = await fetch(`${this.baseUrl}/auth/login`, {\n      method: \"POST\",\n      headers: this.headers,\n      body: JSON.stringify(data),\n    });\n\n    await this.handleErrors(response);\n\n    const { token } = await response.json();\n\n    this.headers.Authorization = `Bearer ${token}`;\n    localStorage.setItem(TOKEN_KEY, token);\n  }\n\n  async getSelf() {\n    const response = await fetch(`${this.baseUrl}/auth/user/self`, {\n      method: \"GET\",\n      headers: this.headers,\n    });\n\n    await this.handleErrors(response);\n\n    const user = await response.json();\n\n    // ...handleErrors\n\n    return user;\n  }\n\n  isLoggedIn() {\n    return Boolean(localStorage.getItem(TOKEN_KEY));\n  }\n\n  autoLogin() {\n    const localToken = localStorage.getItem(TOKEN_KEY);\n    this.headers.Authorization = `Bearer ${localToken}`;\n\n    return this.getSelf();\n  }\n\n  async createTask(data) {\n    const response = await fetch(`${this.baseUrl}/task`, {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: this.headers,\n    });\n\n    await this.handleErrors(response);\n\n    return response.json();\n  }\n\n  async getAllTasks() {\n    const response = await fetch(`${this.baseUrl}/task`, {\n      method: \"GET\",\n      headers: this.headers,\n    });\n\n    await this.handleErrors(response);\n    \n    return await response.json();\n  }\n\n  async editTask(id, data) {\n    const res = await fetch(`${this.baseUrl}/task/${id}`, {\n      method: \"PATCH\",\n      body: JSON.stringify(data),\n      headers: this.headers,\n    });\n\n    await this.handleErrors(res);\n\n    return res.json();\n  }\n\n  async deleteTask(id) {\n    const res = await fetch(`${this.baseUrl}/task/${id}`, {\n      method: \"DELETE\",\n      headers: this.headers,\n    });\n\n    await this.handleErrors(res);\n\n    return res;\n  }\n\n  logout() {\n    localStorage.removeItem(TOKEN_KEY);\n  }\n}\n\nconst api = new API();\n\n//# sourceURL=webpack://webpack_5/./src/components/API.js?");

/***/ }),

/***/ "./src/components/Auth.js":
/*!********************************!*\
  !*** ./src/components/Auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auth\": () => (/* binding */ Auth)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n/* harmony import */ var _formConfigs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formConfigs */ \"./src/components/formConfigs.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n\n\nconst getLoginForm = (onSucces) =>\n  new _Form__WEBPACK_IMPORTED_MODULE_1__.Form({\n    title: \"Login\",\n    inputs: _formConfigs__WEBPACK_IMPORTED_MODULE_3__.loginConfig.map((input) => new _Input__WEBPACK_IMPORTED_MODULE_2__.Input(input)),\n    submitBtnText: \"Submit\",\n    onSubmit: async (data) => {\n      await _API__WEBPACK_IMPORTED_MODULE_0__.api.login(data);\n      onSucces();\n    },\n  });\n\nconst getRegisterForm = (onSuccess) =>\n  new _Form__WEBPACK_IMPORTED_MODULE_1__.Form({\n    title: \"Register\",\n    inputs: _formConfigs__WEBPACK_IMPORTED_MODULE_3__.registerConfig.map((input) => new _Input__WEBPACK_IMPORTED_MODULE_2__.Input(input)),\n    submitBtnText: \"Submit\",\n    onSubmit: async (data) => {\n      await _API__WEBPACK_IMPORTED_MODULE_0__.api.register(data);\n      onSuccess();\n    },\n  });\n\nclass Auth {\n  constructor({ appContainer, onLoginSucces }) {\n    this.appContainer = appContainer;\n\n    this.formContainer = document.createElement(\"div\");\n    this.switchBtn = document.createElement(\"button\");\n    this.logoutBtn = document.createElement(\"button\");\n    this.avatar = document.createElement(\"span\");\n\n    this.form = null;\n    this.user = null;\n    this.isLogin = true; // login | register\n\n    this.loginForm = getLoginForm(onLoginSucces);\n    this.registerForm = getRegisterForm(this.switchForms.bind(this));\n\n    this.createFormContainer();\n    this.createHeaderControls();\n  }\n\n  createFormContainer() {\n    this.formContainer.classList.add(\"auth-form\");\n    this.switchBtn.classList.add(\"btn\", \"btn-text\");\n    this.switchBtn.innerText = \"Register\";\n    this.formContainer.prepend(this.switchBtn);\n\n    this.switchBtn.addEventListener(\"click\", () => {\n      this.switchForms();\n    });\n  }\n\n  createHeaderControls() {\n    this.logoutBtn.classList.add(\"btn\", \"btn-text\");\n    this.logoutBtn.innerText = \"Logout\";\n    this.avatar.classList.add(\"avatar\");\n\n    this.logoutBtn.addEventListener(\"click\", () => {\n      this.logout();\n      _API__WEBPACK_IMPORTED_MODULE_0__.api.logout();\n      _index__WEBPACK_IMPORTED_MODULE_4__.taskBoard.logout();\n    });\n  }\n\n  renderHeaderControls() {\n    const controlsContainer = document.getElementById(\"header-controls\");\n    this.avatar.innerText = this.user.name[0];\n\n    controlsContainer.append(this.logoutBtn, this.avatar);\n  }\n\n  renderAuthForm() {\n    console.log(`this`, this);\n    console.log(`this.appContainer`, this.appContainer);\n\n    if (this.form) {\n      this.form.form.remove();\n    }\n\n    if (this.isLogin) {\n      this.form = this.loginForm;\n    } else {\n      this.form = this.registerForm;\n    }\n\n    this.form.render(this.formContainer);\n    this.appContainer.append(this.formContainer);\n  }\n\n  switchForms() {\n    console.log(`this`, this);\n    this.isLogin = !this.isLogin;\n\n    if (this.isLogin) {\n      this.switchBtn.innerText = \"Register\";\n    } else {\n      this.switchBtn.innerText = \"Login\";\n    }\n\n    this.renderAuthForm();\n  }\n\n  logout() {\n    this.avatar.remove();\n    this.logoutBtn.remove();\n    this.appContainer.innerHTML = \"\";\n    this.idLogin = true;\n\n    this.renderAuthForm();\n  }\n}\n\n//# sourceURL=webpack://webpack_5/./src/components/Auth.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\n  constructor(options) {\n    const { inputs } = options;\n\n    this.submitBtn = document.createElement(\"button\");\n    this.inputs = inputs;\n    this.form = document.createElement(\"form\");\n    this.createForm(options);\n  }\n\n  static getFormValues(inputs) {\n    return inputs.reduce((values, input) => {\n      console.log(`input`, input);\n      values[input.name] = input.value;\n      return values;\n    }, {});\n  }\n\n  createForm({ onSubmit, submitBtnText, title: titleText }) {\n    const title = document.createElement(\"h3\");\n\n    title.innerText = titleText;\n    this.submitBtn.type = \"submit\";\n    this.submitBtn.innerText = submitBtnText;\n\n    title.classList.add(\"form-title\");\n    this.submitBtn.classList.add(\"btn\", \"btn-form\");\n\n    this.form.addEventListener(\"submit\", async (event) => {\n      event.preventDefault();\n\n      this.formValues = Form.getFormValues(this.inputs);\n\n      this.submitBtn.setAttribute(\"disabled\", \"\");\n\n      try {\n        await onSubmit(this.formValues, event);\n      } catch (err) {\n        console.log(`err`, err.data);\n        err.data.details.forEach(({ path, message }) => {\n          // найти инпут\n          const erroredInput = this.inputs.find((input) => {\n            return input.name === path[0];\n          });\n\n          erroredInput.updateErrorMessage(message);\n\n          // вывести сообщение в инпуте\n        });\n      }\n\n      this.submitBtn.removeAttribute(\"disabled\");\n    });\n\n    this.form.append(title);\n\n    this.inputs.forEach((input) => {\n      input.render(this.form);\n    });\n\n    this.form.append(this.submitBtn);\n  }\n\n  render(container) {\n    container.append(this.form);\n  }\n}\n\n//# sourceURL=webpack://webpack_5/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\n  constructor(options) {\n    const {\n      name,\n      placeholder,\n      label,\n      type = \"text\",\n      onInput,\n      onChange,\n    } = options;\n\n    this.input = document.createElement(\"input\");\n    this.errorMessageElement = document.createElement(\"span\");\n\n    this.name = name;\n    this.input.name = name;\n    this.input.type = type;\n\n    this.input.placeholder = placeholder;\n    this.label = label;\n    this.value = this.input.value;\n\n    this.control = this.createControl(onInput, onChange);\n  }\n\n  createControl(onInput, onChange) {\n    const container = document.createElement(\"div\");\n    const label = document.createElement(\"label\");\n\n    const inputId = `_${this.name}`;\n\n    container.classList.add(\"text-control\");\n    this.errorMessageElement.classList.add(\"input-error\");\n    this.input.classList.add(\"input\");\n\n    this.input.id = inputId;\n    label.setAttribute(\"for\", inputId);\n\n    label.innerText = this.label;\n\n    container.append(label, this.input, this.errorMessageElement);\n\n    this.input.addEventListener(\"input\", (event) => {\n      this.value = event.target.value;\n      this.updateErrorMessage(\"\");\n      if (onInput) {\n        onInput(event);\n      }\n    });\n\n    if (onChange) {\n      this.input.addEventListener(\"change\", (event) => {\n        onChange(event);\n      });\n    }\n\n    return container;\n  }\n\n  updateErrorMessage(message) {\n    this.errorMessageElement.innerText = message;\n  }\n\n  render(container) {\n    container.append(this.control);\n  }\n}\n\n\n//# sourceURL=webpack://webpack_5/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n\n\nclass Task {\n  constructor({\n    name,\n    description,\n    timeTracked,\n    isActive,\n    isFinished,\n    _id,\n    createdAt,\n  }) {\n    this.name = name;\n    this.description = description;\n    this.timeTracked = timeTracked;\n    this.isActive = isActive;\n    this.isFinished = isFinished;\n    this.createdAt = new Date(createdAt);\n\n    this.id = _id;\n\n    this.taskCard = document.createElement(\"div\");\n    this.deleteBtn = document.createElement(\"button\");\n    this.timerBtn = document.createElement(\"button\");\n    this.timeTrackedElement = document.createElement(\"span\");\n    this.markAsDoneBtn = document.createElement(\"button\");\n    this.timeTrakedIntervalId = null;\n  }\n\n  renderCard(container) {\n    const titleElem = document.createElement(\"h3\");\n    const descriptionElem = document.createElement(\"p\");\n    const timeTracker = document.createElement(\"div\");\n    const dateElement = document.createElement(\"p\");\n\n    titleElem.classList.add(\"task-title\");\n    descriptionElem.classList.add(\"task-description\");\n    timeTracker.classList.add(\"time-tracker\");\n    dateElement.classList.add(\"task-date\");\n\n    this.taskCard.classList.add(\"task-card\");\n    this.deleteBtn.classList.add(\"task-delete-btn\");\n    this.timerBtn.classList.add(\"timer-btn\");\n    this.markAsDoneBtn.classList.add(\"btn\", \"btn-form\", \"btn-small\");\n\n    if (this.isFinished) {\n      this.timerBtn.setAttribute(\"disabled\", '');\n      this.taskCard.classList.add(\"task-finished\");\n      this.markAsDoneBtn.innerText = \"Restart\";\n    } else {\n      this.timerBtn.classList.add(\n        this.isActive ? \"timer-btn-stop\" : \"timer-btn-play\"\n      );\n      this.markAsDoneBtn.innerText = \"Mark as done\";\n    }\n\n    titleElem.innerText = this.name;\n    descriptionElem.innerText = this.description;\n\n    dateElement.innerText = Task.getFormattedDate(this.createdAt);\n    this.timeTrackedElement.innerText = Task.getFormattedTimeTracked(\n      this.timeTracked\n    );\n\n    this.deleteBtn.innerHTML = '<i class=\"fas fa-times\"></i>';\n\n    if (this.isActive) {\n      this.startTracker();\n      this.timerBtn.innerHTML = `<i class=\"fas fa-pause\"></i>`;\n    } else {\n      this.timerBtn.innerHTML = `<i class=\"fas fa-play\"></i>`;\n    }\n\n    timeTracker.append(this.timerBtn, this.timeTrackedElement);\n\n    this.taskCard.append(\n      titleElem,\n      descriptionElem,\n      timeTracker,\n      dateElement,\n      this.markAsDoneBtn,\n      this.deleteBtn\n    );\n\n    container.append(this.taskCard);\n\n    this.timerBtn.addEventListener(\"click\", this.toggleTimeTracker);\n    this.deleteBtn.addEventListener(\"click\", this.removeTask);\n    this.markAsDoneBtn.addEventListener(\"click\", this.toggleTaskFinished);\n  }\n\n  removeTask = async () => {\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.deleteTask(this.id);\n    this.taskCard.remove();\n  };\n\n  toggleTaskFinished = async () => {\n    this.isFinished = !this.isFinished;\n\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, { isFinished: this.isFinished });\n\n    this.taskCard.classList.toggle(\"task-finished\");\n\n    if (this.isFinished) {\n      this.timerBtn.setAttribute(\"disabled\", \"\");\n      this.markAsDoneBtn.innerText = \"Restart\";\n      this.stopTracker();\n    } else {\n      this.timerBtn.removeAttribute(\"disabled\");\n      this.markAsDoneBtn.innerText = \"Mark as done\";\n    }\n  };\n\n  toggleTimeTracker = async () => {\n    this.isActive = !this.isActive;\n\n    await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, { isActive: this.isActive });\n\n    if (this.isActive) {\n      this.startTracker();\n    } else {\n      this.stopTracker();\n    }\n  };\n\n  startTracker() {\n    this.timerBtn.classList.remove(\"timer-btn-play\");\n    this.timerBtn.classList.add(\"timer-btn-stop\");\n    this.timerBtn.innerHTML = `<i class=\"fas fa-pause\"></i>`;\n\n    this.timeTrakedIntervalId = setInterval(() => {\n      this.timeTracked += 1000;\n      this.updateTimeTracker();\n    }, 1000);\n  }\n\n  stopTracker() {\n    this.timerBtn.classList.add(\"timer-btn-play\");\n    this.timerBtn.classList.remove(\"timer-btn-stop\");\n    this.timerBtn.innerHTML = `<i class=\"fas fa-play\"></i>`;\n    clearInterval(this.timeTrakedIntervalId);\n  }\n\n  updateTimeTracker() {\n    const formatted = Task.getFormattedTimeTracked(this.timeTracked);\n    this.timeTrackedElement.innerText = formatted;\n  }\n\n  static getFormattedDate(d) {\n    const date = d.toLocaleDateString();\n    const time = d.toLocaleTimeString();\n\n    return `${date} ${time}`;\n  }\n\n  static addOptionalZero(value) {\n    return value > 9 ? value : `0${value}`;\n  }\n\n  static getFormattedTimeTracked(timeTracked) {\n    const timeTrackedSeconds = Math.floor(timeTracked / 1000);\n    const hours = Math.floor(timeTrackedSeconds / 3600);\n    const minutes = Math.floor((timeTrackedSeconds - hours * 3600) / 60);\n    const seconds = timeTrackedSeconds - hours * 3600 - minutes * 60;\n\n    return `${this.addOptionalZero(hours)}:${this.addOptionalZero(\n      minutes\n    )}:${this.addOptionalZero(seconds)}`;\n  }\n}\n\n//# sourceURL=webpack://webpack_5/./src/components/Task.js?");

/***/ }),

/***/ "./src/components/TaskBoard.js":
/*!*************************************!*\
  !*** ./src/components/TaskBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskBoard\": () => (/* binding */ TaskBoard)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/components/Task.js\");\n/* harmony import */ var _formConfigs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formConfigs */ \"./src/components/formConfigs.js\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n\n\n\n\n\n\nconst getTaskForm = (onTaskCreated) =>\n  new _Form__WEBPACK_IMPORTED_MODULE_0__.Form({\n    title: \"Add task\",\n    inputs: _formConfigs__WEBPACK_IMPORTED_MODULE_3__.taskConfig.map((input) => new _Input__WEBPACK_IMPORTED_MODULE_1__.Input(input)),\n    submitBtnText: \"Add\",\n    onSubmit: async (data) => {\n      const createdTask = await _API__WEBPACK_IMPORTED_MODULE_4__.api.createTask(data);\n      onTaskCreated(createdTask);\n    },\n  });\n\nclass TaskBoard {\n  constructor({ appContainer }) {\n    this.appContainer = appContainer;\n    this.taskForm = getTaskForm(this.addTask.bind(this));\n    this.tasksContainer = document.createElement(\"div\");\n  }\n\n  renderLayout() {\n    const board = document.createElement(\"div\");\n    const formContainer = document.createElement(\"div\");\n\n    board.classList.add(\"board\");\n    formContainer.classList.add(\"task-form\");\n    this.tasksContainer.classList.add(\"task-cards\");\n\n    board.append(formContainer, this.tasksContainer);\n    this.taskForm.render(formContainer);\n\n    this.appContainer.append(board);\n  }\n\n  addTask(taskData) {\n    // console.log(`this`, this);\n    const task = new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(taskData);\n\n    task.renderCard(this.tasksContainer);\n  }\n\n  logout() {\n    this.tasksContainer.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://webpack_5/./src/components/TaskBoard.js?");

/***/ }),

/***/ "./src/components/formConfigs.js":
/*!***************************************!*\
  !*** ./src/components/formConfigs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginConfig\": () => (/* binding */ loginConfig),\n/* harmony export */   \"registerConfig\": () => (/* binding */ registerConfig),\n/* harmony export */   \"taskConfig\": () => (/* binding */ taskConfig)\n/* harmony export */ });\nconst loginConfig = [\n    {\n      name: \"email\",\n      placeholder: \"Enter email\",\n      label: \"Email\",\n    },\n    {\n      name: \"password\",\n      placeholder: \"Enter password\",\n      label: \"Password\",\n      type: \"password\",\n    },\n  ];\n  \n  const registerConfig = [\n    {\n      name: \"email\",\n      placeholder: \"Enter email\",\n      label: \"Email\",\n    },\n    {\n      name: \"name\",\n      placeholder: \"Your name\",\n      label: \"Name\",\n    },\n    {\n      name: \"password\",\n      placeholder: \"Enter password\",\n      label: \"Password\",\n      type: \"password\",\n    },\n  ];\n  \n  \n  const taskConfig = [\n    {\n      name: \"name\",\n      placeholder: \"Task name\",\n      label: \"Name\",\n    },\n    {\n      name: \"description\",\n      placeholder: \"Task description\",\n      label: \"Description\",\n    },\n  ];\n\n//# sourceURL=webpack://webpack_5/./src/components/formConfigs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskBoard\": () => (/* binding */ taskBoard)\n/* harmony export */ });\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _components_formConfigs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formConfigs */ \"./src/components/formConfigs.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Input */ \"./src/components/Input.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\n/* harmony import */ var _components_TaskBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TaskBoard */ \"./src/components/TaskBoard.js\");\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Auth */ \"./src/components/Auth.js\");\n/* harmony import */ var _components_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/API */ \"./src/components/API.js\");\n\n\n\n\n\n\n\n\nconst appContainer = document.getElementById(\"app\");\n\nconst onLoginSucces = async () => {\n  // console.log(`Hello!`);\n  appContainer.innerHTML = \"\";\n  const user = await _components_API__WEBPACK_IMPORTED_MODULE_6__.api.getSelf();\n  renderAppLayout(user);\n};\n\nconst auth = new _components_Auth__WEBPACK_IMPORTED_MODULE_5__.Auth({\n  appContainer,\n  onLoginSucces,\n});\n\nconst taskBoard = new _components_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.TaskBoard({\n  appContainer\n})\n\nconst renderAppLayout = async (user) => {\n  auth.user = user;\n  auth.renderHeaderControls();\n  taskBoard.renderLayout();\n\n  const taskList = await _components_API__WEBPACK_IMPORTED_MODULE_6__.api.getAllTasks();\n\n  taskList.forEach((task) => taskBoard.addTask(task))\n};\n\n\nconst init = async () => {\n  const isLoggedIn = _components_API__WEBPACK_IMPORTED_MODULE_6__.api.isLoggedIn();\n  if (isLoggedIn) {\n    const user = await _components_API__WEBPACK_IMPORTED_MODULE_6__.api.autoLogin();\n    renderAppLayout(user);\n  } else {\n    auth.renderAuthForm();\n  }\n};\n\ninit()\n\n//# sourceURL=webpack://webpack_5/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;