(() => {

    const entries = [
  
      ["3000/tcp", "open", "next.js", "build",
        "Server-rendered apps"],
  
      ["5173/tcp", "open", "react-vite", "build",
        "Fast front ends"],
  
      ["27017/tcp", "open", "mongodb", "build",
        "Data and libraries"],
  
      ["8443/tcp", "open", "jwt-auth", "build",
        "Secure sign-in"],
  
      ["8080/tcp", "open", "gemini-api", "build",
        "AI recommendations"],
  
      ["4444/tcp", "open", "pentest", "break",
        "Recon and exploitation"],
  
      ["80/tcp", "open", "nmap", "break",
        "Hosts, ports, services"],
  
      ["443/tcp", "open", "aws", "cloud",
        "EC2, S3, KMS, API Gateway"],
  
      ["8000/tcp", "open", "cloudformation", "cloud",
        "Infrastructure as code"],
  
      ["1337/tcp", "open", "figma", "design",
        "UI and layouts"],
  
      ["1338/tcp", "open", "canva", "design",
        "Posters, banners, standees"]
  
    ];
  
  
    const filters = document.getElementById("filters");
  
    const output = document.getElementById("out");
  
    if (!filters || !output) return;
  
  
    const categories = [
      "all",
      "build",
      "break",
      "cloud",
      "design"
    ];
  
  
    let active = "all";
  
  
    // TABLE HEADER
  
    const head = document.createElement("div");
  
    head.className = "terminal-row terminal-head";
  
  
    ["PORT", "STATE", "SERVICE", "NOTE"].forEach(label => {
  
      const cell = document.createElement("span");
  
      cell.textContent = label;
  
      head.appendChild(cell);
  
    });
  
  
    output.appendChild(head);
  
  
    // FILTER ROWS
  
    function renderRows() {
  
      output.querySelectorAll(
        ".terminal-row:not(.terminal-head)"
      ).forEach(row => {
  
        row.classList.toggle(
          "dim",
          active !== "all" &&
          row.dataset.category !== active
        );
  
      });
  
    }
  
  
    // GENERATE TERMINAL DATA
  
    entries.forEach(entry => {
  
      const row = document.createElement("div");
  
      row.className = `terminal-row ${entry[3]}`;
  
      row.dataset.category = entry[3];
  
  
      entry.forEach((value, index) => {
  
        const cell = document.createElement("span");
  
        cell.className = [
          "port",
          "state",
          "service",
          "category",
          "note"
        ][index];
  
        cell.textContent = value;
  
  
        // Category is used for filtering, not displayed.
  
        if (index !== 3) {
  
          row.appendChild(cell);
  
        }
  
      });
  
  
      output.appendChild(row);
  
    });
  
  
    // CREATE FILTER BUTTONS
  
    categories.forEach(category => {
  
      const button = document.createElement("button");
  
      button.type = "button";
  
      button.textContent = category;
  
      button.setAttribute(
        "aria-pressed",
        String(category === active)
      );
  
  
      button.addEventListener("click", () => {
  
        active = category;
  
  
        filters.querySelectorAll("button").forEach(item => {
  
          item.setAttribute(
            "aria-pressed",
            String(item === button)
          );
  
        });
  
  
        renderRows();
  
      });
  
  
      filters.appendChild(button);
  
    });
  
  
  })();