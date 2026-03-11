# Dark Web Gateway

## Summary

The Dark Web Monitoring page displays your organization's dark web exposure status through ZeroDarkWeb (ZDW) integration. Access it from the **Dark Web** menu in the sidebar, or click the **View Dark Web Monitoring >** link in the Overview.

![Dark Web Gateway](../assets/dark-web.png)

## Screen Layout

### Top: Exposure Statistics

Displays exposure counts across 4 categories:

| Category | Description |
|----------|------|
| Credentials | Leaked credentials (email + password) |
| Devices | Compromised devices |
| URL Leaks | Exposed URL information |
| Documents/Email | Leaked documents and emails |

### Exposure Card List

Each exposure event is displayed as a card:

* **Type Icon**: Credential, Device, URL, Document/Email
* **Email/Domain**: Associated email address or domain
* **Leak Source**: Where the exposure was discovered
* **Date**: Date of the leak
* **Severity**: Risk level indicator

### Exposure Card Click

Clicking a card opens a **detail drawer** that slides in from the right. The drawer displays category-specific information:

* **Credentials**: Password type (plaintext/hashed), leak source analysis, subdomain breakdown
* **Devices**: Infection event list
* **URL Leaks**: Subdomain breakdown, event list
* **Documents/Email**: Event list, detail accordion

## Data Refresh

Dark web data is automatically refreshed **every 6 hours**. The refresh interval is indicated in the notice at the bottom of the page.

## CTA Section

A link to the full ZeroDarkWeb platform is provided at the bottom of the page. The current page shows a snapshot of recent events; complete history and advanced analysis are available on the ZDW platform.
