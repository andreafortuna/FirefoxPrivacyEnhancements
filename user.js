//
/*****************************************************************************
 user.js privacy enhancements
 More info on:
 https://www.andreafortuna.org/cybersecurity/privacy/mozilla-firefox-tweaks-for-enhanced-privacy/
 ******************************************************************************/

/******************************************************************************
 * SECTION: PRIVACY                                                           *
 ******************************************************************************/
 
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);

/******************************************************************************
 * SECTION: BROWSER                                                           *
 ******************************************************************************/

user_pref("browser.cache.offline.enable", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.send_pings", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.sessionstore.privacy_level", 2);
 
 /******************************************************************************
 * SECTION: DOM                                                                *
 ******************************************************************************/

user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);

/******************************************************************************
 * SECTION: MEDIA                                                             *
 ******************************************************************************/
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
 
 /******************************************************************************
 * SECTION: NETWORK                                                            *
 ******************************************************************************/
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.IDN_show_punycode", true);
 
 /******************************************************************************
 * SECTION: OTHER SETTINGS                                                     *
 ******************************************************************************/
user_pref("webgl.disabled", true);
user_pref("geo.enabled", false); 
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%20/%20/");
 
 