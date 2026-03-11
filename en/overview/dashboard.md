# Overview Dashboard

The **Overview** is the main screen displayed immediately after login. It summarizes your organization's security posture across three sections.

![Summary Report Dashboard](../assets/overview.png)

## Screen Layout

### Top: Active Scope

The currently selected domain scope is displayed at the top of the screen. Click it to select a specific domain, and all data will be filtered to that domain.

### Section 01: Immediate Actions

Displays the TOP 5 most urgent security issues in a table format.

| Column | Description |
|---|---|
| Finding Title | Issue name (click to navigate to the detail page) |
| Severity | Critical / High / Medium / Low |
| Domain | Affected domain |
| Risk Score | Score based on severity x asset criticality |

Click the **View All Findings** link to navigate to the findings list page.

Below the table, the **Domain Risk Map** and **Subdomain Risk Preview** are displayed.

### Section 02: Asset Exposure

Displays monitored domains in a card grid. Each card includes:

* **Security Grade** (A-F) -- color-coded circular badge
* **Domain Name**
* **Subdomain Count**
* **Critical / High Finding Count** -- severity badges
* **Total Finding Count**
* **Last Scan Time**

Click a card to navigate to that domain's detail dashboard.

### Section 03: Threat Intelligence

Displays dark web threat information and AI analysis results.

**4 KPI Metrics:**
* **CREDENTIALS LEAKED**: Number of leaked credentials (red)
* **DARK WEB MENTIONS**: Number of dark web mentions (cyan)
* **COMPROMISED ACCOUNTS**: Number of accounts at risk (yellow)
* **THREAT SOURCES DETECTED**: Number of detected threat sources (green)

Click the **View Dark Web Monitoring >** link to navigate to the dark web monitoring page.

Below, the **AI Insights** (AI analysis summary) and **Detected Sources** (threat source list) sidebar are displayed.

## Data Refresh

Overview data is refreshed in real time. Refresh the page or change the domain scope to view the latest data.
