import { Component } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Custom ErrorBoundary class component to intercept runtime crashes and show a helpful stack trace
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an unhandled error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "40px 24px",
          background: "#030308",
          color: "#e2e8f0",
          fontFamily: "monospace",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "1.6"
        }}>
          <div style={{
            maxWidth: "800px",
            width: "100%",
            background: "rgba(255, 0, 0, 0.05)",
            border: "1px solid rgba(255, 0, 0, 0.2)",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
          }}>
            <h1 style={{ color: "#ff2d78", fontSize: "24px", marginBottom: "16px" }}>
              ⚠️ Application Crashed (Runtime Error)
            </h1>
            <p style={{ color: "#a8b2d1", marginBottom: "20px" }}>
              React encountered a rendering exception. The details below will help diagnose the issue:
            </p>
            <div style={{
              background: "rgba(0, 0, 0, 0.5)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              overflowX: "auto",
              marginBottom: "24px"
            }}>
              <strong style={{ color: "#ff6b35" }}>Error:</strong> {this.state.error && this.state.error.toString()}
            </div>
            {this.state.errorInfo && (
              <div style={{
                background: "rgba(0, 0, 0, 0.5)",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                overflowX: "auto",
                maxHeight: "300px",
                fontSize: "12px",
                color: "#8892b0"
              }}>
                <strong style={{ color: "#00d4ff" }}>Component Stack:</strong>
                <pre style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}>
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: "24px",
                padding: "12px 24px",
                background: "linear-gradient(90deg, #00d4ff, #7b2fff)",
                border: "none",
                borderRadius: "8px",
                color: "#ffffff",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)"
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

