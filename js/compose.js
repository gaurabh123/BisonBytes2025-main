class ComposeWindow {
  constructor() {
    this.window = document.getElementById("composeWindow");
    this.minimizeBtn = document.getElementById("minimizeCompose");
    this.maximizeBtn = document.getElementById("maximizeCompose");
    this.closeBtn = document.getElementById("closeCompose");
    this.composeBody = document.getElementById("composeBody");

    this.isMinimized = false;
    this.isMaximized = false;

    this.defaultWidth = "500px";
    this.defaultHeight = "500px";
    this.minimizedHeight = "40px";
    this.maximizedWidth = "700px";
    this.maximizedHeight = "650px";

    this.lastState = {}; // Store last known position/size

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.minimizeBtn.addEventListener("click", () => this.toggleMinimize());
    this.maximizeBtn.addEventListener("click", () => this.toggleMaximize());
    this.closeBtn.addEventListener("click", () => this.close());
  }

  // 📌 Minimize - Collapses to bottom right
  toggleMinimize() {
    this.isMinimized = !this.isMinimized;

    if (this.isMinimized) {
      // Store the last size before minimizing
      this.lastState = {
        width: this.window.style.width,
        height: this.window.style.height,
        left: this.window.style.left,
        top: this.window.style.top,
        transform: this.window.style.transform,
      };

      this.composeBody.style.display = "none";
      this.window.style.height = this.minimizedHeight;
      this.window.style.width = "250px"; // Gmail minimizes to a smaller width
      this.window.style.right = "10px";
      this.window.style.bottom = "10px";
      this.window.style.left = "auto";
      this.window.style.top = "auto";
      this.window.style.transform = "none";
    } else {
      // Restore previous state
      this.composeBody.style.display = "flex";
      this.window.style.width = this.lastState.width || this.defaultWidth;
      this.window.style.height = this.lastState.height || this.defaultHeight;
      this.window.style.left = this.lastState.left || "auto";
      this.window.style.top = this.lastState.top || "auto";
      this.window.style.transform = this.lastState.transform || "none";
    }
  }

  // 🔄 Maximize - Centers it on the screen without clearing content
  toggleMaximize() {
    this.isMaximized = !this.isMaximized;

    if (this.isMaximized) {
      this.lastState = {
        width: this.window.style.width,
        height: this.window.style.height,
        left: this.window.style.left,
        top: this.window.style.top,
        transform: this.window.style.transform,
      };

      this.window.style.width = this.maximizedWidth;
      this.window.style.height = this.maximizedHeight;
      this.window.style.left = "50%";
      this.window.style.top = "50%";
      this.window.style.transform = "translate(-50%, -50%)";
      this.window.style.right = "auto";
      this.window.style.bottom = "auto";
      this.composeBody.style.display = "flex"; // Ensure it remains visible
    } else {
      this.window.style.width = this.lastState.width || this.defaultWidth;
      this.window.style.height = this.lastState.height || this.defaultHeight;
      this.window.style.left = this.lastState.left || "auto";
      this.window.style.top = this.lastState.top || "auto";
      this.window.style.transform = this.lastState.transform || "none";
    }
  }

  // ❌ Close - Hides the compose window
  close() {
    this.window.style.display = "none";
  }
}

// ✅ Initialize the compose window functionality on page load
document.addEventListener("DOMContentLoaded", () => {
  new ComposeWindow();
});