(ns singlis.events
  (:require
   [re-frame.core :as re-frame]
   [singlis.db :as db]
   [singlis.streaming :as streaming]
   ))

(re-frame/reg-fx
 :check-balance
 (fn [_]
   (streaming/check-balance)))

(re-frame/reg-fx
 :enable-metamask
 (fn [_]
   (streaming/enable-metamask)))

(re-frame/reg-fx
 :create-stream
 (fn [stream-values]
   (streaming/process-form stream-values)))

(re-frame/reg-event-db
 :update-balance
 (fn [db [_ value]]
   (assoc db :balance value)))

(re-frame/reg-event-fx
 :check-balance
 (fn [_ _]
   {:check-balance true}))

(re-frame/reg-event-fx
 :enable-metamask
 (fn [_ _]
   {:enable-metamask true}))

(re-frame/reg-event-fx
 :create-stream
 (fn [{coeffects :db} _]
   {:db (assoc coeffects :status :requesting-approval)
    :create-stream  (:stream-values coeffects)}))

(re-frame/reg-event-db
 :stream-values
 (fn [db [_ k v]]
   (assoc-in db [:stream-values k] v)))

(re-frame/reg-event-db
 :update-status
 (fn [db [_ status]]
   (assoc db :status status)))

(re-frame/reg-event-fx
 ::initialize-db
 (fn [_ _]
   db/default-db))
