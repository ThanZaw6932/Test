

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Developer Zone</h1>
        <p className="header-description">
          Build, test, and monitor your Bank APIs effortlessly in our secure testing environment.
        </p>
      </header>

      

      <section className="features">
        <div className="feature-card">
          <h3>API Documentation</h3>
          <p>Explore the API documentation to get started with integrations and understand available endpoints.</p>
        </div>
        <div className="feature-card">
          <h3>Test Environment</h3>
          <p>Run your tests directly on our platform, simulating real-world transactions and scenarios.</p>
        </div>
        <div className="feature-card">
          <h3>API Logs</h3>
          <p>Monitor and track requests, errors, and performance in real-time via detailed logs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
