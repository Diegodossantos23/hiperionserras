// src/analytics.js
import ReactGA from 'react-ga';

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
