# Transfer domain from Wix → Cloudflare Registrar (site hosted on **GitHub Pages**)

📋
✅

**Goal:** Move registrar/billing from Wix to Cloudflare Registrar, keep hosting on GitHub Pages.

**Important - Requirements:** 
- Cloudflare Registrar *requires* Cloudflare to be your authoritative DNS first — 
	- you must onboard the domain to Cloudflare 
	    - by changing the domain's nameservers to Cloudflare's assigned nameservers. 
- You cannot use another DNS provider while the domain is registered with Cloudflare Registrar. 

**Overview:**
You’ll be transferring your domain registration from Wix → Cloudflare Registrar, while keeping your website hosted on GitHub Pages.
This setup lets you:
- Pay Cloudflare’s wholesale registrar rate (e.g. £9/year instead of Wix’s £20/month)
- Keep GitHub Pages as your free static hosting
- Manage your DNS fully through Cloudflare

---

## Step-by-Step Guide

### 1. Prepare for the Transfer - Completed ✅:

Before transferring, make sure your domain meets Cloudflare’s requirements.

Cloudflare Docs
    https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/?utm_source=chatgpt.com

**Prerequisites** - Completed ✅:

✅ Your domain is older than 60 days.
✅ The domain is not locked.
✅ You have access to your Wix account (current registrar).
✅ You have the authorization (EPP) code from Wix.
✅ Your domain’s WHOIS info is accurate and public (or privacy unlocked temporarily).

From Gemini
    According to a lot of documentation from registrars who receive Wix transfers, **Wix automatically unlocks the domain for you** when you request the EPP/authorization code.

- ✅ 1. To get your EPP code in Wix
    - ✅ 1. Log in to your Wix account
    - ✅ 2. Go to Settings → Domains.
    - ✅ 3. Select the domain you want to transfer.
    - ✅ 4. Click the three dots -> to the right.
    - ✅ 5. Select "Transfer away from Wix" 
    - ✅ 6. Confirm that you want to transfer away from Wix
    - ✅ 7. Check email for authorization code

I received this message from Wix (within the web app): 

"Transfer your domain away from Wix
    If you still want to transfer andreafolgado.com, here’s what you need to know:
    As soon as you click “I Still Want to Transfer”, we’ll send a transfer authorization code to ac.folgado@gmail.com
    Once you get the code, follow the instructions from your new domain provider to transfer your domain
    It can take up to 7 days to complete the transfer.
    Transferring will lock your domain and you won’t be able to transfer it again for 60 days." 

    "A transfer authorization code for {email} was sent to {email}"  


If it’s enabled, that means your domain is currently locked — this is normal and helps prevent unauthorized transfers.

2. ✅ Double-check the lock status via WHOIS

You can also verify externally by checking your domain’s public WHOIS record:
- Visit 🔗 
    - https://whois.domaintools.com/
    - Enter your domain name (e.g. yourdomain.com)
    - Look for the line: "Domain Status"
        -> Domain Status: Registered And No Website (Mine)

    - https://lookup.icann.org/
    - Enter your domain name (e.g. yourdomain.com)
    - Look for the line:
        - Domain Status: Active 

If you see this
    Domain Status: clientTransferProhibited
-> it means the domain is locked

Once you unlock it in Wix, this line should disappear (it may take a few minutes to update).

Verification
    - ✅ DomainTools:
        - ✅ Registrar Status: ok
        - ✅ Domain Status: Registered And No Website

    - ✅ ICANN Lookup
        - ✅ Domain Status: Active

##### To Unlock Your Domain -> Not necessary:

- 1. Turn Domain Lock off (toggle the switch or uncheck the box)
- 2. Save the changes

Once unlocked, Wix will usually show a confirmation message saying your domain is now eligible for transfer.
You can then request your EPP (authorization) code from the same area.

---

📋 2. Add Your Domain to Cloudflare - To be done 📋:

    📋 1. Log in to your Cloudflare account:
🔗 https://dash.cloudflare.com
    📋 2. Click Add a Site.
    📋 3. Enter your domain (example: yourdomain.com).
    📋 4. Select the Free Plan (you can upgrade later if needed).
    📋 5. Cloudflare will scan your current DNS records 
        — 📋 review and ensure they match your GitHub Pages configuration

