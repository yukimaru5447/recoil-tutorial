import { atom } from "recoil";

export const inputTitleState = atom<string>({
    key: "inputTitleState",
    default: "first Input Title",
})