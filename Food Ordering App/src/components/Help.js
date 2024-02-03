const Help = () => {
  return (
    <div className="help-body">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <div class="label-input-container">
          <label for="name">Name</label>
          <input
            id="name"
            class="contact-input"
            type="text"
            placeholder="Name"
          />
        </div>

        <div class="label-input-container">
          <label for="email">Email</label>
          <input
            id="email"
            class="contact-input"
            type="text"
            placeholder="Email"
          />
        </div>

        <div class="label-input-container">
          <label for="problem-description">Tell us about your problem...</label>
          <textarea
            id="problem-description"
            class="contact-input input-desc"
            placeholder="Tell us about your problem..."
          ></textarea>
        </div>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Help;
