# Credential Leaks

## Summary

Credential leaks are the most frequently discovered threat type on the dark web. They are detected when an organization member's email and password are being traded on dark web forums or markets.

## Risk Levels

| Type | Risk Level | Description |
|------|--------|------|
| Plaintext Password | Critical | Password exposed without encryption. Immediate change required |
| Hashed Password | High | Potential for decryption. Password change recommended |
| Email Only | Medium | Risk of phishing and social engineering |

## Recommended Response Actions

1. **Immediate**: Force a password reset for the compromised account
2. **Short-term**: Enable multi-factor authentication (MFA)
3. **Long-term**: Strengthen password policies and continue leak monitoring

## Understanding Leak Sources

SafeIntelligence detects credential leaks from the following sources:

* **BreachForum**: Major data breach trading forum
* **Telegram Channels**: Channels that share leaked information
* **Phishing Kit Tracker**: Information collected from phishing kits
* **Other Dark Web Sources**: Various dark web markets and forums

## Important Notice

{% hint style="warning" %}
Leaked credentials may be used on other services as well (Credential Stuffing). When a leak is discovered, it is recommended to change the password for all services associated with that email address.
{% endhint %}
