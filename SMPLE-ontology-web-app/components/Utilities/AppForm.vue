<template>
  <div class="container">
    <!-- Form Start ... -->
    
    <div>
      <section>
        <h1 class="title">Contact Us</h1>
        <p class="subtitle">
          We will respond to your request in not time!
        </p>
        <hr>
        <br>
        <form 
          action="" 
          @submit.prevent="$validator.validateAll();">
  
          <!-- Name -->
          <label for="fname">First Name</label>
          <input 
            v-validate="{required: true}"
            id="fname"
            v-model="form.Firstname"  
            type="text" 
            name="Firstname" 
            placeholder="Your name..">
          <span
            v-show="errors.has('Firstname')"
            class="error">
            {{ errors.first('Firstname') }}<br>
          </span>


          <!-- Name -->
          <label for="fname">Last Name</label>
          <input
            v-validate="{required: true}"
            id="lname"
            v-model="form.Lastname" 
            type="text"  
            name="Lastname" 
            placeholder="Your last name..">
          <span
            v-show="errors.has('Lastname')"
            class="error">
            {{ errors.first('Lastname') }}<br>
          </span>

          <!-- Email -->
          <label for="Email">Email</label>
          <input
            v-validate="{required: true, email: true}"
            id="Email"
            v-model="form.Email" 
            type="Email"  
            name="Email" 
            placeholder="Your email..">
          <span
            v-show="errors.has('Email')"
            class="error">
            {{ errors.first('Email') }}<br>
          </span>

          <!--Inquiry Type -->
          <div class="field">
            <label class="label">Inquiry Type</label>
            <div class="control">
              <div class="select">
                <select 
                  v-validate="'required'"
                  v-model="form.Inquiry"
                  name="select">
                  <option 
                    disabled 
                    value="">Nothing selected</option>
                  <option 
                    v-for="option in options.inquiry" 
                    :key="option.value"
                    :value="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <span
                  v-show="errors.has('select')"
                  class="error">
                  {{ errors.first('select') }}<br>
                </span>
              </div>
            </div>
          </div>


          <!-- Message -->
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea 
                v-validate="'required'"
                v-model="form.Message"
                name="message"
                class="textarea" 
                placeholder="Message"/>
              <span
                v-show="errors.has('message')"
                class="error">
                {{ errors.first('message') }}<br>
              </span>
            </div>
          </div>

          <input
            :disabled="errors.any()" 
            type="submit" 
            value="Submit">

            <!--
          <ul>
            <li 
              v-for="error in errors.all()"
              :key="error">{{ error }}</li>
          </ul>-->
        </form>
      </section>

      <!--<section>
        <!- Results section : this is where the output is displayed ->
        <div class="des">This is what we will receive!</div>
        <section class="send">
          <div>
            <ul>          
              <li 
                v-for="(item, k) in form"
                :key="k">
                <strong>{{ k }} </strong> {{ item }}
              </li>
            </ul>
          </div>
        </section>
      </section>-->
    </div>
    
    <!-- Form End ... -->
  </div>
</template>


<script>

export default {
  data() { 
    return {
      form : {
        Firstname: '',
        Lastname: '',
        Email: '',
        Inquiry: '',
        Message: ''
      },
      options: {
       inquiry: [
          { value: 'demo', text: "Request a Demo"},
          { value: 'sales', text: "Sales Inquiry"},
          { value: 'support', text: "Customer Support"}
        ]
      }
    }
  },
  methods: {
     onSubmit() {
        console.log("form");
     }
  }
}
</script>

<style scoped>


span.error {
  color: #9F3A38;
  margin-bottom: 1.3em;
}

ul {
  list-style-type: none;
}
.send {
  background-color: white;
  border-radius: 5px;
  border: solid 1px #ccc;
}

.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

input[type=text], select, input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

select {
  height: 30px;
}

input[type=submit] {
  width: 100%;
  background-color: #1171ba;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

textarea {
  width: 100%;
  max-width: 650px;
  overflow: scroll;
  max-height: 200px;
}

input[type=submit]:hover {
  background-color: rgba(17, 113, 186,0.9);
}

section {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  max-width: 700px;
  margin: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.title, .subtitle {
    text-align: center;
}

.title {
  font-weight: bold;
}

.des {
font-size: 1.563em;
font-weight: bold;
text-align: center;
}
</style>
