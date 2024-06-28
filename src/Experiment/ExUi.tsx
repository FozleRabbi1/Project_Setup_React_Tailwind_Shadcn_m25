import "./experiment.css";

const ExUi = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="signup-form">
          <h2>Sign up</h2>
          <p>Welcome to OushodhChai store</p>
          <form>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email here"
              required
            />

            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="User"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit">Sign up</button>
          </form>
          <p>
            Already have an account? <a href="#">Login</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExUi;
