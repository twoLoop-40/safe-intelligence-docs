# Scan Progress

## Progress Display

When a scan starts, progress is displayed in the header area:

* **Progress Bar**: Overall scan completion percentage
* **Current Step**: The scan type currently being performed (e.g., "Discovering subdomains...")
* **Elapsed Time**: Time since the scan started

## Scan Steps

Scans proceed in the following order:

1. **Initialization** -- Prepare the target domain and subdomain list
2. **Subdomain Discovery** -- Search for new subdomains
3. **Port Scan** -- Check for open ports on each subdomain
4. **Service Detection** -- Identify services on open ports
5. **Vulnerability Matching** -- Match against the CVE database
6. **Certificate Validation** -- Check SSL/TLS status
7. **Result Aggregation** -- Calculate scores and generate findings

## Scan Completion

When a scan completes:

* The progress bar displays 100%
* The number of newly discovered items is reported
* Domain scores are automatically recalculated
* Overview data is refreshed

## Scan Failure

If a scan fails due to a network error or other issue:

* An error message is displayed
* Partially collected data is retained
* You can retry after a brief wait
