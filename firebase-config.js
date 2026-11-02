// firebase-config.js
export const firebaseConfig = {
  apiKey: "AIzaSyDVHB-39E_crhScVR-jNJUgSGVe_pTRfE8",
  authDomain: "monitoring-suhu-97afd.firebaseapp.com",
  databaseURL: "https://monitoring-suhu-97afd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-suhu-97afd",
  storageBucket: "monitoring-suhu-97afd.firebasestorage.app",
  messagingSenderId: "568752582166",
  appId: "1:568752582166:web:9cc2638fd7ec1623170f37"
};

// Ambang batas untuk pengecekan kesehatan ESP32 (dipakai di debug.html dan dashboard.html)
export const THRESHOLDS = {
  staleMs: 15000,
  rssiWarn: -67,
  rssiFail: -75,
  freeHeapWarn: 20000,
  freeHeapFail: 10000,
  minHeapWarn: 15000,
  tempWarn: 60,
  tempFail: 70,
  reconnectWarn: 1,
  reconnectFail: 5
};
