import { useState } from "#app";

export const useUserState = () => {
  return useState("user", () => {
    return { user: "tessttt123" };
  });
};

//ウィンドウコンポーネントの状態管理
export const useWindowState = () => {
    return useState("box", () => {
      return {windowItem: {}
       };
    });
  };