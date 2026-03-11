# Start New Scan

## Summary

You can manually start a security scan for a domain. Scans include subdomain discovery, port scanning, CVE detection, certificate validation, and more.

## How to Start a Scan

### Method 1: Header Scan Button

Click the **Scan Button** in the top header area. A scan will be started for the currently selected scope (all domains or a specific domain).

### Method 2: Domain Detail Page

Start a scan for an individual domain from the Domain Detail page.

## Scan Types

| Type | Description | Duration |
|------|------|----------|
| Subdomain Discovery | DNS enumeration, certificate transparency logs | 1-5 min |
| Port Scan | Check for open ports | 2-10 min |
| CVE Detection | Match against known vulnerabilities | 1-3 min |
| Certificate Validation | SSL/TLS certificate validity check | Under 1 min |
| Dark Web Monitoring | Search for leaked information | Automatic (every 6 hours) |

## Scan Limitations

* Only one scan can run at a time
* A new scan cannot be started while a previous scan is in progress
* Scan progress is displayed in real time during execution

## Canceling a Scan

An in-progress scan can be stopped using the **Cancel** button. When canceled, data already collected is retained, but incomplete items will be re-scanned in the next scan.
