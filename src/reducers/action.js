/**
 * Created by xinzheng on 1/23/17.
 */

/*
 * action types
 */


/*
 * action creators
 */

export function receiveOCR(res) {
  return {
    type: "receiveOCR",
    res
  }
}
