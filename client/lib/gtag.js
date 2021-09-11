export const GA_TRACKING_ID = 'G-F2BLW8F570';
// export const GA_TRACKING_ID = 'UA-207393311-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const ad = () => {
  (adsbygoogle = window.adsbygoogle || []).push({});
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}