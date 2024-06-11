import type { XtxGuessInstance } from "@/types/component";
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  //滑动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return { guessRef, onScrolltolower }
}
