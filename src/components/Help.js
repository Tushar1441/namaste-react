const Help = () => {
  return (
    <div className="help-body">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <div className="label-input-container">
          <label>Name</label>
          <input
            id="name"
            className="contact-input"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="label-input-container">
          <label>Email</label>
          <input
            id="email"
            className="contact-input"
            type="text"
            placeholder="Email"
          />
        </div>

        <div className="label-input-container">
          <label>Tell us about your problem...</label>
          <textarea
            id="problem-description"
            className="contact-input input-desc"
            placeholder="Tell us about your problem..."
          ></textarea>
        </div>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Help;
