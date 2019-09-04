<template>
  <div class="input-control">
    <fieldset
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="wrap-input1"
    >
      <input class="input1" :placeholder="placeholder" type="text" tabindex="1" required />
      <span class="shadow-input1"></span>
    </fieldset>

    <fieldset class="wrap-input1">
      <textarea
        v-if="controlType === 'textarea'"
        :value="value"
        rows="10"
        cols="50"
        @input="$emit('input', $event.target.value)"
        class="input1"
        :placeholder="placeholder"
        tabindex="2"
        required
      ></textarea>
      <span class="shadow-input1"></span>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="Css" scoped>
/*
    Form input styles
*/

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type='text'],
#contact input[type='email'],
#contact input[type='tel'],
#contact input[type='url'],
#contact textarea,
#contact button[type='submit'] {
  font: 400 12px/16px 'Roboto', Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type='text'],
#contact input[type='email'],
#contact input[type='tel'],
#contact input[type='url'],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type='text']:hover,
#contact input[type='email']:hover,
#contact input[type='tel']:hover,
#contact input[type='url']:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  min-height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type='submit'] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #1171ba;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type='submit']:hover {
  background: #1171bae0;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type='submit']:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

/*
Shadow input animation
*/
/*---------------------------------------------*/
/*.wrap-input1 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
}

.shadow-input1 {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: #1171ba;
}

.input1:focus + .shadow-input1 {
  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
  animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 80px 30px;
    opacity: 0;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 80px 30px;
    opacity: 0;
  }
}*/
</style>