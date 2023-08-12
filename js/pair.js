import Util from "./util.js";
/**
 * Pair クラス
 */
export default class Pair {
  /**
   * プロパティ
   */
  static #rank = 0; // 役を構成するランク

  /**
   * ロイヤルストレートフラッシュの成否を判定する
   */
  static isRoyalStraightFlush = (cards) => {};

  /**
   * ストレートフラッシュの成否を判定する
   */
  static isStraightFlush = (cards) => {};

  /**
   * フォーカードの成否を判定する
   */
  static isFourCard = (cards) => {};

  /**
   * フルハウスの成否を判定する
   */
  static isFullHouse = (cards) => {};

  /**
   * フラッシュの成否を判定する
   */
  static isFlush = (cards) => {};

  /**
   * ストレートの成否を判定する
   */
  static isStraight = (cards) => {};

  /**
   * スリーカードの成否を判定する
   */
  static isThreeCard = (cards) => {};

  /**
   * ツーペアの成否を判定する
   */
  static isTwoPair = (cards) => {};

  /**
   * ワンペアの成否を判定する
   */
  static isOnePair = (cards) => {};

  /**
   * 成立条件を満たす最も強い役を判定する
   */
  static judge = (cards) => {};
}