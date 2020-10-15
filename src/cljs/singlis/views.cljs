(ns singlis.views
  (:require
   [re-frame.core :as re-frame]
   [singlis.subs :as subs]
   [singlis.streaming :refer [metamask-installed? metamask-connected?]]
   ))


(def metamask-presence-notification
  [:div {:style {:background-color "red"}} "MetaMask extension is required for this site, please install it at: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"])

(defn metamask-connectivity-notification []
  (if (metamask-connected?)
    [:div {:style {:background-color "green"} } "MetaMask Connected"]
    [:button
     {:on-click #(re-frame.core/dispatch [:enable-metamask])}
     "MetaMask Disconnected, click to connect"]))

(defn account-balance []
  (let [balance @(re-frame/subscribe [::subs/balance])]
    [:h3 (str "Current Balance: " balance " testnetDAI")]))

(defn update-form [k event]
  (re-frame/dispatch [:stream-values k (-> event .-target .-value)]))

(defn form-input [t k state]
  [:input {:type t
           :value (k state)
           :on-change #(update-form k %)}])

(defn main-panel []
  (let [stream-values @(re-frame/subscribe [::subs/stream-values])
        status @(re-frame/subscribe [::subs/status])]
    [:div
     [:h1 "Welcome to Singlis"]
     (account-balance)
     [:h3 "Recipient"]
     (form-input "text" :recipient stream-values)
     [:h3 "Quantity"]
     (form-input "number" :quantity stream-values)
     [:h3 "Amount of Hours"]
     (form-input "number" :hours stream-values)
     [:button {:on-click #(re-frame/dispatch [:create-stream])} "Submit"]
     (case status
       :finished [:h4 "Finished!"]
       :requesting-approval [:h4 "Awaiting approval.."]
       :processing [:h4 "Processing.."]
       :failed [:h4 "Something seems to have gone wrong, please make sure the values are correct."]
       nil)
     [:footer
      (if (metamask-installed?)
        (metamask-connectivity-notification)
        metamask-presence-notification)
      ]]))
