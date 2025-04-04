// ==UserScript==
// @name        Gocomics Depaywall
// @description Bypasses the Gocomics Paywall and Removes Ads
// @namespace   Violentmonkey Scripts
// @match       *://*.gocomics.com/*
// @grant       none
// @version     1.0
// @author      Idiot01
// @description 4/4/2025
// ==/UserScript==

// Set overflow to auto to allow scroll
(function() {
    'use strict';
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        overflow: auto !important;
      }
    `;
    document.head.appendChild(style);
  })();
  
  // gets ad and softpaywall <div> elements and hides them
  const observer = new MutationObserver(() => {
      document.querySelectorAll('div[class*="AdDisplay"], div[class*="HeaderAd"], div[class*="Upsell"]').forEach(el => el.style.display = "none");
  });
  observer.observe(document.body, {childList: true, subtree: true});
  
  // chat ads hidden within closed shadow root, can't remove