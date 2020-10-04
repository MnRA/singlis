(ns singlis.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::stream-values
 #(:stream-values %))

(re-frame/reg-sub
 ::status
 #(:status %))
