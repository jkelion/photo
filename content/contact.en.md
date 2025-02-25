---
title: Contact Form
date: 2020-11-27 17:30:49
---

<script src="/js/contact.js" defer></script>

<form id="form">
  <h1>To: Jonathan</h1>

  <div class="field">
    <label for="visitor_name">From</label>
    <input
      type="text"
      name="visitor_name"
      id="visitor_name"
      placeholder="Your Name"
    />
  </div>
  <div class="field">
    <label for="visitor_email">Reply</label>
    <input
      type="text"
      name="visitor_email"
      id="visitor_email"
      placeholder="Your e-mail address"
    />
  </div>
  <div class="field">
    <label for="message">Message</label>
    <textarea name="message" id="message" placeholder="Your Message"></textarea>
  </div>

  <input type="submit" id="button" value="Send Email" />
</form>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
></script>

<script type="text/javascript">
  emailjs.init("hcwh1BzimepUo_Ba4")
</script>

