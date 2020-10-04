(ns singlis.streaming
  (:require
   [singlis.config :refer [sablierABI ierc20ABI]]
   [re-frame.core :as re-frame]))

(def sablier-address "0xc04Ad234E01327b24a831e3718DBFcbE245904CC")
(def testnetDAI-address "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8")

(defn metamask-installed? []
  (.hasOwnProperty js/window "ethereum"))

(defn metamask-connected? []
  (and (metamask-installed?)
       (.isConnected js/window.ethereum)
       (.-selectedAddress js/window.ethereum)))

(defn enable-metamask []
  (.enable js/window.ethereum))

(defn provider []
  (js/ethers.providers.Web3Provider. js/window.ethereum))

(defn signer []
  (.getSigner (provider)))

(defn sablier [signer]
  (js/ethers.Contract. sablier-address sablierABI signer))

(defn token [signer]
   (js/ethers.Contract. testnetDAI-address ierc20ABI signer ))

(defn approve-token [^js/e token deposit]
  (-> (.approve token sablier-address deposit)
      (.then #(.wait %))))

(defn create-stream [^js/e sablier start-time stop-time recipient deposit]
  (-> (.createStream sablier recipient deposit testnetDAI-address start-time stop-time)
      (.then  #(.wait %))))

(defn now []
  (.round js/Math (-> (js/Date.) (.getTime) (/ 1000))))

(defn process-form [{:keys [hours quantity recipient]}]
  (let [token (token (signer))
        sablier (sablier (signer))
        now (now)
        duration (* 3600 (int hours))
        delay 60
        deposit (str (- quantity (mod quantity duration)))]
    (-> (approve-token token deposit)
        (.then #(re-frame/dispatch [:update-status :processing]))
        (.then #(create-stream
                 sablier
                 (+ now delay)
                 (+ now duration delay)
                 recipient deposit))
        (.then #(re-frame/dispatch [:update-status :finished]))
        (.catch #(re-frame/dispatch [:update-status :failed])))))
