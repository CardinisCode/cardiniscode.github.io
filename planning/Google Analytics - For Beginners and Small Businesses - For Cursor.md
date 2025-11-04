#GoogleAnalytics 
# Analytics for beginners and small businesses

[Analytics for beginners and small businesses](https://developers.google.com/analytics/learn/beginners)

This guide is for those who are new to Google Analytics or need to understand its fundamentals. From setting up an account to interpreting data, it covers the basics of using Google Analytics.

## Steps 

### Step 1: Set up Google Analytics

In this section, you will: 
* learn to set up a property on your website or app
* become familiar with the Google Analytics interface
* set up conversions for the actions that are valuable to your business

Parts:
1. [Part 1 - Set up a property](https://support.google.com/analytics/answer/9304153)
	* Discover how to set up Google Analytics for your website or app by creating a Google Analytics 4 property, adding a data stream, and adding your Google Analytics code.
2. [Part 2 - Find your way around Analytics](https://support.google.com/analytics/answer/9367631)
	* Familiarize yourself with the different parts of the Google Analytics interface, including how to search, manage your account, access help content, find your reports, and customize your reports.
3. [Part 3 - Set up a conversion](https://support.google.com/analytics/answer/13128484)
	* Gain insights into the actions that are most important to your business by marking important actions as conversions and then using that data to improve your marketing efforts.

#### Set up a Property 

Discover how to set up Google Analytics for your website or app by creating a Google Analytics 4 property, adding a data stream, and adding your Google Analytics code.

[Source: [GA4] Set up Analytics for a website and/or app](https://support.google.com/analytics/answer/9304153)

##### Create an Analytics account - Complete ✅
       
1. [x] Go to [https://analytics.google.com](https://analytics.google.com/). ✅ 2025-11-04
2. [x] click **Start Measuring**. ✅ 2025-11-04
3. [x] In **[Admin](https://analytics.google.com/analytics/web/#/?pagename=admin&utm_source=gahc&utm_medium=dlinks)** -> click **Create** -> select [**Account**](https://analytics.google.com/analytics/web/#/?pagename=admin-account-create&utm_source=gahc&utm_medium=dlinks) ✅ 2025-11-04
4. [x] Provide an account name. ✅ 2025-11-04
	* Andrea van Onselen
	1. [x] Configure the [data-sharing settings](https://support.google.com/analytics/answer/1011397) to control which data you share with Google. ✅ 2025-11-04
		* ❌ Google products and services
		* ✅  Modelling contributions & business insights
		* ✅ Technical support
		* ✅ Recommendations for your business
5. [x] Click **Next** to add the first property to the account. ✅ 2025-11-04

**Note**: The previous link opens to the last Analytics property you accessed. You must be signed in to a [Google Account](https://support.google.com/accounts/answer/27441) to open the property. You can [change the property](https://support.google.com/analytics/answer/12813202) using the property selector.  You must be a [Viewer or above](https://support.google.com/analytics/answer/9305587) at the account level to create an Analytics account.

##### Create a new Google Analytics 4 property

* You need the [Editor role](https://support.google.com/analytics/answer/9305587) to add properties to a Google Analytics account. 
	* If you created this account, you automatically have the Editor role.
* You can add up to 2,000 properties to an Analytics account. 
	* any combination of Universal Analytics and Google Analytics 4 properties
	* To raise this limit, contact your support representative.

To create a property - Complete ✅:

1. IF you continuing from "Create an Analytics account", above? 
	1. [x] If so, skip to step 2. ✅ 2025-11-04
	2. ❌ Otherwise, in [Admin](https://support.google.com/analytics/answer/6132368), click **Create**, then select **Property**.
2. [x] Enter a name for the property (e.g. "My Business, Inc website"): ✅ 2025-11-04
	* Property name (Required): Portfolio Site
	* Currency: British Pound £
3. [x] select the reporting time zone and currency. ✅ 2025-11-04
	* Reporting time zone: United Kingdom, (GMT+00) GMT
4. [x] Click **Next.** ✅ 2025-11-04
5. [x] Select your industry category and business size. ✅ 2025-11-04
	* Industry category (Required): Arts & Entertainment
	* Business size (Required): Small – 1 to 10 employees
6. [x] Click **Next**. ✅ 2025-11-04
7. [x] Select how you intend to use Google Analytics. ✅ 2025-11-04
	* Choose your business objectives: 
		* ✅ Understand web and/or app traffic
		* ✅ View user engagement and retention
8. [x] Click **Create** ✅ 2025-11-04
9. [x] (if you are setting up a new account) accept the Analytics Terms of Service and the Data Processing Amendment. ✅ 2025-11-04
10. [x] Continue to [Add a data stream](https://support.google.com/analytics/answer/9304153#stream) to start collecting data. ✅ 2025-11-04

Relevant to "reporting time zone and currency.":
* If a visitor comes to your website on a Tuesday in their time zone, but it's Monday in your time zone, the visit is recorded as having occurred on Monday.
- If you choose a time zone that honors Daylight Savings Time, Analytics automatically adjusts for time changes. Use Greenwich Mean Time if you don't want to adjust for Daylight Savings Time.
- Changing the time zone only affects data going forward. If you change the time zone for an existing property, you may see a flat spot or a spike in your data, caused by the time shift forwards or backwards, respectively. Report data may refer to the old time zone for a short period after you update your settings, until Analytics servers have processed the change.
- We recommend that you change the time zone for a property no more than once per day so Analytics can process the change.

Relevant to "how you intend to use Google Analytics": 
* Google Analytics tailors the set of default reports based on the information you provide about how you intend to use Analytics. 
* For example, if you choose "Generate more leads," 
	* you will see a collection of reports to help you measure lead generation. 
* [Learn more about the business objectives reports collection.](https://support.google.com/analytics/answer/12924488)

##### Add a data stream

1. [x] Click **iOS app**, **Android app**, or **Web**. ✅ 2025-11-04
* -> Web
2. [x] Set up your web stream ✅ 2025-11-04
	* Website URL: www.andreafolgado.com/
	* Stream name: My Professional Portfolio
	* Enhanced measurement: On
3. [x] Create and continue ✅ 2025-11-04
4. [ ] Set up a Google tag
* Choose how to set up a #GoogleTag

[Enhanced measurement](https://support.google.com/analytics/answer/9216061?hl=en_ZA&utm_id=ad): 

* Automatically measure interactions and content on your sites in addition to standard page view measurement.
* Data from on-page elements such as links and embedded videos may be collected with relevant events. 
* You must ensure that no personally identifiable information will be sent to Google.
* [Learn more](https://support.google.com/analytics/answer/9216061?hl=en_ZA&utm_id=ad)

#####  Choose how to set up a Google tag: 

**Install manually (Recommended)**

- ✅ Update Cursor app
- [ ] Ask Cursor to complete the following action:

```
Below is the Google tag for this account. Copy and paste it in the code of every page of your website, immediately after the <head> element. Don’t add more than one Google tag to each page.
```

``` html
<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-H7TF1SFW4W"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-H7TF1SFW4W'); </script>
```


### Step 2: Access your reports

Google Analytics collects data from your websites and apps to create reports that provide insights into your business. In this section, you will learn to see the data you've collected in the available reports and how to customize reports for your specific use cases.

1. [Part 1 - Get familiar with the Home page](https://support.google.com/analytics/answer/11197963)
2. [Part 2 - Install the Analytics mobile app](https://support.google.com/analytics/topic/12677004)
3. [Part 3 - Browse reports](https://support.google.com/analytics/answer/9212670)

### Step 3: Manage user access

In Google Analytics, you can invite others to access your features and information. Choose from a few options to manage user access and data restrictions at the account and property level.

1. [Part 1 - Add collaborators to Analytics](https://support.google.com/analytics/answer/9305587#google-analytics&zippy=%2Cgoogle-analytics)
2. [Part 2 - Grant access](https://support.google.com/analytics/answer/9305587#google-analytics&zippy=%2Cgoogle-analytics)

### Step 4: Enhance your advertising

In this section, you will learn how to link your Google Ads account to your Analytics property to see the full customer cycle, from how users interact with your marketing to how they finally complete the goals you’ve set for them on your site or app.

1. [Part 1 - Link a Google Ads account](https://support.google.com/analytics/answer/9379420)
2. [Part 2 - Import conversions into Google Ads](https://support.google.com/analytics/answer/10632359)



## References & Links 

* [Data sharing settings](https://support.google.com/analytics/answer/1011397?hl=en_ZA&utm_id=ad)
* [Google Ads Data Processing Terms](https://business.safety.google/adsprocessorterms/)
* [Google Analytics Terms of Service](https://marketingplatform.google.com/about/analytics/terms/gb/)
* [Google Analytics Terms of Service Language Index](https://www.google.com/analytics/terms/)
* [Analytics policies](https://support.google.com/analytics/answer/4597324)
* 