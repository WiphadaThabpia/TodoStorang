import AsyncStorage from "@react-native-async-storage/async-storage";
import { PREFIX } from "../constants/keys";
import { get } from "react-native/Libraries/NativeComponent/NativeComponentRegistry";

export const storage = {
    // async-await
    async set(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (e) {
            console.warn('[storage.set] ล้มเหลวที่คีย์', key, e)
            return false
        }
    },

    async get(key, fallback = null) {
        try {
            const rew = await AsyncStorage.getItem(key)
            return rew != null? JSON.parse(rew) : fallback
        } catch (e) {
            console.warn('[storage.get] ล้มเหลวที่คีย์', key, e)
            return false
        }
    },

    async remove(key) {
        try {
            await AsyncStorage.removeItem(key)
        } catch (e) {
            console.warn('[storage.remove] ล้มเหลวที่คีย์', key, e)
        }
    }
}