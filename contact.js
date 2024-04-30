function contact(){
    return(
<div >
<section class="contact-section">
  <div class="contact-container">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</section>

</div>
    );
}
export default contact;
