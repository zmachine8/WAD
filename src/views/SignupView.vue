<template>
  <section class="signup-column" aria-labelledby="signup-title">
    <div class="signup-intro">
      <p class="eyebrow">MAKE YOURSELF AT HOME</p>
      <h1 id="signup-title">Join the conversation.</h1>
      <p>Create an account to keep up with the people and places you care about.</p>
    </div>

    <form class="signup-card" novalidate @submit.prevent="submitForm">
      <div class="form-heading">
        <span class="form-icon" aria-hidden="true">✳</span>
        <div>
          <h2>Create your account</h2>
          <p>It only takes a moment.</p>
        </div>
      </div>

      <div class="field-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div class="field-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          autocomplete="new-password"
          placeholder="Create a password"
          aria-describedby="password-feedback password-rules"
          required
        />
        <p v-if="password && passwordIssues.length" id="password-feedback" class="password-feedback" role="status">
          Password is not valid — {{ passwordIssues.join("; ") }}.
        </p>
        <p v-else-if="password" id="password-feedback" class="password-feedback is-valid" role="status">
          Password meets all requirements.
        </p>
      </div>

      <ul id="password-rules" class="password-rules" aria-label="Password requirements">
        <li v-for="rule in passwordRules" :key="rule.label" :class="{ satisfied: rule.valid }">
          <span aria-hidden="true">{{ rule.valid ? '✓' : '○' }}</span>{{ rule.label }}
        </li>
      </ul>

      <p v-if="formMessage" class="form-message" :class="{ 'is-error': formError }" role="status">
        {{ formMessage }}
      </p>
      <button class="submit-button" type="submit">Sign up <span aria-hidden="true">→</span></button>
      <p class="form-note">By signing up, you agree to be kind to one another.</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
      formMessage: "",
      formError: false,
    };
  },
  computed: {
    passwordRules() {
      const lowercaseCount = (this.password.match(/[a-z]/g) || []).length;
      return [
        { label: "8–14 characters", valid: this.password.length >= 8 && this.password.length < 15 },
        { label: "At least one uppercase letter", valid: /[A-Z]/.test(this.password) },
        { label: "At least two lowercase letters", valid: lowercaseCount >= 2 },
        { label: "At least one number", valid: /[0-9]/.test(this.password) },
        { label: "Starts with an uppercase letter", valid: /^[A-Z]/.test(this.password) },
        { label: "Includes an underscore (_)", valid: this.password.includes("_") },
      ];
    },
    passwordIssues() {
      if (!this.password) return [];
      const messages = [
        [this.password.length >= 8 && this.password.length < 15, "Password must be 8–14 characters"],
        [/[A-Z]/.test(this.password), "Includes at least one uppercase letter"],
        [(this.password.match(/[a-z]/g) || []).length >= 2, "Includes at least two lowercase letters"],
        [/[0-9]/.test(this.password), "Includes at least one number"],
        [/^[A-Z]/.test(this.password), "Starts with an uppercase letter"],
        [this.password.includes("_"), "Includes an underscore (_)"],
      ];
      return messages.filter(([valid]) => !valid).map(([, message]) => message);
    },
  },
  methods: {
    submitForm() {
      this.formMessage = "";
      this.formError = false;

      if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.formError = true;
        this.formMessage = "Enter a valid email address to continue.";
        return;
      }
      if (this.passwordIssues.length) {
        this.formError = true;
        this.formMessage = `Please fix the password: ${this.passwordIssues.join("; ")}.`;
        return;
      }

      this.formMessage = "Your details look good. This demo does not create an account.";
    },
  },
};
</script>