---

3. Update DNS to Point to GitHub Pages - To be done 📋:

* Once your domain is added to Cloudflare, 
    * 📋 Verify or update the DNS records

GitHub Docs:
🔗 Configuring a custom domain for your GitHub Pages site

For a user or organization site:
Record Type	Name	Value	TTL
A	@	185.199.108.153	Auto
A	@	185.199.109.153	Auto
A	@	185.199.110.153	Auto
A	@	185.199.111.153	Auto
For a project site:
Record Type	Name	Value	TTL
CNAME	www	<username>.github.io	Auto

⚙️ Tip: Cloudflare should import these automatically
* 📋 double-check before transferring

---- 

4. Point Domain to Cloudflare’s Nameservers - To be done 📋:

* Before Cloudflare can manage your domain as your new registrar, you must make it the authoritative DNS provider.
This is a required step — Cloudflare Registrar does not allow external DNS providers (like Wix or GoDaddy).

**Why this step matters:**

Even though your site is hosted on GitHub Pages, the domain’s DNS records currently live on Wix’s servers.
By replacing Wix’s nameservers with Cloudflare’s, you’re telling the internet:

“Cloudflare is now the official manager of my domain’s DNS.”

**This ensures that:**

- Cloudflare can fully control DNS for your domain (required for Registrar transfers).
- You can safely close your Wix account after the move.
- Your GitHub Pages site will stay live using the same DNS records, now managed in Cloudflare.

📋 **Step #1: Update nameservers:** 

    📋 1. In Cloudflare, note your assigned nameservers (e.g. elle.ns.cloudflare.com and kirk.ns.cloudflare.com).
    📋 2. Log in to your Wix account → Domains.
    📋 3. Select your domain → Advanced settings.
    📋 4. Locate the Nameservers section.
    📋 5. Replace the current Wix nameservers with the Cloudflare pair.
    📋 6. Save your changes.

⏳ It can take up to 24 hours for this update to propagate globally.

📋 **Step #2: Verify that propagation is complete**

You can check whether your domain is now using Cloudflare’s nameservers by running a DNS lookup:
📋 1. Visit 🔗 https://www.whatsmydns.net/
📋 2. Enter your domain name (e.g. yourdomain.com)
📋 3. Select NS from the record type dropdown
📋 4. Click Search

IF the results show your two Cloudflare nameservers across multiple locations, 
    propagation is complete - 📋
    Cloudflare is now your authoritative DNS provider - 📋

--- 

5. Transfer the Domain Registrar to Cloudflare - To be done 📋:

Now that your DNS is active on Cloudflare:
    📋 1. Go to Registrar → Transfer Domains in your Cloudflare dashboard.
    🔗 https://dash.cloudflare.com/?to=/:account/registrar/transfer

    📋 2. Enter your domain and the EPP code from Wix.
    📋 3. Confirm your contact details.
    📋 Complete the payment 
        (Cloudflare charges the base ICANN rate — typically around £9/year).

The transfer process usually takes a few days.

---

6. Enable HTTPS on GitHub Pages - To be done 📋:

GitHub automatically provisions an SSL certificate for your custom domain when the DNS is correctly configured.

GitHub Docs:
🔗 Securing your GitHub Pages site with HTTPS

To verify:
    📋 1. Go to your GitHub repository → Settings → Pages.
    📋 2. Confirm that your custom domain is listed correctly.
    📋 3. Ensure “Enforce HTTPS” is checked once the DNS verification passes.

----

7. Test Everything - To be done  - To be done 📋:

    📋 1. Visit your site using both https://yourdomain.com and https://www.yourdomain.com.
    📋 2. Check that SSL is active and no redirects break.
    📋 3. Use https://www.whatsmydns.net/
    to verify your DNS points to Cloudflare.

✅ Summary

- Domain Registrar: 
    - Platform: Cloudflare Registrar
    - Purpose: Own & renew your domain

- DNS Management
    - Platform: Cloudflare
    - Purpose: Manage DNS records (mandatory)

- Hosting
    - Platform: GitHub Pages
    - Purpose: Store & serve your site files

- SSL / HTTPS
    - Platform: GitHub (Let’s Encrypt)
    - Purpose: Secure your site

